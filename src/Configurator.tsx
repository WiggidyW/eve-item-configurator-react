import React from 'react';

import { Success, NotAuthorized, Err } from './Popup';
import { UpdateRep } from "./GRPC";
import Grid from './Grid';
import Row from "./Row";

import { GridColDef } from '@mui/x-data-grid';

interface Props<P> {
  cfgInput: (P) => React.ReactElement;
  cfgInputProps: P;
  refreshTokenRef: React.MutableRefObject<string>;
  onSaveRef: React.MutableRefObject<() => void>;
  hasChanges: () => boolean;
  sendChanges: () => Promise<UpdateRep>;
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  returnHome: () => void;
  throwPopup: (Popup) => void;
  selectedSetter: (selected: number[]) => void;
  columns: GridColDef[];
  rows: Row[];
}

export default function Configurator<P>(props: Props<P>): React.ReactElement {
  const {
    cfgInput: CfgInput,
    cfgInputProps,
    refreshTokenRef,
    onSaveRef,
    hasChanges,
    sendChanges,
    setUpdating,
    returnHome,
    throwPopup,
    ...other
  } = props;

  const onSave = function() {
    // Return to the home screen.
    returnHome();

    // If there are no changes, return from here.
    if (!hasChanges()) {
      return;
    }

    // Set updating to true. Home will render a loading screen.
    setUpdating(true);

    // Send out the changes and wait for the response.
    sendChanges().catch((e: Error) => e).then((rep) => {
      // Set updating to false now that the request is done.
      setUpdating(false);

      // If Err, throw an error popup.
      if (rep instanceof Error) {
        throwPopup(Err(rep));

      // If Ok, update the token and check authorization.
      } else {
        refreshTokenRef.current = rep.refreshToken;

        // If authorized, throw a success popup.
        if (rep.authorized) {
          throwPopup(Success);

        // If not authorized, throw a not authorized popup.
        } else {
          throwPopup(NotAuthorized);
        }
      }
    });
  };

  // Set the onSaveRef to the onSave function, triggering whenever save is
  // clicked.
  onSaveRef.current = onSave;

  // Return the configurator.
  return (
    <div
      style={{}}
    >
      <CfgInput
        {...cfgInputProps}
      />
      <div style={{}} />
      <Grid
        {...other}
      />
    </div>
  );
}
