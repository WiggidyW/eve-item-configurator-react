import React from "react";

import { item_configurator_proto as pb } from "./item_configurator_pb.js";
import { prettifyObj } from "./JsonUtil.js";
import NewItem from "./NewItem.js";
import Popup from "./Popup.js";
import Row from "./Row.js";
import {
  renderName,
  renderMarketGroup,
  renderCategory,
  renderGroup,
  renderEnabled,
  renderJson,
} from "./ItemRender";

interface Props {
  child: (props) => React.JSX.Element;
  jsonKeys: Set<string>;
  newItems: NewItem[];
  jsonGetter: (idx: number, key: string) => string;
  marketGroupGetter: (idx: number) => string;
  categoryGetter: (idx: number) => string;
  enabledGetter: (idx: number) => boolean;
  typeIdGetter: (idx: number) => number;
  groupGetter: (idx: number) => string;
  nameGetter: (idx: number) => string;
  grpcClient: pb.ItemConfigurator;
  business: string;
  rows: Row[];
  refreshTokenRef: React.MutableRefObject<string>;
  onSaveRef: React.MutableRefObject<() => void>;
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  returnHome: () => void;
  throwPopup: (popup: Popup) => void;
}

export default function BuilderItemsStateful(
  props: Props,
): React.JSX.Element {
  const {
    child: Child,
    jsonKeys: initJsonKeys,
    newItems: initNewItems,
    jsonGetter: initJsonGetter,
    marketGroupGetter,
    categoryGetter,
    enabledGetter: initEnabledGetter,
    typeIdGetter,
    groupGetter,
    nameGetter,
    grpcClient,
    business,
    refreshTokenRef,
    ...other
  } = props;

  const selectedRowsRef = React.useRef<number[]>([]);

  const [newItems, setNewItems] = React.useState(initNewItems);
  const [jsonKeys, setJsonKeys] = React.useState(initJsonKeys);
  const [newJsonStrs, setNewJsonStrs] = React.useState<string[]>([]);

  const jsonColumns = Array.from(jsonKeys);

  // Return the new JSON value if it exists,
  // otherwise return the old JSON value (if it exists)
  const jsonGetter = function(idx: number, key: string) {
    const newIdx: number | undefined = newItems[idx].jsonIdx[key];
    return newIdx? newJsonStrs[newIdx] : initJsonGetter(idx, key);
  };

  // Return the enabled state of the newItems if it is not null,
  // otherwise return the enabled state of the old item
  const enabledGetter = function(idx: number) {
    return newItems[idx].enabled ?? initEnabledGetter(idx);
  };

  const selectedSetter = function(selected: number[]) {
    selectedRowsRef.current = selected;
  };

  // Set {key: JSON value} for every selected item
  const jsonSetter = function(key: string, value: any) {
    // The index of the new value is the length of the array
    const newJsonIndex = newJsonStrs.length;
    newJsonStrs.push(prettifyObj(value));
    // Update selected items with key: newindex
    for (const i of selectedRowsRef.current) {
      newItems[i].jsonIdx[key] = newJsonIndex;
    }
    // Add the key to the unique key set (in case it's new)
    if (!jsonKeys.has(key)) {
      jsonKeys.add(key);
    // Update the states (and re-render)
      setJsonKeys(jsonKeys);
    }
    setNewJsonStrs(newJsonStrs);
    setNewItems(newItems);
  };

  // Set every selected item to the value
  const enabledSetter = function(enabled: boolean) {
    // Update selected items with enabled
    for (const i of selectedRowsRef.current) {
      newItems[i].enabled = enabled;
    }
    // Update the states (and re-render)
    setNewItems(newItems);
  };

  const hasChanges = function(): boolean {
    return newItems.some((item) => item.isChanged());
  };

  const sendChanges = async function(): Promise<pb.UpdateRep> {
    return grpcClient.update({
      name: business,
      refreshToken: refreshTokenRef.current,
      items: newItems.filter((newItem) => newItem.isChanged()),
    });
  };

  // Create the columns that will be rendered in the DataGrid
  const columns = [
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
      renderCell: (params) => renderCategory(categoryGetter(params.row.id)),
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
    ...jsonColumns.map((key) => ({
      field: key,
      headerName: key,
      valueGetter: (params) => jsonGetter(params.row.id, key),
      renderCell: (params) => renderJson(jsonGetter(params.row.id, key)),
      stretch: true,
    })),
    {
      field: 'enabled',
      headerName: 'Enabled',
      valueGetter: (params) => enabledGetter(params.row.id),
      renderCell: (params) => renderEnabled(enabledGetter(params.row.id)),
      stretch: true,
    },
  ];
  
  return (
    <Child
      hasChanges={hasChanges}
      sendChanges={sendChanges}
      selectedSetter={selectedSetter}
      jsonSetter={jsonSetter}
      enabledSetter={enabledSetter}
      columns={columns}
      jsonKeys={jsonColumns}
      refreshTokenRef={refreshTokenRef}
      {...other}
    />
  );
}
