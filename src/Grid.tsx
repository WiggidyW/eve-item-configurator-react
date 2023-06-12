import React from 'react';

import { SelectedRowProps } from './SelectedRow';
import Row from "./Row";

import StretchyDataGrid from 'stretchy-data-grid';

import { GridColDef } from '@mui/x-data-grid';

interface Props {
  selectedRowProps?: SelectedRowProps;
  columns: GridColDef[];
  rows: Row[];
}

const Grid = (props: Props): React.ReactElement => {
  const { selectedRowProps, columns, rows } = props;
  return (
    <StretchyDataGrid
      {...selectedRowProps}
      columns={columns}
      rows={rows}
    />
  );
}

export default Grid;
export {
  Props as GridProps,
};
