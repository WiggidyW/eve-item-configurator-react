import React from "react";

import ConfiguratorProps from "../ConfiguratorProps.js";
import { CharProps } from "../BuilderProps.js";
import NewCharColumns from "./Columns.js";
import CharAddInput from "../input/CharAdd.js";
import Configurator from "../Configurator.js";
import Row from "../Row.js";

interface Props {
  cfgProps: ConfiguratorProps;
  builderProps: CharProps;
}

const CharAdd = (props: Props): React.ReactElement => {
  const { cfgProps, builderProps } = props;
  const { grpcClient, navPath, refreshTokenRef, throwPopup } = cfgProps;
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
  }).response;

  const addCharacters = (newChars: string[]) => {
    const initialLen = chars.length;
    for (const newChar of newChars) {
      if (!uniqueChars.has(newChar)
        && !changes.current.has(newChar)
        && newChar !== ""
      ) {
        changes.current.add(newChar);
        chars.push(newChar);
      }
    }
    if (chars.length !== initialLen) setChars([...chars]);
  };

  return (
    <Configurator
      cfgProps={cfgProps}
      gridProps={{ columns, rows }}
      sendChanges={sendChanges}
      hasChanges={hasChanges}
      cfgInput={CharAddInput}
      cfgInputProps={{ throwPopup, addCharacters }}
    />
  );
}

export default CharAdd;
