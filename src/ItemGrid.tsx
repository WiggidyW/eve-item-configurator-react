import React from 'react';

import { renderName, renderCategory, renderGroup, renderMarketGroup, renderEnabled, renderJson } from './ItemRender';
import { JsonString, ItemIndex } from "./TypeUtil";
import StretchyDataGrid from 'stretchy-data-grid';
import Row from "./Row";

export interface Props {
  jsonGetter: (i: ItemIndex, key: string) => JsonString | null;
  selectedSetter: (value: ItemIndex[]) => void;
  marketGroupGetter: (i: ItemIndex) => string;
  categoryGetter: (i: ItemIndex) => string;
  enabledGetter: (i: ItemIndex) => boolean;
  typeIdGetter: (i: ItemIndex) => number;
  groupGetter: (i: ItemIndex) => string;
  nameGetter: (i: ItemIndex) => string;
  jsonKeys: string[];
  rows: Row[];
  [other: string]: any;
}

export default function ItemGrid(props: Props) {
  const {
    marketGroupGetter,
    selectedSetter,
    categoryGetter,
    enabledGetter,
    typeIdGetter,
    groupGetter,
    nameGetter,
    jsonGetter,
    jsonKeys,
    ...other
  } = props;
  return (
    <StretchyDataGrid
      checkboxSelection={true}
      disableRowSelectionOnClick={true}

      onRowSelectionModelChange={(model) => selectedSetter(model)}

      columns={[
        {
          field: 'name',
          headerName: 'Name',
          valueGetter: (params) => nameGetter(params.row.id),
          renderCell: (params) => renderName(
            nameGetter(params.row.id),
            typeIdGetter(params.row.id),
          ),
          stretch: true,
        },
        {
          field: 'category',
          headerName: 'Category',
          valueGetter: (params) => categoryGetter(params.row.id),
          renderCell: (params) => renderCategory(
            categoryGetter(params.row.id),
          ),
          stretch: true,
        },
        {
          field: 'group',
          headerName: 'Group',
          valueGetter: (params) => groupGetter(params.row.id),
          renderCell: (params) => renderGroup(groupGetter(params.row.id)),
          stretch: true,
        },
        {
          field: 'marketGroup',
          headerName: 'Market',
          valueGetter: (params) => marketGroupGetter(params.row.id),
          renderCell: (params) => renderMarketGroup(
            marketGroupGetter(params.row.id),
          ),
          stretch: true,
        },
        ...jsonKeys.map((key) => ({
          field: key,
          headerName: key,
          valueGetter: (params) => jsonGetter(params.row.id, key),
          renderCell: (params) => renderJson(
            jsonGetter(params.row.id, key) ?? "",
          ),
          stretch: true,
        })),
        {
          field: 'enabled',
          headerName: 'Enabled',
          valueGetter: (params) => enabledGetter(params.row.id),
          renderCell: (params) => renderEnabled(enabledGetter(params.row.id)),
        },
      ]}

      {...other}
    />
  );
}
