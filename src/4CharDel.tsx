import React from "react";

import { GetSelected, NewSelectedRowProps } from "./SelectedRow.js";
import ConfiguratorProps from "./ConfiguratorProps.js";
import { CharProps } from "./BuilderProps.js";
import NewCharColumns from "./CharColumns.js";
import Unreachable from "./Unreachable.js";
import Row from "./Row";

interface Props {
  cfgProps: ConfiguratorProps;
  builderProps: CharProps;
}

const ItemToggle = (props: Props): React.ReactElement => {
  const { cfgProps, builderProps } = props;
  const { grpcClient, navPath, refreshTokenRef } = cfgProps;
  const { uniqueChars: initUniqueChars } = builderProps;

  const selectedRowsRef = React.useRef<number[]>([]);
  const changes = React.useRef<Set<string>>(new Set());

  const [uniqueChars, setUniqueChars] = React.useState(initUniqueChars);

  const selectedRowProps = NewSelectedRowProps(selectedRowsRef);
  const hasChanges = () => changes.current.size > 0;
  const getSelected = GetSelected(selectedRowsRef);
  const chars = Array.from(uniqueChars).sort();

  const rows = chars.map((_, i) => new Row(i));
  const getName = (idx: number) => chars[idx];

  const columns = NewCharColumns(getName);

  const sendChanges = async () => grpcClient.addCharacters({
    name: navPath.business,
    refreshToken: refreshTokenRef.current,
    characters: Array.from(changes.current),
    authKind: navPath.charPathUnchecked.authKind,
    authScope: navPath.charPathUnchecked.authScope,
  });

  const delCharacters = () => {
    const initialSize = uniqueChars.size;
    for (const idx of getSelected()) {
      const char = chars[idx];
      changes.current.add(char);
      uniqueChars.delete(char);
    }
    if (uniqueChars.size !== initialSize) setUniqueChars(uniqueChars);
  };

  Unreachable()
}

export default ItemToggle;
