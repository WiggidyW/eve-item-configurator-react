import React from "react";

import { item_configurator_proto as pb } from "./item_configurator_pb.js";
import { GetSelected, NewSelectedRowProps } from "./SelectedRow.js";
import ConfiguratorProps from "./ConfiguratorProps.js";
import { ItemConfigureProps } from "./BuilderProps.js";
import NewItemColumns from "./ItemColumns.js";
import { prettifyObj } from "./ItemsUtil.js";
import { renderJson } from "./ItemRender.js";
import Unreachable from "./Unreachable.js";

interface Props {
  cfgProps: ConfiguratorProps;
  builderProps: ItemConfigureProps;
}

const ItemConfig = (props: Props): React.ReactElement => {
  const { cfgProps, builderProps } = props;
  const { getTypeId } = builderProps;
  const { grpcClient, navPath, refreshTokenRef } = cfgProps;
  const {
    changes,
    uniqueJsonKeys: initUniqueKeySet,
    getJson: initGetJson,
  } = builderProps;

  const [uniqueKeySet, setUniqueKeySet] = React.useState(initUniqueKeySet);
  const [strChanges, setStrChanges] = React.useState<string[]>([]);
  const [idxChanges, setIdxChanges] = React.useState<
    Array<{ [key: string]: number } | null>
  >(changes);

  const selectedRowsRef = React.useRef<number[]>([]);

  const selectedRowProps = NewSelectedRowProps(selectedRowsRef);
  const uniqueKeyList = Array.from(uniqueKeySet);
  const getSelected = GetSelected(selectedRowsRef);
  const hasChanges = () => strChanges.length > 0;

  const sendChanges = async () => grpcClient.update({
    name: navPath.business,
    refreshToken: refreshTokenRef.current,
    items: idxChanges.reduce<pb.IUpdateItem[]>(
      (items, idxMap, i) => {
        if (idxMap !== null) items.push({
          typeId: getTypeId(i),
          enabled: true,
          jsonIdx: idxMap,
        });
        return items;
      },
      [],
    ),
    json: strChanges,
  });
  
  // Return the new JSON value if it exists,
  // otherwise return the old JSON string (if it exists)
  const getJson = (idx: number, key: string) => {
    const jsonStrIdx = idxChanges[idx]?.[key];
    return jsonStrIdx === undefined ?
      initGetJson(idx, key) : strChanges[jsonStrIdx];
  };

  // Set {key: JSON value} for every selected item
  const setJson = (key: string, val: any) => {
    // The index of the new value is the length of the array
    const newIdx = strChanges.length;
    strChanges.push(prettifyObj(val));
    // Update selected items with key: newindex
    for (const i of selectedRowsRef.current) {  
      const idxMap = idxChanges[i];
      if (idxMap === null) idxChanges[i] = { [key]: newIdx };
      else idxMap[key] = newIdx;
    }
    // Add the key to the unique key set (in case it's new)
    if (!uniqueKeySet.has(key)) setUniqueKeySet(uniqueKeySet.add(key));
    setStrChanges(strChanges);
    setIdxChanges(idxChanges);
  };

  const columns = [
    ...NewItemColumns(builderProps),
    ...uniqueKeyList.map((key) => ({
      field: key,
      headerName: key,
      valueGetter: (params) => getJson(params.row.id, key),
      renderCell: (params) => renderJson(getJson(params.row.id, key)),
      stretch: true,
    })),
  ]

  Unreachable()
}

export default ItemConfig;
