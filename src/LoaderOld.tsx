import React from "react";

import { item_configurator_proto as pb } from "./item_configurator_pb";
import { Configurator, AuthKind, AuthScope, ToBool } from "./Kind";
import { Popup, NotAuthorized, Err } from "./Popup";
import Unreachable from "./Unreachable";
import Builder from "./Builder";

import CircularProgress from '@mui/material/CircularProgress';

interface Props {
  kind: Configurator;
  grpcClient: pb.ItemConfigurator;
  business: string;
  refreshTokenRef: React.MutableRefObject<string>;
  onSaveRef: React.MutableRefObject<() => void>;
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  returnHome: () => void;
  throwPopup: (Popup) => void;
  authScope?: AuthScope;
  authKind?: AuthKind;
  lang: string;
}

export default function Loader(props: Props): React.ReactElement {
  const {
    kind,
    grpcClient,
    business,
    refreshTokenRef,
    returnHome,
    throwPopup,
    authScope,
    authKind,
    lang,
    ...other
  } = props;

  const [rep, setRep] = React.useState<
    pb.ListCharactersRep | pb.ListRep | Error
  >();

  // Throw a popup and return home, returning an empty element until the
  // home component is rendered again.
  const throwPopupAndReturnHome = function(popup: Popup): React.ReactElement {
    throwPopup(popup);
    returnHome();
    return <></>;
  };

  // Build the request based on the configurator kind.
  const fetchRep = async (): Promise<
    pb.ListCharactersRep | pb.ListRep
  > => {
    switch (kind) {
      case Configurator.AddCharacters || Configurator.DelCharacters:
        return grpcClient.listCharacters({
          name: business,
          refreshToken: refreshTokenRef.current,
          authKind: ToBool(authKind ?? Unreachable()),
          authScope: ToBool(authScope ?? Unreachable()),
        });
      case Configurator.ToggleItems || Configurator.ConfigureItems:
        let includeEnabled: pb.Query;
        let includeJson: boolean;
        if (kind === Configurator.ToggleItems) {
          includeEnabled = pb.Query.BOTH;
          includeJson = false;
        } else {
          includeEnabled = pb.Query.TRUE;
          includeJson = true;
        }
        return grpcClient.list({
          name: business,
          refreshToken: refreshTokenRef.current,
          includeEnabled: includeEnabled,
          includeConfigured: pb.Query.BOTH,
          language: lang,
          includeJson: includeJson,
          includeName: true,
          includeMarketGroup: true,
          includeGroup: true,
          includeCategory: true,
        });
      default:
        Unreachable();
    }
  };

  // If a response has been received, handle it.
  if (rep) {
    // If the response is an error, throw a popup and return home.
    if (rep instanceof Error) {
      return throwPopupAndReturnHome(Err(rep));
    }

    // Update the refresh token.
    refreshTokenRef.current = rep.refreshToken;

    // If the response is not authorized, throw a popup and return home.
    if (!rep.authorized) {
      return throwPopupAndReturnHome(NotAuthorized);
    }

    // Return the builder component.
    return (
      <Builder
        rep={rep}
        kind={kind}
        grpcClient={grpcClient}
        business={business}
        refreshTokenRef={refreshTokenRef}
        returnHome={returnHome}
        throwPopup={throwPopup}
        authScope={authScope}
        authKind={authKind}
        {...other}
      />
    );

  // If no response has been received, send it and return a loading screen.
  } else {
    // Send out the request, and store the accepted response or rejected error.
    // Either way, we'll render the component again and handle the data.
    fetchRep().then((rep) => setRep(rep)).catch((err) => setRep(err));

    return (
      <CircularProgress/>
    );
  }
}
