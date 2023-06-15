import React from "react";
import Home from "./content/index.js";
import { Popup, PopupThrower } from "./Popup.js";
import Header from "./Header.js";
import { LoginSplash, LoginProps, Character } from "./LoginSplash";
import { ItemConfiguratorClient as GrpcClient } from "./pb.client.js";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';

const Theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface Props {
  loginProps: LoginProps;
  businesses: string[];
  languages: string[];
  grpcUrl: string;
}

const Style = {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const App = (props: Props): React.ReactElement => {
  const { loginProps, businesses, languages, grpcUrl } = props;

  const onCancelRef = React.useRef<() => void>(() => {});
  const onSaveRef = React.useRef<() => void>(() => {});
  const langRef = React.useRef<string>(languages[0]);

  const [char, setChar] = React.useState<Character>({
    characterId: 2118039281,
    characterName: "Moodemel Molou",
    refreshToken: "xPdK0GGsyEaB5HaqrUKJrA==",
  });
  // });
  const [popup, setPopup] = React.useState<Popup>();
  // https://stackoverflow.com/questions/74033844/reacts-useref-hook-doesnt-take-a-function
  const [grpcClient, _] = React.useState(() => createClient(grpcUrl));

  // Ensure that these do nothing at this point.
  onCancelRef.current = () => {};
  onSaveRef.current = () => {};

  if (char === undefined) return (
    <div style={Style}>
      <LoginSplash
        loginProps={loginProps}
        setChar={setChar}
      />
    </div>
  );

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
