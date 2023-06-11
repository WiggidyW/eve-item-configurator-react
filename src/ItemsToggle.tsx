import React from "react";

import ItemsToggleInput from "./ItemsToggleInput";
import Configurator from "./Configurator";
import { UpdateRep } from "./GRPC";
import Popup from "./Popup";
import Row from "./Row";

import { GridColDef } from '@mui/x-data-grid';

interface Props {
  enabledSetter: (enabled: boolean) => void;
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

export default function ItemsToggle(props: Props): React.ReactElement {
  const { enabledSetter, ...other } = props;
  return (
    <Configurator
      cfgInput={ItemsToggleInput}
      cfgInputProps={{
        enabledSetter: enabledSetter,
      }}
      {...other}
    />
  )
}
