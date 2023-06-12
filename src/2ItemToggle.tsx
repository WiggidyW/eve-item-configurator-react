import React from "react";

import { item_configurator_proto as pb } from "./item_configurator_pb.js";
import { GetSelected, NewSelectedRowProps } from "./SelectedRow.js";
import ConfiguratorProps from "./ConfiguratorProps.js";
import { ItemToggleProps } from "./BuilderProps.js";
import NewItemColumns from "./ItemColumns.js";
import Unreachable from "./Unreachable.js";

interface Props {
  cfgProps: ConfiguratorProps;
  builderProps: ItemToggleProps;
}

const ItemToggle = (props: Props): React.ReactElement => {
  const { cfgProps, builderProps } = props;
  const { getTypeId } = builderProps;
  const { grpcClient, navPath, refreshTokenRef } = cfgProps;
  const { changes: initChanges, getEnabled: initGetEnabled } = builderProps;

  const [changes, setChanges] = React.useState(initChanges);

  const selectedRowsRef = React.useRef<number[]>([]);

  const selectedRowProps = NewSelectedRowProps(selectedRowsRef);

  const getSelected = GetSelected(selectedRowsRef);

  // any in changes that aren't null and aren't equal to previous value
  const hasChanges = () => changes.some((change, i) => (
    change !== null && change !== initGetEnabled(i))
  );

  const sendChanges = async () => grpcClient.update({
    name: navPath.business,
    refreshToken: refreshTokenRef.current,
    items: changes.reduce<pb.IUpdateItem[]>(
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
  });
  
  // Returns the change if not null, or the initial
  const getEnabled = (idx: number) => changes[idx] ?? initGetEnabled(idx);

  // Set every selected item to the value
  const setEnabled = (b: boolean) => {
    for (const i of getSelected()) changes[i] = b;
    setChanges(changes);
  };

  const columns = NewItemColumns(builderProps);

  Unreachable()
}

export default ItemToggle;
