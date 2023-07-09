import React from "react";
import * as pb from "../../pb/item_configurator";
import { GetSelected, NewSelectedRowProps } from "../SelectedRow";
import ItemConfigureInput from "../../input/ItemConfigure";
import ConfiguratorProps from "../ConfiguratorProps";
import { ItemConfigureProps } from "../BuilderProps";
import NewItemColumns from "./Columns";
import { prettifyObj } from "../JsonUtil";
import { renderJson } from "./RenderRow";
import Configurator from "../Configurator";
import { GridColDef } from "@mui/x-data-grid";

interface Props {
  cfgProps: ConfiguratorProps;
  builderProps: ItemConfigureProps;
}

const ItemConfigure = (props: Props): React.ReactElement => {
  const { cfgProps, builderProps } = props;
  const { grpcClient, navPath, refreshTokenRef } = cfgProps;
  const { getTypeId } = builderProps;
  const { throwPopup } = cfgProps;
  const {
    uniqueJsonKeys: initUniqueKeySet,
    getJson: initGetJson,
    changes,
    rows,
  } = builderProps;

  const selectedRowsRef = React.useRef<number[]>([]);

  const [uniqueKeySet, setUniqueKeySet] = React.useState(initUniqueKeySet);
  const [strChanges, setStrChanges] = React.useState<string[]>([]);
  const [idxChanges, setIdxChanges] =
    React.useState<Array<{ [key: string]: number } | null>>(changes);

  const selectedRowProps = NewSelectedRowProps(selectedRowsRef);
  const uniqueKeyList = Array.from(uniqueKeySet);
  const getSelected = GetSelected(selectedRowsRef);
  const hasChanges = () => strChanges.length > 0;

  const sendChanges = async () =>
    grpcClient.update({
      name: navPath.business,
      refreshToken: refreshTokenRef.current,
      items: idxChanges.reduce<pb.UpdateItem[]>((items, idxMap, i) => {
        if (idxMap !== null)
          items.push({
            typeId: getTypeId(i),
            enabled: true,
            jsonIdx: idxMap,
          });
        return items;
      }, []),
      json: strChanges,
    }).response;

  // Return the new JSON value if it exists,
  // otherwise return the old JSON string (if it exists)
  const getJson = (idx: number, key: string) => {
    const jsonStrIdx = idxChanges[idx]?.[key];
    return jsonStrIdx === undefined
      ? initGetJson(idx, key)
      : strChanges[jsonStrIdx];
  };

  // Set {key: JSON value} for every selected item
  const setJson = (key: string, val: any) => {
    // The index of the new value is the length of the array
    const newIdx = strChanges.length;
    strChanges.push(prettifyObj(val));
    // Update selected items with key: newindex
    for (const i of getSelected()) {
      const idxMap = idxChanges[i];
      if (idxMap === null) idxChanges[i] = { [key]: newIdx };
      else idxMap[key] = newIdx;
    }
    // Add the key to the unique key set (in case it's new)
    if (!uniqueKeySet.has(key)) {
      setUniqueKeySet(uniqueKeySet.add(key));
    }
    setIdxChanges(idxChanges);
    setStrChanges([...strChanges]);
  };

  const columns = [
    ...NewItemColumns(builderProps),
    ...uniqueKeyList.map(
      (key): GridColDef => ({
        field: key,
        headerName: key,
        valueGetter: (params) => getJson(params.row.id, key),
        renderCell: (params) => renderJson(getJson(params.row.id, key)),
      })
    ),
  ];

  return (
    <Configurator
      cfgProps={cfgProps}
      gridProps={{ selectedRowProps, columns, rows }}
      sendChanges={sendChanges}
      hasChanges={hasChanges}
      cfgInput={ItemConfigureInput}
      cfgInputProps={{ keys: uniqueKeyList, throwPopup, setJson }}
    />
  );
};

export default ItemConfigure;
