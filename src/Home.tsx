import React from "react";

import { Configurator, AuthKind, AuthScope, ToggleConfigure, AddDel } from "./Kind.js";
import { item_configurator_proto as pb } from "./item_configurator_pb.js";
import Unreachable from "./Unreachable";
import Loader from "./LoaderOld.js";
import Popup from "./Popup";
import NavPath from "./NavPath.js";
import NavStepper from "./NavStepper";

import CircularProgress from '@mui/material/CircularProgress';

type ItemsCharacters = AuthScope;

interface Props {
  refreshToken: string;
  businesses: string[];
  onCancelRef: React.MutableRefObject<() => void>;
  onSaveRef: React.MutableRefObject<() => void>;
  langRef: React.MutableRefObject<string>;
  throwPopup: (Popup) => void;
  grpcClient: pb.ItemConfigurator;
}

enum NavStep {
  Business,
  ItemsCharacters,
  ToggleConfigure,
  AuthScope,
  AuthKind,
  EnableDisable,
  RenderChild,
}

export default function Home(props: Props): React.ReactElement {
  const {
    refreshToken: initialRefreshToken,
    businesses,
    onCancelRef,
    onSaveRef,
    langRef,
    ...other
  } = props;

  const refreshTokenRef = React.useRef(initialRefreshToken);
  
  const [navPath, setNavPath] = React.useState<NavPath>();

  const [updating, setUpdating] = React.useState(false);
  const [renderChild, setRenderChild] = React.useState<Configurator>();
  const [authKind, setAuthKind] = React.useState<AuthKind>();
  const [authScope, setAuthScope] = React.useState<AuthScope>();
  const [business, setBusiness] = React.useState<string>();
  const [navStep, setNavStep] = React.useState(NavStep.Business);
  const [configuratorPath, setConfiguratorPath] = React.useState<string[]>([]);

  // Returns home, resetting the state and navigation step.
  const returnHome = function() {
    if (navStep !== NavStep.Business) {
      setNavStep(NavStep.Business);
      setBusiness(undefined);
      setAuthKind(undefined);
      setAuthScope(undefined);
      setRenderChild(undefined);
      setConfiguratorPath([]);
    }
  }

  // Update the save and cancel buttons to return home.
  onCancelRef.current = returnHome;
  onSaveRef.current = returnHome;

  // If a child is sending an update, wait on it before allowing navigation.
  if (updating) {
    return (
      <CircularProgress/>
    );
  }

  // Render home page based on the current navigation step.
  switch (navStep) {
    case NavStep.Business:
      return (
        <div
          onSelect={(b: string) => {
            setBusiness(b);
            setNavStep(NavStep.ItemsCharacters);
            setConfiguratorPath([b]);
          }}
          businesses={businesses}
        >
        </div>
      );
    case NavStep.ItemsCharacters:
      return (
        <div
          onSelect={(ic: ItemsCharacters) => {
            switch (ic) {
              case AuthScope.Items:
                setNavStep(NavStep.ToggleConfigure);
                break;
              case AuthScope.Characters:
                setNavStep(NavStep.AuthScope);
                break;
            }
            setConfiguratorPath([...configuratorPath, ic]);
          }}
        >
        </div>
      );
    case NavStep.AuthScope:
      return (
        <div
          onSelect={(as: AuthScope) => {
            setConfiguratorPath([...configuratorPath, as]);
            setAuthScope(as);
            setNavStep(NavStep.AuthKind);
          }}
        >
        </div>
      );
    case NavStep.AuthKind:
      return (
        <div
          onSelect={(ak: AuthKind) => {
            setConfiguratorPath([...configuratorPath, ak]);
            setAuthKind(ak);
            setNavStep(NavStep.EnableDisable);
          }}
        >
        </div>
      );
    case NavStep.EnableDisable:
      return (
        <div
          onSelect={(ad: AddDel) => {
            switch (ad) {
              case AddDel.Add:
                setRenderChild(Configurator.AddCharacters);
                break;
              case AddDel.Del:
                setRenderChild(Configurator.DelCharacters);
                break;
            }
            setConfiguratorPath([...configuratorPath, ad]);
            setNavStep(NavStep.RenderChild);
          }}
        >
        </div>
      );
    case NavStep.ToggleConfigure:
      return (
        <div
          onSelect={(tc: ToggleConfigure) => {
            switch (tc) {
              case ToggleConfigure.Toggle:
                setRenderChild(Configurator.ToggleItems);
                break;
              case ToggleConfigure.Configure:
                setRenderChild(Configurator.ConfigureItems);
                break;
            }
            setConfiguratorPath([...configuratorPath, tc]);
            setNavStep(NavStep.RenderChild);
          }}
        >
        </div>
      );
    case NavStep.RenderChild:
      return (
        <Loader
          business={business ?? Unreachable()}
          kind={renderChild ?? Unreachable()}
          refreshTokenRef={refreshTokenRef}
          onSaveRef={onSaveRef}
          setUpdating={setUpdating}
          returnHome={returnHome}
          authScope={authScope}
          authKind={authKind}
          lang={langRef.current}
          {...other}
        />
      );
  }
}
