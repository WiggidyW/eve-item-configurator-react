import React from "react";

import { item_configurator_proto as pb } from "./item_configurator_pb";
import { NavPath } from "./NavPath";
import { Popup } from "./Popup";

interface ConfiguratorProps {
  refreshTokenRef: React.MutableRefObject<string>;
  onSaveRef: React.MutableRefObject<() => void>;
  grpcClient: pb.ItemConfigurator;
  throwPopup: (Popup) => void;
  returnHome: () => void;
  navPath: NavPath;
}

export default ConfiguratorProps;
