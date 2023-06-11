import React from 'react';

import StretchyDataGrid from 'stretchy-data-grid';
import Row from "./Row";

import { GridColDef } from '@mui/x-data-grid';

interface Props {
  selectedSetter: (selected: number[]) => void;
  columns: GridColDef[];
  rows: Row[];
}

export default function Grid(props: Props): React.ReactElement {
  const { selectedSetter, ...other } = props;
  return (
    <StretchyDataGrid
      onRowSelectionModelChange={(selected) => selectedSetter(selected)}
      disableRowSelectionOnClick={true}
      checkboxSelection={true}
      {...other}
    />
  );
}
