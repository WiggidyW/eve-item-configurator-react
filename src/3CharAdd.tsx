import React from "react";

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
  const { chars: initChars, uniqueChars } = builderProps;
  
  const changes = React.useRef<Set<string>>(new Set());

  const [chars, setChars] = React.useState(initChars);

  const hasChanges = () => changes.current.size > 0;
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

  const addCharacters = (chars: string[] | string) => {
    if (typeof chars === "string") chars = [chars];
    const initialLen = chars.length;
    for (const char of chars) {
      if (!uniqueChars.has(char) && !changes.current.has(char)) {
        changes.current.add(char);
        chars.push(char);
      }
    }
    if (chars.length !== initialLen) setChars(chars);
  };

  Unreachable()
}

export default ItemToggle;
