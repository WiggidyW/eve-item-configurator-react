import React from "react";

import ItemsConfigureInput from "./ItemsConfigureInput";
import Configurator from "./Configurator";
import { UpdateRep } from "./GRPC";
import Popup from "./Popup";
import Row from "./Row";

import { GridColDef } from '@mui/x-data-grid';

interface Props {
  jsonSetter: (key: string, value: string) => void;
  jsonKeys: string[];
  refreshTokenRef: React.MutableRefObject<string>;
  onSaveRef: React.MutableRefObject<() => void>;
  hasChanges: () => boolean;
  sendChanges: () => Promise<UpdateRep>;
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  returnHome: () => void;
  throwPopup: (popup: Popup) => void;
  selectedSetter: (selected: number[]) => void;
  columns: GridColDef[];
  rows: Row[];
}

export default function ItemsConfigure(props: Props): React.ReactElement {
  const { jsonSetter, jsonKeys, throwPopup, ...other } = props;
  return (
    <Configurator
      cfgInput={ItemsConfigureInput}
      cfgInputProps={{
        keys: jsonKeys,
        throwPopup: throwPopup,
        jsonSetter: jsonSetter,
      }}
      throwPopup={throwPopup}
      {...other}
    />
  )
}
