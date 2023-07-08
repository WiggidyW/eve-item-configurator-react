import React from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";

type Ref = React.MutableRefObject<number[]>;

const GetSelected = (ref: Ref) => () => ref.current;

interface SelectedRowProps {
  disableRowSelectionOnClick: boolean;
  checkboxSelection: boolean;
  onRowSelectionModelChange: (selected: GridRowSelectionModel) => void;
}

const NewSelectedRowProps = (ref: Ref): SelectedRowProps => ({
  disableRowSelectionOnClick: true,
  checkboxSelection: true,
  onRowSelectionModelChange: (selected: GridRowSelectionModel) =>
    (ref.current = selected as number[]),
});

export type { SelectedRowProps };
export { NewSelectedRowProps, GetSelected };
