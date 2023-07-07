import React from "react";
import Home from "./content/index.js";
import { Popup, PopupThrower, Err } from "./Popup.js";
import Header from "./Header.js";
import {
  LoginSplash,
  LoginProps,
  Character,
  useStorageCharacter,
} from "./LoginSplash";
import { ItemConfiguratorClient as GrpcClient } from "./pb.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";

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

const Style = {
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const App = (props: Props): React.ReactElement => {
  const { loginProps, businesses, languages, grpcUrl, esiApps } = props;

  const onCancelRef = React.useRef<() => void>(() => {});
  const onSaveRef = React.useRef<() => void>(() => {});
  const langRef = React.useRef<string>(languages[0]);

  const grpcClient = React.useState(() => createClient(grpcUrl))[0];
  const [popup, setPopup] = React.useState<Popup>();

  const esiApp = useEsiApp(esiApps);
  const char = useStorageCharacter(esiApp?.namespace);

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

  /* else if (char !== null && esiApp === null) { */
  // Ensure that these do nothing at this point.
  onCancelRef.current = () => {};
  onSaveRef.current = () => {};
  // Return the admin page content
  return (
    <ThemeProvider theme={Theme}>
      <div className={"default flexcol app-host"}>
        <PopupThrower
          popup={popup}
          open={popup !== undefined}
          close={() => setPopup(undefined)}
        />
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
        <div className={"default content"}>
          <Home
            refreshToken={char.refreshToken}
            businesses={businesses}
            onCancelRef={onCancelRef}
            onSaveRef={onSaveRef}
            langRef={langRef}
            throwPopup={setPopup}
            grpcClient={grpcClient}
          />
        </div>
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
  const mostRecentUrlRef = React.useRef<string>("");
  const esiAppRef = React.useRef<EsiApp | null>(null);

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
