import React from "react";

import { item_configurator_proto as pb } from "./item_configurator_pb.js";
import { Popup, NotAuthorized, Err } from "./Popup";
import ConfiguratorProps from "./ConfiguratorProps";
import Builder from "./Builder";

import CircularProgress from '@mui/material/CircularProgress';

interface Props {
  cfgProps: ConfiguratorProps;
  lang: string;
}

const Loader = (props: Props): React.ReactElement => {
  const { cfgProps, lang } = props;
  const {
    refreshTokenRef,
    grpcClient,
    returnHome,
    throwPopup,
    navPath,
  } = cfgProps;

  const [rep, setRep] = React.useState<
    pb.ListCharactersRep | pb.ListRep | Error
  >();

  // Throws a popup and returns home, returning an empty element until the
  // home component is rendered again.
  const throwPopupAndReturnHome = (v: Popup): React.ReactElement => {
    throwPopup(v);
    returnHome();
    return <></>;
  };

  // Sends out a request based on the nav path.
  const fetchRep = async (): Promise<
    pb.ListCharactersRep | pb.ListRep
  > => {
    if (navPath.isItem) {
      const itemPath = navPath.itemPathUnchecked;
      return grpcClient.list({
        name: navPath.business,
        refreshToken: refreshTokenRef.current,
        includeEnabled: itemPath.isConfigure? pb.Query.TRUE : pb.Query.BOTH,
        includeConfigured: pb.Query.BOTH,
        language: lang,
        includeJson: itemPath.isConfigure,
        includeName: true,
        includeMarketGroup: true,
        includeGroup: true,
        includeCategory: true,
      });

    } else { // navPath.isChar
      const charPath = navPath.charPathUnchecked;
      return grpcClient.listCharacters({
        name: navPath.business,
        refreshToken: refreshTokenRef.current,
        authKind: charPath.authKind,
        authScope: charPath.authScope,
      });
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
    return Builder({ cfgProps: cfgProps, grpcRep: rep });

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

export default Loader;
