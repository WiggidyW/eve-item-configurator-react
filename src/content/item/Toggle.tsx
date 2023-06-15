import React from "react";

import * as pb from "../../pb";

import { GetSelected, NewSelectedRowProps } from "../SelectedRow";
import ConfiguratorProps from "../ConfiguratorProps";
import { ItemToggleProps } from "../BuilderProps";
import ItemToggleInput from "../input/ItemToggle";
import { renderEnabled } from "./RenderRow";
import NewItemColumns from "./Columns";
import Configurator from "../Configurator";
import { GridColDef } from "@mui/x-data-grid";

interface Props {
  cfgProps: ConfiguratorProps;
  builderProps: ItemToggleProps;
}

const ItemToggle = (props: Props): React.ReactElement => {
  const { cfgProps, builderProps } = props;
  const { getTypeId } = builderProps;
  const { grpcClient, navPath, refreshTokenRef } = cfgProps;
  const {
    getEnabled: initGetEnabled,
    changes: initChanges,
    rows,
  } = builderProps;

  const selectedRowsRef = React.useRef<number[]>([]);

  const [changes, setChanges] = React.useState(initChanges);

  const selectedRowProps = NewSelectedRowProps(selectedRowsRef);

  const getSelected = GetSelected(selectedRowsRef);

  // any in changes that aren't null and aren't equal to previous value
  const hasChanges = () => changes.some((change, i) => (
    change !== null && change !== initGetEnabled(i))
  );

  const sendChanges = async () => grpcClient.update({
    name: navPath.business,
    refreshToken: refreshTokenRef.current,
    items: changes.reduce<pb.UpdateItem[]>(
      (items, enabled, i) => {
        if (enabled !== null) items.push({
          typeId: getTypeId(i),
          enabled,
          jsonIdx: {},
        });
        return items;
      },
      [],
    ),
    json: [],
  }).response;

  // Returns the change if not null, or the initial
  const getEnabled = (idx: number) => changes[idx] ?? initGetEnabled(idx);

  // Set every selected item to the value
  const setEnabled = (b: boolean) => {
    for (const i of getSelected()) changes[i] = b;
    setChanges([...changes]);
  };

  const columns: GridColDef[] = [
    ...NewItemColumns(builderProps),
    {
      field: "enabled",
      headerName: "Enabled",
      valueGetter: (params) => getEnabled(params.row.id),
      renderCell: (params) => renderEnabled(getEnabled(params.row.id)),
      width: 50,
    },
  ]

  return (
    <Configurator
      cfgProps={cfgProps}
      gridProps={{ selectedRowProps, columns, rows }}
      sendChanges={sendChanges}
      hasChanges={hasChanges}
      cfgInput={ItemToggleInput}
      cfgInputProps={{ setEnabled }}
    />
  );
}

export default ItemToggle;
