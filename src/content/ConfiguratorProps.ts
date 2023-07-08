import React from "react";
import { ItemConfiguratorClient as GrpcClient } from "../pb/item_configurator.client";
import { NavPath } from "./NavPath";
import { Popup } from "../Popup";

interface ConfiguratorProps {
  refreshTokenRef: React.MutableRefObject<string>;
  onSaveRef: React.MutableRefObject<() => void>;
  grpcClient: GrpcClient;
  throwPopup: (popup: Popup) => void;
  returnHome: () => void;
  navPath: NavPath;
}

export default ConfiguratorProps;
