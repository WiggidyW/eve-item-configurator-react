import React from "react";
import { GetSelected, NewSelectedRowProps } from "../SelectedRow";
import ConfiguratorProps from "../ConfiguratorProps";
import { CharProps } from "../BuilderProps";
import NewCharColumns from "./Columns";
import CharDelInput from "../input/CharDel";
import Configurator from "../Configurator";
import Row from "../Row";

interface Props {
  cfgProps: ConfiguratorProps;
  builderProps: CharProps;
}

const CharDel = (props: Props): React.ReactElement => {
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

  const sendChanges = async () =>
    grpcClient.addCharacters({
      name: navPath.business,
      refreshToken: refreshTokenRef.current,
      characters: Array.from(changes.current),
      authKind: navPath.charPathUnchecked.authKind,
      authScope: navPath.charPathUnchecked.authScope,
    }).response;

  const delCharacters = () => {
    const initialSize = uniqueChars.size;
    for (const idx of getSelected()) {
      const char = chars[idx];
      changes.current.add(char);
      uniqueChars.delete(char);
    }
    if (uniqueChars.size !== initialSize) {
      setUniqueChars(new Set(uniqueChars));
    }
  };

  return (
    <Configurator
      cfgProps={cfgProps}
      gridProps={{ selectedRowProps, columns, rows }}
      sendChanges={sendChanges}
      hasChanges={hasChanges}
      cfgInput={CharDelInput}
      cfgInputProps={{ delCharacters }}
    />
  );
};

export default CharDel;
