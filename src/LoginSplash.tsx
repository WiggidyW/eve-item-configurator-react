import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LoginImage from './Assets/eve-sso-login-black-large.png';
import { skip } from 'node:test';

// We don't handle fetches with useEffect because of the callback url.
// Instead, we leverage sessionStorage and a global variable.

// Tracks if we are currently authenticating for a given url and code
// This spans multiple instances of the component
const AUTH_SENT = new Map<string, boolean>();

interface LoginProps {
  redirectUri: string;
  clientId: string;
  authUrl: string;
  scopes: string[];
  callbackPath?: string;
  namespace?: string;
  skipFixUrl?: boolean;
}

interface Props {
  setChar: (char: Character) => void;
  handleErr: (err: Error) => void;
  loginProps: LoginProps;
}

interface Character {
  refreshToken: string;
  characterId: number;
  characterName: string;
}

const LoginSplash = (props: Props): React.ReactElement => {
  const { setChar, handleErr, loginProps } = props;
  const {
    callbackPath: unfmtCallbackPath,
    redirectUri,
    clientId,
    authUrl,
    scopes,
    namespace,
    skipFixUrl,
  } = loginProps;

  const sessionToken = namespace? `${namespace}_LS_TOKEN` : 'LS_TOKEN';

  const fetchAndHandleAuth = (
    esiCode: string,
    fixUrlIdx: number,
  ) => fetchAuth(authUrl, esiCode, namespace, handleErr, (char: Character) => {
    sessionStorage.setItem(sessionToken, JSON.stringify(char));
    if (!skipFixUrl) fixLoginUrl(fixUrlIdx);
  });

  // true if we are currently authenticating or have authenticated
  let authenticating = true;

  const char = sessionStorage.getItem(sessionToken);
  if (char) setChar(JSON.parse(char));
  else {
    const callbackPath = fmtCallbackPath(unfmtCallbackPath);
    const [esiCode, fixUrlIdx] = checkLogin(callbackPath);
    if (esiCode) fetchAndHandleAuth(esiCode, fixUrlIdx);
    else authenticating = false;
  }

  // Render a loading circle
  if (authenticating) return <CircularProgress/>;
  // Render the login button
  else return (
    <a
      href={'https://login.eveonline.com/v2/oauth/authorize/'
        + '?response_type=code'
        + `&redirect_uri=${encodeURI(redirectUri)}`
        + `&client_id=${encodeURI(clientId)}`
        + (scopes.length > 0 ? `&scope=${encodeURI(scopes.join(' '))}` : '')
        // Get a random state
        + '&state='
        + Math.random().toString(36).slice(2, 7)
        + Math.random().toString(36).slice(2, 7)
      }
    >
      <img
        style={{
          minWidth: '270px',
          minHeight: '45px',
        }}
        // src={'https://web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-black-large.png'}
        src={LoginImage}
        alt={'Login with EVE SSO'}
      />
    </a>
  );
}

// Sends out an authentication request, but only if one isn't in progress
// for the same URL and Code
const fetchAuth = async (
  authUrl: string,
  esiCode: string,
  namespace: string | undefined,
  handleErr: (err: Error) => void,
  handleOk: (char: Character) => void,
): Promise<void> => {
  console.log(namespace);
  const fetchUrl = 
    `${authUrl}/?code=${esiCode}${namespace? `&namespace=${namespace}` : ''}`;

  // Don't send multiple requests to the same url
  if (AUTH_SENT.get(fetchUrl)) return;
  
  // Send a request to authUrl with ?code=esiCode and handle the result
  else AUTH_SENT.set(fetchUrl, true);
  try {
    const rep = await fetch(fetchUrl, { method: 'POST' });
    const body = await rep.json();
    if (body['err']) throw new Error(body['err']);
    else handleOk(body as Character);
  } catch (err: any) {
    handleErr(err as Error);
  }
}

// Removes trailing slashes, and ensures there is 1 single leading slash
// Unless undefined, empty string, or string of only slashes, in which case
// returns empty string
const fmtCallbackPath = (unfmtCallbackPath?: string): string => {
  const re = /^\/*(.*)\/*$/;
  let callbackPath: string;

  if (!unfmtCallbackPath) callbackPath = '';
  else callbackPath = unfmtCallbackPath.match(re)?.[1] || '';

  if (callbackPath === '') return '';
  else return `/${callbackPath}`;
}

// Checks if the current url is a callback url, and if so, returns the code
// and the index of the start of the callback path in the url
const checkLogin = (callbackPath: string): [string, number] | [null, null] => {
  const escapedCallbackPath = callbackPath.replace(
    /[.*+?^${}()|[\]\\]/g,
    '\\$&',
  );
  const re = new RegExp(`${escapedCallbackPath}/\\?code=(.*)&state=.*$`);
  const url = window.location.href;
  const match = re.exec(url);
  if (match) {
    const code = match[1];
    return [code, match.index];
  } else return [null, null];
}

// Removes the callback path and query string from the url
function fixLoginUrl(index: number): void {
  window.location.href = window.location.href.slice(0, index);
}

export type {
  Props as LoginSplashProps,
  LoginProps,
  Character,
}
export {
  LoginSplash,
};
