import React, { useRef, useState } from "react";
import Home from "./content/items/Home";
import { Popup, PopupThrower, Err } from "./Popup";
import Header from "./Header";
import {
  LoginSplash,
  LoginProps,
  Character,
  useStorageCharacter,
} from "./LoginSplash";
import { ItemConfiguratorClient as GrpcClient } from "./pb/item_configurator.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";
import Navigation from "./Navigation";
import Authorization from "./content/authorization/Authorization";

const TABS = ["Items", "Buyback Contracts", "Authorization"];

const Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface EsiApp {
  namespace: string;
  client_id: string;
  redirect_uri: string;
  scopes: string[];
}

interface Props {
  loginProps: LoginProps;
  businesses: string[];
  languages: string[];
  grpcUrl: string;
  esiApps: EsiApp[];
}

const App = (props: Props): React.ReactElement => {
  const { loginProps, businesses, languages, grpcUrl, esiApps } = props;

  const [tab, setTab] = useState(TABS[0]);
  const onCancelRef = useRef<() => void>(() => {});
  const onSaveRef = useRef<() => void>(() => {});
  const langRef = useRef<string>(languages[0]);
  const grpcClient = useState(() => createClient(grpcUrl))[0];
  const [popup, setPopup] = useState<Popup>();
  const esiApp: EsiApp | null = useEsiApp(esiApps);
  const initRefreshTokenRef = useRef<string | null>(null);
  const char: Character | null = useStorageCharacter(esiApp?.namespace);

  // Return the login page for the specified esiApp
  if (char === null && esiApp !== null)
    return (
      <div className={"default"}>
        <PopupThrower
          popup={popup}
          open={popup !== undefined}
          close={() => setPopup(undefined)}
        />
        <LoginSplash
          loginProps={{
            redirectUri: esiApp.redirect_uri,
            authUrl: loginProps.authUrl,
            namespace: esiApp.namespace,
            callbackPath: undefined,
            clientId: esiApp.client_id,
            scopes: esiApp.scopes,
          }}
          handleErr={(err: Error) => setPopup(Err(err))}
        />
      </div>
    );
  // Return the login page for null esiApp
  else if (char === null /* && esiApp === null */)
    return (
      <div className={"default"}>
        <PopupThrower
          popup={popup}
          open={popup !== undefined}
          close={() => setPopup(undefined)}
        />
        <LoginSplash
          loginProps={loginProps}
          handleErr={(err: Error) => setPopup(Err(err))}
        />
      </div>
    );
  // Return the refresh token for the specified esiApp
  else if (/* char !== null && */ esiApp !== null) {
    return <div className={"default"}>{char.refreshToken}</div>;
  }

  // char !== null && esiApp === null

  const renderTab = (tab: string): React.ReactElement => {
    switch (tab) {
      case "Items":
        return (
          <Home
            refreshTokenRef={refreshTokenRef}
            businesses={businesses}
            onCancelRef={onCancelRef}
            onSaveRef={onSaveRef}
            throwPopup={setPopup}
            grpcClient={grpcClient}
            langRef={langRef}
          />
        );
      case "Authorization":
        return (
          <Authorization
            refreshTokenRef={refreshTokenRef}
            businesses={businesses}
            onCancelRef={onCancelRef}
            onSaveRef={onSaveRef}
            throwPopup={setPopup}
            grpcClient={grpcClient}
            langRef={langRef}
          />
        );
      case "Buyback Contracts":
        return <div>Not implemented</div>;
      default:
        throw new Error("Invalid tab");
    }
  };

  // Ensure that these do nothing at this point.
  onCancelRef.current = () => {};
  onSaveRef.current = () => {};
  // Initialize this once the first time
  if (initRefreshTokenRef.current === null)
    initRefreshTokenRef.current = char.refreshToken;
  // Cast to a type that does not have the null union option
  const refreshTokenRef = initRefreshTokenRef as React.MutableRefObject<string>;

  // Return the admin page content
  return (
    <ThemeProvider theme={Theme}>
      <div className={"default flexcol app-host"}>
        <PopupThrower
          popup={popup}
          open={popup !== undefined}
          close={() => setPopup(undefined)}
        />
        <Navigation tabs={TABS} onSelect={(tab: string) => setTab(tab)} />
        <div className={"default header"}>
          <Header
            onCancelRef={onCancelRef}
            onSaveRef={onSaveRef}
            langRef={langRef}
            langs={languages}
            charName={char.characterName}
            charId={char.characterId}
          />
        </div>
        <div className={"cfg-height-spacer"} />
        <div className={"default content"}>{renderTab(tab)}</div>
        <div className={"cfg-height-spacer"} />
      </div>
    </ThemeProvider>
  );
  /* } */
};

const findAppMatchinghNamespace = (
  esiApps: EsiApp[],
  namespace: string | null
): EsiApp | null => {
  if (namespace !== null) {
    for (const esiApp of esiApps) {
      if (esiApp.namespace === namespace) return esiApp;
    }
  }
  return null;
};

const useEsiApp = (esiApps: EsiApp[]): EsiApp | null => {
  const currentUrl = window.location.href;
  const mostRecentUrlRef = useRef<string>("");
  const esiAppRef = useRef<EsiApp | null>(null);

  if (currentUrl !== mostRecentUrlRef.current) {
    mostRecentUrlRef.current = currentUrl;
    // Get the last path segment of the url and use it as the namespace
    for (const path of window.location.pathname.split("/").reverse()) {
      if (path.length > 0) {
        // Find the esiApp matching the namespace or null if none match
        esiAppRef.current = findAppMatchinghNamespace(esiApps, path);
        break;
      }
    }
  }

  return esiAppRef.current;
};

const createClient = (url: string) =>
  new GrpcClient(
    new GrpcWebFetchTransport({
      baseUrl: url,
    })
  );

export default App;
export type { EsiApp };
