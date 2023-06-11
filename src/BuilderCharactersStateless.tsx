import React from "react";

import { AuthKind, AuthScope, ToBool } from "./Kind.js";
import { item_configurator_proto as pb } from "./item_configurator_pb.js";
import { AddDel } from "./Kind.js";
import { prettifyStr } from "./JsonUtil.js";
import Popup from "./Popup.js";
import NewItem from "./NewItem.js";
import BuilderItemsStateful from "./BuilderItemsStateful.js";
import Row from "./Row.js";
import { renderName } from "./CharRender.js";
import Unreachable from "./Unreachable.js";

interface Props {
  child: (props) => React.JSX.Element;
  rep: pb.ListCharactersRep;
  grpcClient: pb.ItemConfigurator;
  business: string;
  refreshTokenRef: React.MutableRefObject<string>;
  onSaveRef: React.MutableRefObject<() => void>;
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  returnHome: () => void;
  throwPopup: (popup: Popup) => void;
  authScope: AuthScope;
  authKind: AuthKind;
}

// This component is used to parse the rep into useable props and only render
// once.
export default function BuilderCharacters(
  props: Props,
): React.JSX.Element {
  const {
    child: Child,
    grpcClient,
    business,
    refreshTokenRef,
    rep,
    authKind,
    authScope,
    ...other
  } = props;

  const selectedRowsRef = React.useRef<number[]>([]);

  const [addChars, setAddChars] = React.useState<Set<string>>(() => new Set());
  const [delChars, setDelChars] = React.useState<Set<string>>(() => new Set());

  // TODO: Get character IDs from ESI for portait images

  const chars = (() => {
    if (addChars.size > 0) {
      let c: string[] = [];
      for (const char of rep.characters) {
        if (addChars.has(char)) {
          addChars.delete(char);
        }
      }
      return [...addChars];
    } else if (delChars.size > 0) {
      return rep.characters.filter((char) => !delChars.has(char));
    } else {
      return rep.characters;
    }
  })();

  const rows = chars.map((_, i) => new Row(i));

  const selectedSetter = function(selected: number[]) {
    selectedRowsRef.current = selected;
  };

  const characterGetter = (idx: number): string => chars[idx];
  const characterAdder = (names: string[]) => setAddChars(
    [...addChars, ...names]
  );
  const characterDeleter = () => {
    for (const idx of selectedRowsRef.current) {
      if (!delChars.has(chars[idx])) {
        setDelChars(delChars.add(chars[idx]));
      }
    }
  };

  const hasChanges = (): boolean => addChars.length > 0 || delChars.size > 0;
  const sendChanges = async () => {
    if (addChars.length > 0) {
      return grpcClient.addCharacters({
        name: business,
        authKind: ToBool(authKind),
        authScope: ToBool(authScope),
        characters: addChars,
      });
    } else if (delChars.size > 0) {
      return grpcClient.delCharacters({
        name: business,
        authKind: ToBool(authKind),
        authScope: ToBool(authScope),
        characters: [...delChars],
      });
    } else {
      Unreachable();
    }
  }

  const columns = [{
    field: 'name',
    headerName: 'Name',
    valueGetter: (params) => characterGetter(params.row.id),
    renderCell: (params) => renderName(params.row.id),
  }];
  
  return (
    <Child
      hasChanges={hasChanges}
      sendChanges={sendChanges}
      selectedSetter={selectedSetter}
      characterAdder={characterAdder}
      characterDeleter={characterDeleter}
      refreshTokenRef={refreshTokenRef}
      columns={columns}
      rows={rows}
      {...other}
    />
  );
}
