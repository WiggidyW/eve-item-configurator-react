import React from "react";
import { ItemConfiguratorClient as GrpcClient } from "../pb/item_configurator.client";
import NavStepper from "./NavStepper";
import NavPath from "./NavPath";
import Loader from "./Loader";
import { Popup } from "../Popup";

// Home -> NavStepper -> Home -> Loader -> ConfiguratorVariant -> Configurator

interface Props {
  refreshToken: string;
  businesses: string[];
  onCancelRef: React.MutableRefObject<() => void>;
  onSaveRef: React.MutableRefObject<() => void>;
  langRef: React.MutableRefObject<string>;
  throwPopup: (p: Popup) => void;
  grpcClient: GrpcClient;
}

const Home = (props: Props): React.ReactElement => {
  const {
    refreshToken: initialRefreshToken,
    businesses,
    onCancelRef,
    onSaveRef,
    langRef,
    throwPopup,
    grpcClient,
  } = props;

  const refreshTokenRef = React.useRef(initialRefreshToken);

  const [navPath, setNavPath] = React.useState<NavPath>();

  // Returns home, resetting the state and navigation step.
  const returnHome = () => (navPath ? setNavPath(undefined) : void 0);

  // Update save to do nothing and cancel to return home.
  onCancelRef.current = returnHome;
  onSaveRef.current = () => {};

  if (navPath === undefined)
    return (
      // Navigate to the configurator.
      <NavStepper
        businesses={businesses}
        setNavPath={setNavPath}
        onCancelRef={onCancelRef}
      />
    );
  else
    return (
      // Load the configurator pointed to by the navPath.
      <Loader
        cfgProps={{
          refreshTokenRef,
          onSaveRef,
          grpcClient,
          throwPopup,
          returnHome,
          navPath,
        }}
        lang={langRef.current}
      />
    );
};

export default Home;
