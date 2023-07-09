import { MutableRefObject, ReactElement, useEffect, useState } from "react";
import { ItemConfiguratorClient as GrpcClient } from "../../pb/item_configurator.client";
import { Err, NotAuthorized, Popup } from "../../Popup";
import Selector from "../../input/Selector";
import NavPath from "../NavPath";
import * as pb from "../../pb/item_configurator";
import { FullButton } from "../../input/Button";
import Loader from "../Loader";

const Authorization = (props: {
  refreshTokenRef: MutableRefObject<string>;
  businesses: string[];
  onCancelRef: MutableRefObject<() => void>;
  onSaveRef: MutableRefObject<() => void>;
  throwPopup: (p: Popup) => void;
  grpcClient: GrpcClient;
  langRef: MutableRefObject<string>;
}): ReactElement => {
  const {
    refreshTokenRef,
    businesses,
    onCancelRef,
    onSaveRef,
    throwPopup,
    grpcClient,
    langRef,
  } = props;

  const [rep, setRep] = useState<pb.BuybackContractsRep>();
  const [contract, setContract] = useState<pb.BuybackContract>();

  useEffect(() => {
    fetchAndHandleRep();
  }, []);

  const fetchAndHandleRep = async (): Promise<void> => {
    try {
      const rep = await grpcClient.buybackContracts({
        includeCheck: true,
        includeBuy: true,
        refreshToken: refreshTokenRef.current,
        language: langRef.current,
      }).response;
      refreshTokenRef.current = rep.refreshToken;
      if (!rep.authorized) throwPopup(NotAuthorized);
      else setRep(rep);
    } catch (e) {
      throwPopup(Err(e as Error));
    }
  };

  const [business, setBusiness, businessMissing, setBusinessMissing] =
    useSelection<string>();
  const [authScope, setAuthScope, authScopeMissing, setAuthScopeMissing] =
    useSelection<pb.AuthScope>();
  const [authKind, setAuthKind, authKindMissing, setAuthKindMissing] =
    useSelection<pb.AuthKind>();
  const [isAdd, setIsAdd, isAddMissing, setIsAddMissing] =
    useSelection<boolean>();
  const [navPath, setNavPath] = useState<NavPath>();

  const returnHome = () => (navPath ? setNavPath(undefined) : void 0);

  onCancelRef.current = returnHome;
  onSaveRef.current = () => {};

  if (navPath === undefined) {
    return (
      <div className={"default flexcol"}>
        <BusinessSelector
          businesses={businesses}
          setBusiness={(b: string) => {
            setBusiness(b);
            setBusinessMissing(false);
          }}
          missing={businessMissing}
        />
        <AuthScopeSelector
          setAuthScope={(as: pb.AuthScope) => {
            setAuthScope(as);
            setAuthScopeMissing(false);
          }}
          missing={authScopeMissing}
        />
        <AuthKindSelector
          setAuthKind={(ak: pb.AuthKind) => {
            setAuthKind(ak);
            setAuthKindMissing(false);
          }}
          missing={authKindMissing}
        />
        <AddDelSelector
          setIsAdd={(ad: boolean) => {
            setIsAdd(ad);
            setIsAddMissing(false);
          }}
          missing={isAddMissing}
        />
        <GoButton
          onClick={() => {
            if (
              business === undefined ||
              authScope === undefined ||
              authKind === undefined ||
              isAdd === undefined
            ) {
              if (business === undefined) setBusinessMissing(true);
              if (authScope === undefined) setAuthScopeMissing(true);
              if (authKind === undefined) setAuthKindMissing(true);
              if (isAdd === undefined) setIsAddMissing(true);
            } else
              setNavPath(
                NavPath.newAuthPath(business, authScope, authKind, isAdd)
              );
          }}
        />
        <div className={"nav-spacer-footer"} />
      </div>
    );
  } else {
    return (
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
  }
};

const BusinessSelector = (props: {
  businesses: string[];
  setBusiness: (b: string) => void;
  missing?: boolean;
}): ReactElement => {
  const { businesses, setBusiness, missing } = props;
  return (
    <div className={"form-container"}>
      <Selector
        label={"Business"}
        choices={businesses}
        onSelect={setBusiness}
        tooltip={"Business to configure permissions for"}
        required
        displayChoice
        error={missing}
      />
    </div>
  );
};

const AuthScopeSelector = (props: {
  setAuthScope: (s: pb.AuthScope) => void;
  missing?: boolean;
}) => {
  const { setAuthScope, missing } = props;
  const choices = ["Items", "Characters", "Contracts"];
  const fromChoice = (s: string): pb.AuthScope => {
    if (s === "Items") return pb.AuthScope.ITEMS;
    if (s === "Characters") return pb.AuthScope.CHARACTERS;
    if (s === "Contracts") return pb.AuthScope.CONTRACTS;
    throw new Error(`Invalid AuthScope: ${s}`);
  };
  return (
    <div className={"form-container"}>
      <Selector
        label={"Scope"}
        choices={["Items", "Characters", "Contracts"]}
        onSelect={(s: string) => setAuthScope(fromChoice(s))}
        tooltip={"Permission Scope: Items, Characters, or Contracts"}
        required
        displayChoice
        error={missing}
      />
    </div>
  );
};

const AuthKindSelector = (props: {
  setAuthKind: (k: pb.AuthKind) => void;
  missing?: boolean;
}) => {
  const { setAuthKind, missing } = props;
  const choices = ["Read", "Write"];
  const fromChoice = (s: string): pb.AuthKind => {
    if (s === "Read") return pb.AuthKind.READ;
    if (s === "Write") return pb.AuthKind.WRITE;
    throw new Error(`Invalid AuthKind: ${s}`);
  };
  return (
    <div className={"form-container"}>
      <Selector
        label={"Kind"}
        choices={choices}
        onSelect={(s: string) => setAuthKind(fromChoice(s))}
        tooltip={"Modify who can read or write to the scope"}
        required
        displayChoice
        error={missing}
      />
    </div>
  );
};

const AddDelSelector = (props: {
  setIsAdd: (b: boolean) => void;
  missing?: boolean;
}) => {
  const { setIsAdd, missing } = props;
  return (
    <div className={"form-container"}>
      <Selector
        label={"Add / Del"}
        choices={["Add", "Del"]}
        onSelect={(s: string) => setIsAdd(s === "Add")}
        tooltip={"Add or delete characters for the selected Scope / Kind"}
        required
        displayChoice
        error={missing}
      />
    </div>
  );
};

const GoButton = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <div className={"form-container half-width"}>
      <FullButton text="Go" onClick={onClick} />
    </div>
  );
};

const useSelection = <T,>(): [
  T | undefined,
  (t: T) => void,
  boolean,
  (b: boolean) => void
] => {
  const [selection, setSelection] = useState<T>();
  const [missing, setMissing] = useState<boolean>(false);
  return [selection, setSelection, missing, setMissing];
};

export default Authorization;
