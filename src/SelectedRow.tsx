import React from "react";

type Ref = React.MutableRefObject<number[]>;

const GetSelected = (ref: Ref) => () => ref.current;

interface SelectedRowProps {
  disableRowSelectionOnClick: boolean;
  checkboxSelection: boolean;
  onRowSelectionModelChange: (selected: number[]) => void;
}

const NewSelectedRowProps = (ref: Ref) => ({
  disableRowSelectionOnClick: true,
  checkboxSelection: true,
  onRowSelectionModelChange: (selected: number[]) => ref.current = selected,
});

export {
  GetSelected,
  NewSelectedRowProps,
  SelectedRowProps,
}
