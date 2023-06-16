import React from "react";

import { Popup, NotAuthorized, Err } from "../Popup";
import * as pb from "../pb";

import ConfiguratorProps from "./ConfiguratorProps.js";
import ItemConfigure from "./item/Configure.js";
import ItemToggle from "./item/Toggle.js";
import CharAdd from "./char/Add.js";
import CharDel from "./char/Del.js";
import { 
  BuildItemConfigureProps, BuildItemToggleProps,
  BuildCharAddProps, BuildCharDelProps,
} from "./Builder.js";

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

  const [rep, setRep] = React.useState<pb.ListCharactersRep | pb.ListRep>();

  // Send out the request
  React.useEffect(() => { fetchAndHandleRep(); }, []);

  // Throws a popup and returns home, returning an empty element until the
  // home component is rendered again.
  const throwPopupAndReturnHome = (v: Popup): void => {
    throwPopup(v);
    returnHome();
  };

  // Sends out a request based on the nav path.
  const fetchRep = async (): Promise<pb.ListCharactersRep | pb.ListRep> => {
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
      }).response;

    } else { // navPath.isChar
      const charPath = navPath.charPathUnchecked;
      return grpcClient.listCharacters({
        name: navPath.business,
        refreshToken: refreshTokenRef.current,
        authKind: charPath.authKind,
        authScope: charPath.authScope,
      }).response;
    }
  };
  
  // Sends out a request based on the nav path, and handles the response.
  // If the response is an error, throws a popup and returns home.
  // If the response is not authorized, throws a popup and returns home.
  // If the response is authorized, stores the response.
  const fetchAndHandleRep = async (): Promise<void> => {
    try {
      const rep = await fetchRep();
      refreshTokenRef.current = rep.refreshToken; // Update it
      if (!rep.authorized) throwPopupAndReturnHome(NotAuthorized);
      else setRep(rep);
    } catch (e) {
      throwPopupAndReturnHome(Err(e as Error));
    }
  };

  // If a response has been received, handle it.
  if (rep) {
    if (navPath.isItemConfigure) return (
      <ItemConfigure
        cfgProps={cfgProps}
        builderProps={BuildItemConfigureProps(rep as pb.ListRep)}
      />
    );
    if (navPath.isItemToggle) return (
      <ItemToggle
        cfgProps={cfgProps}
        builderProps={BuildItemToggleProps(rep as pb.ListRep)}
      />
    );
    if (navPath.isCharAdd) return (
      <CharAdd
        cfgProps={cfgProps}
        builderProps={BuildCharAddProps(rep as pb.ListCharactersRep)}
      />
    );
    /*if (navPath.isCharDel)*/ return (
      <CharDel
        cfgProps={cfgProps}
        builderProps={BuildCharDelProps(rep as pb.ListCharactersRep)}
      />
    );

  // If no response has been received, return a loading screen.
  } else return (
    <CircularProgress/>
  );
}

export default Loader;
