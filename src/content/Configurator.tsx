import React from 'react';

import { Popup, Success, NotAuthorized, Err } from '../Popup';
import Grid, { GridProps } from './Grid';

import ConfiguratorProps from './ConfiguratorProps';
import { CircularProgress } from '@mui/material';

interface UpdateRep {
  refreshToken: string;
  authorized: boolean;
}

interface Props<P> {
  cfgProps: ConfiguratorProps;
  gridProps: GridProps;
  sendChanges: () => Promise<UpdateRep>;
  hasChanges: () => boolean;
  cfgInput: (props: P) => React.ReactElement;
  cfgInputProps: P;
}

const Configurator = <P,>(props: Props<P>): React.ReactElement => {
  const {
    cfgProps,
    gridProps,
    sendChanges,
    hasChanges,
    cfgInput: CfgInput,
    cfgInputProps,
  } = props;
  const { returnHome, throwPopup, refreshTokenRef, onSaveRef } = cfgProps;

  const [updating, setUpdating] = React.useState(false);

  // Update the save button to send and handle changes
  onSaveRef.current = () => sendAndHandleChanges();

  // Throws a popup and returns home, returning an empty element until the
  // home component is rendered again.
  const throwPopupAndReturnHome = (v: Popup): void => {
    throwPopup(v);
    returnHome();
  };

  const sendAndHandleChanges = async (): Promise<void> => {
    if (updating) throwPopup({
      title: 'Already Updating',
      message: 'Please wait for the current update to finish.',
      ok: true,
    });
    else if (!hasChanges()) throwPopup({
      title: 'No Changes',
      message: 'There are no changes to save.',
      ok: true,
    });
    else {
      setUpdating(true);
      // Sends out the changes as a Promise.
      // After Promise resolves, throws a popup and returns home.
      sendChanges()
        .then((rep) => {
          refreshTokenRef.current = rep.refreshToken; // Update it
          if (!rep.authorized) throwPopupAndReturnHome(NotAuthorized);
          else throwPopupAndReturnHome(Success);
        })
        .catch((e: Error) => throwPopupAndReturnHome(Err(e)));
    }
  };

  if (updating) return (
    <CircularProgress/>
  );
  else return (
    <>
      <div className={'cfg-width-spacer'}/>
      <div className={'cfg-input'}>
        {/* @ts-ignore */}
        <CfgInput {...(cfgInputProps as P)} />
      </div>
      <div className={'cfg-width-spacer'}/>
      <div className={'cfg-grid'}>
        <Grid {...gridProps} />
      </div>
      <div className={'cfg-width-spacer'}/>
    </>
  );
}

export default Configurator;
