import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface LoginProps {
  redirectUri: string;
  clientId: string;
  authUrl: string;
  callbackPath?: string;
  // scopes?: string[];
}

interface Props {
  setChar: (char: Character) => void;
  loginProps: LoginProps;
}

interface Character {
  refreshToken: string;
  characterId: number;
  characterName: string;
}

const LoginSplash = (props: Props): React.ReactElement => {
  const { setChar, loginProps } = props;
  const {
    callbackPath: unfmtCallbackPath,
    redirectUri,
    clientId,
    authUrl,
    // scopes,
  } = loginProps;

  // true if we are currently authenticating or have authenticated
  let authenticating = true;

  const char = sessionStorage.getItem('LS_TOKEN');

  if (char) setChar(JSON.parse(char));

  else if (sessionStorage.getItem('LS_SENT') == null) {
    const callbackPath = fmtCallbackPath(unfmtCallbackPath);
    const [esiCode, idx] = checkLogin(callbackPath);
    if (esiCode && sessionStorage.getItem('LS_SENT') == null) {
      sessionStorage.setItem('LS_SENT', '');
      authenticate(esiCode, authUrl, (newChar) => {
        sessionStorage.setItem('LS_TOKEN', JSON.stringify(newChar));
        fixLoginUrl(idx);
      });
    }
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
        // + scopes? `&scope=${encodeURI(scopes.join(' '))}` : ''
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
        // src={require('../eve-sso-login-black-large.png')}
        src={'https://web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-black-large.png'}
        alt={'Login with EVE SSO'}
      />
    </a>
  );
}

function authenticate(
  esiCode: string,
  authUrl: string,
  callback: (char: Character) => void,
): void {
  // Send a request to authUrl with ?code=esiCode and get the rep
  fetch(`${authUrl}/?code=${esiCode}`, { method: 'POST' })
    // Decode the JSON body (which is a Character)
    .then((rep) => rep.json())
    // Call the callback with the Character
    .then((rep) => {
      if (rep['err']) console.log(rep['err'])/*throw new Error(rep['err']);*/
      else callback(rep);
    })
}

// Removes trailing slashes, and ensures there is 1 single leading slash
// Unless undefined, empty string, or string of only slashes, in which case
// returns empty string
function fmtCallbackPath(unfmtCallbackPath?: string): string {
  const re = /^\/*(.*)\/*$/;
  let callbackPath: string;

  if (!unfmtCallbackPath) callbackPath = '';
  else callbackPath = unfmtCallbackPath.match(re)?.[1] || '';

  if (callbackPath === '') return '';
  else return `/${callbackPath}`;
}

function checkLogin(callbackPath: string): [string, number] | [null, null] {
  const escapedCallbackPath = callbackPath.replace(
    /[.*+?^${}()|[\]\\]/g,
    '\\$&',
  );
  // const re = new RegExp(`${escapedCallbackPath}/\\?code=(.*)&state=.*$`);
  const re = new RegExp(`${escapedCallbackPath}/\\?code=(.*)&state=.*$`);
  const url = window.location.href;
  const match = re.exec(url);
  if (match) {
    const code = match[1];
    return [code, match.index];
  } else return [null, null];
}

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
