import React from "react";
import { SelectedRowProps } from "./SelectedRow";
import Row from "./Row";
import { DataGridPro, GridColDef } from "@mui/x-data-grid-pro";

interface Props {
  selectedRowProps?: SelectedRowProps;
  columns: GridColDef[];
  rows: Row[];
}

const Grid = (props: Props): React.ReactElement => {
  const { selectedRowProps, columns, rows } = props;
  return (
    <DataGridPro
      sx={{ height: "100%", width: "100%" }}
      {...selectedRowProps}
      columns={columns}
      rows={rows}
      disableColumnPinning
      autoPageSize
      pagination
    />
  );
};

export default Grid;
export type { Props as GridProps };
