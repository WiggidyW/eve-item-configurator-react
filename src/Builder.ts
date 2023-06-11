import React from "react";

import { item_configurator_proto as pb } from "./item_configurator_pb.js";
import { Configurator, AuthKind, AuthScope, ToBool } from "./Kind.js";
import { Popup, NotAuthorized, Err } from "./Popup";
import Unreachable from "./Unreachable";

interface Props {
  rep: pb.ListCharactersRep | pb.ListRep;
  kind: Configurator;
  grpcClient: pb.ItemConfigurator;
  business: string;
  refreshTokenRef: React.MutableRefObject<string>;
  onSaveRef: React.MutableRefObject<() => void>;
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  returnHome: () => void;
  throwPopup: (popup: Popup) => void;
  authScope?: AuthScope;
  authKind?: AuthKind;
}

export default function Builder(props: Props): React.ReactElement {
  Unreachable();
}
