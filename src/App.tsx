import React from "react";
import Home from "./content/index.js";
import { Popup, PopupThrower, Err } from "./Popup.js";
import Header from "./Header.js";
import { LoginSplash, LoginProps, Character } from "./LoginSplash";
import { ItemConfiguratorClient as GrpcClient } from "./pb.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';

const Theme = createTheme({
  palette: {
    mode: 'dark',
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
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const App = (props: Props): React.ReactElement => {
  const { loginProps, businesses, languages, grpcUrl, esiApps } = props;

  const onCancelRef = React.useRef<() => void>(() => {});
  const onSaveRef = React.useRef<() => void>(() => {});
  const langRef = React.useRef<string>(languages[0]);

  const [char, setChar] = React.useState<Character>();
  const [chars, setChars] = React.useState<Map<string, Character>>(new Map());
  const [popup, setPopup] = React.useState<Popup>();
  // https://stackoverflow.com/questions/74033844/reacts-useref-hook-doesnt-take-a-function
  const [grpcClient, _] = React.useState(() => createClient(grpcUrl));

  const url = window.location.href.replace(/\/\?code=.*&state=.*$/, '');
  for (const app of esiApps) {
    if (url.endsWith(`${app.namespace}/`)
      || url.endsWith(`${app.namespace}`))
    {
      const nsChar = chars.get(app.namespace);
      if (nsChar === undefined) return (
        <div className={'default'}>
          <PopupThrower
            popup={popup}
            open={popup !== undefined}
            close={() => setPopup(undefined)}
          />
          <LoginSplash
            loginProps={{
              redirectUri: app.redirect_uri,
              authUrl: loginProps.authUrl,
              namespace: app.namespace,
              callbackPath: undefined,
              clientId: app.client_id,
              scopes: app.scopes,
            }}
            setChar={(char: Character) => setChars(new Map(
              chars.set(app.namespace, char))
            )}
            handleErr={(err: Error) => setPopup(Err(err))}
          />
        </div>
      );
      else return (
        <div className={'default'}>
          {nsChar.refreshToken}
        </div>
      );
    }
  }

  if (char === undefined) return (
    <div className={'default'}>
      <PopupThrower
        popup={popup}
        open={popup !== undefined}
        close={() => setPopup(undefined)}
      />
      <LoginSplash
        loginProps={loginProps}
        setChar={setChar}
        handleErr={(err: Error) => setPopup(Err(err))}
      />
    </div>
  );

  // Ensure that these do nothing at this point.
  onCancelRef.current = () => {};
  onSaveRef.current = () => {};

  return (
    <ThemeProvider theme={Theme}>
      <div className={'default flexcol app-host'}>
        <PopupThrower
          popup={popup}
          open={popup !== undefined}
          close={() => setPopup(undefined)}
        />
        <div className={'default header'}>
          <Header
            onCancelRef={onCancelRef}
            onSaveRef={onSaveRef}
            langRef={langRef}
            langs={languages}
            charName={char.characterName}
            charId={char.characterId}
          />
        </div>
        <div className={'cfg-height-spacer'}/>
        <div className={'default content'}>
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
        <div className={'cfg-height-spacer'}/>
      </div>
    </ThemeProvider>
  )
}

const createClient = (url: string) => new GrpcClient(
  new GrpcWebFetchTransport({
    baseUrl: url,
  })
);

export default App;
export type { EsiApp };
