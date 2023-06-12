// @ts-nocheck
import { renderName, renderCategory, renderGroup, renderMarketGroup } from "./ItemRender";
import { ItemProps } from "./BuilderProps";

import { GridColDef } from '@mui/x-data-grid';

const NewItemColumns = (props: ItemProps): GridColDef[] => {
  const {
    getMarketGroup,
    getCategory,
    getGroup,
    getName,
    getTypeId,
  } = props;

  return [
    {
      field: 'name',
      headerName: 'Name',
      valueGetter: (params) => getName(params.row.id),
      renderCell: (params) => renderName(
        getName(params.row.id),
        getTypeId(params.row.id),
      ),
      stretch: true,
    },
    {
      field: 'category',
      headerName: 'Category',
      valueGetter: (params) => getCategory(params.row.id),
      renderCell: (params) => renderCategory(getCategory(params.row.id)),
      stretch: true,
    },
    {
      field: 'group',
      headerName: 'Group',
      valueGetter: (params) => getGroup(params.row.id),
      renderCell: (params) => renderGroup(getGroup(params.row.id)),
      stretch: true,
    },
    {
      field: 'marketGroup',
      headerName: 'Market',
      valueGetter: (params) => getMarketGroup(params.row.id),
      renderCell: (params) => renderMarketGroup(
        getMarketGroup(params.row.id),
      ),
      stretch: true,
    },
  ];
}

export default NewItemColumns;
