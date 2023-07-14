import {
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { ItemConfiguratorClient as GrpcClient } from "../../pb/item_configurator.client";
import { Err, NotAuthorized, Popup } from "../../Popup";
import * as pb from "../../pb/item_configurator";
import Selector from "./Selector";
import { CircularProgress } from "@mui/material";

const MAX_REP_ATTEMPTS = 3;
const REP_ATTEMPT_DELAY_MS = 10000;

interface RepAndLocationNames {
  rep: pb.BuybackContractsRep;
  systemNames: Map<number, string>;
  regionNames: Map<number, string>;
}

const BuybackContractsFetcher = (props: {
  refreshTokenRef: MutableRefObject<string>;
  onBackRef: MutableRefObject<() => void>;
  onReloadRef: MutableRefObject<() => void>;
  throwPopup: (p: Popup) => void;
  grpcClient: GrpcClient;
  langRef: MutableRefObject<string>;
}): ReactElement => {
  const {
    refreshTokenRef,
    onBackRef,
    onReloadRef,
    throwPopup,
    grpcClient,
    langRef,
  } = props;

  const fetchingOrErrRef = useRef(false);
  const [rep, setRep] = useState<RepAndLocationNames>();

  useEffect(() => {
    if (rep === undefined && !fetchingOrErrRef.current) fetchAndHandle();
  }, []);

  onReloadRef.current = () => {
    setRep(undefined);
    fetchAndHandle();
  };

  const fetchRep = async (
    attempt?: number
  ): Promise<pb.BuybackContractsRep | null> => {
    if (attempt === undefined) attempt = 0;
    try {
      const rep = await grpcClient.buybackContracts({
        includeItems: true,
        includeCheck: true,
        includeBuy: true,
        refreshToken: refreshTokenRef.current,
        language: langRef.current,
      }).response;
      refreshTokenRef.current = rep.refreshToken;
      if (!rep.authorized) throwPopup(NotAuthorized);
      else return rep;
    } catch (e) {
      if (attempt < MAX_REP_ATTEMPTS) {
        await new Promise((r) => setTimeout(r, REP_ATTEMPT_DELAY_MS));
        return fetchRep(attempt + 1);
      } else {
        throwPopup(Err(e as Error));
      }
    }
    return null;
  };

  const fetchLocationNames = async (
    rep: pb.BuybackContractsRep
  ): Promise<{
    systemNames: Map<number, string>;
    regionNames: Map<number, string>;
  } | null> => {
    const systemPromiseMap = new Map<number, Promise<string>>();
    const regionPromiseMap = new Map<number, Promise<string>>();

    const getSystemName = async (id: number): Promise<string> => {
      const systemRep = await fetch(
        `https://esi.evetech.net/latest/universe/systems/${id}/?datasource=tranquility`
      );
      const systemData = await systemRep.json();
      const systemName = systemData.name;
      return systemName;
    };

    const getRegionName = async (id: number): Promise<string> => {
      const regionRep = await fetch(
        `https://esi.evetech.net/latest/universe/regions/${id}/?datasource=tranquility`
      );
      const regionData = await regionRep.json();
      const regionName = regionData.name;
      return regionName;
    };

    for (const c of rep.contracts) {
      const esiContract = c.esiContract;
      if (esiContract === undefined) continue;

      const systemId = esiContract.systemId;
      if (!systemPromiseMap.has(systemId))
        systemPromiseMap.set(systemId, getSystemName(systemId));

      const regionId = esiContract.regionId;
      if (!regionPromiseMap.has(regionId))
        regionPromiseMap.set(regionId, getRegionName(regionId));
    }

    const systemNames = new Map<number, string>();
    const regionNames = new Map<number, string>();

    for (const [id, promise] of systemPromiseMap) {
      try {
        const name = await promise;
        systemNames.set(id, name);
      } catch (e) {
        throwPopup(Err(e as Error));
        return null;
      }
    }

    for (const [id, promise] of regionPromiseMap) {
      try {
        const name = await promise;
        regionNames.set(id, name);
      } catch (e) {
        throwPopup(Err(e as Error));
        return null;
      }
    }

    return { systemNames, regionNames };
  };

  const fetchAndHandle = async (): Promise<void> => {
    const fetchAndHandleInner = async (): Promise<boolean> => {
      const rep = await fetchRep();
      if (rep === null) return false;
      const names = await fetchLocationNames(rep);
      if (names === null) return false;
      setRep({
        rep,
        systemNames: names.systemNames,
        regionNames: names.regionNames,
      });
      return true;
    };

    fetchingOrErrRef.current = true;
    const ok = await fetchAndHandleInner();
    if (ok) fetchingOrErrRef.current = false;
  };

  if (rep === undefined) return <CircularProgress />;
  else return <Selector onBackRef={onBackRef} rep={rep} />;
};

export default BuybackContractsFetcher;
export type { RepAndLocationNames };
