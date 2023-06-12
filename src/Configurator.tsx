import React from 'react';

import { Success, NotAuthorized, Err } from './Popup';
import { UpdateRep } from "./GRPC";
import Grid, { GridProps } from './Grid';
import Row from "./Row";

import { GridColDef } from '@mui/x-data-grid';
import ConfiguratorProps from './ConfiguratorProps';
import { CircularProgress } from '@mui/material';

interface Props<P> {
  cfgProps: ConfiguratorProps;
  gridProps: GridProps;
  sendChanges: () => Promise<UpdateRep>;
  hasChanges: () => boolean;
  cfgInput: (P) => React.ReactElement;
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

  const onSave = function() {
    if (hasChanges()) {
      setUpdating(true); // render a loading screen
      // Send out the changes and wait for the response.
      sendChanges().catch((e: Error) => e).then((rep) => {
        if (rep instanceof Error) throwPopup(Err(rep));
        else {
          refreshTokenRef.current = rep.refreshToken;
          if (rep.authorized) throwPopup(Success);
          else throwPopup(NotAuthorized);
        }
      });
    }
    returnHome();
  };

  onSaveRef.current = onSave; // trigger whenever save is clicked

  if (updating) return (
    <CircularProgress/>
  );
  else return (
    <div
      style={{}}
    >
      <CfgInput {...cfgInputProps} />
      <div style={{}} />
      <Grid {...gridProps} />
    </div>
  );
}
