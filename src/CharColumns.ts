// @ts-nocheck
import { renderName } from "./CharRender";

import { GridColDef } from '@mui/x-data-grid';

const NewCharColumns = (getName: (idx: number) => string): GridColDef[] => {
  return [{
    field: 'name',
    headerName: 'Name',
    valueGetter: (params) => getName(params.row.id),
    renderCell: (params) => renderName(getName(params.row.id)),
    stretch: true,
  }];
}

export default NewCharColumns;
