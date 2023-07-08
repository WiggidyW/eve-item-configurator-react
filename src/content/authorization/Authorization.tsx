import { MutableRefObject, ReactElement, useState } from "react";
import { ItemConfiguratorClient as GrpcClient } from "../../pb/item_configurator.client";
import { Popup } from "../../Popup";
import Selector from "../../input/Selector";
import NavPath from "../NavPath";
import * as pb from "../../pb/item_configurator";

const Authorization = (props: {
  refreshTokenRef: MutableRefObject<string>;
  businesses: string[];
  onCancelRef: MutableRefObject<() => void>;
  onSaveRef: MutableRefObject<() => void>;
  throwPopup: (p: Popup) => void;
  grpcClient: GrpcClient;
}): ReactElement => {
  const {
    refreshTokenRef,
    businesses,
    onCancelRef,
    onSaveRef,
    throwPopup,
    grpcClient,
  } = props;

  const [business, setBusiness] = useState<string>();
  const [authScope, setAuthScope] = useState<pb.AuthScope>();
  const [authKind, setAuthKind] = useState<pb.AuthKind>();
  const [isAdd, setIsAdd] = useState<boolean>();
  const [navPath, setNavPath] = useState<NavPath>();

  return <>UNIMPLEMENTED</>;
};

const useAuthPath = (businesses: string[]) => {};

const BusinessSelector = (props: {
  businesses: string[];
  setBusiness: (b: string) => void;
}): ReactElement => {
  const { businesses, setBusiness } = props;
  return (
    <Selector
      label={"Business"}
      choices={businesses}
      onSelect={setBusiness}
      tooltip={"Business to configure permissions for"}
      required
    />
  );
};

const AuthScopeSelector = (props: {
  setAuthScope: (s: pb.AuthScope) => void;
}) => {
  const { setAuthScope } = props;
  const choices = ["Items", "Characters", "Contracts"];
  const fromChoice = (s: string): pb.AuthScope => {
    if (s === "Items") return pb.AuthScope.ITEMS;
    if (s === "Characters") return pb.AuthScope.CHARACTERS;
    if (s === "Contracts") return pb.AuthScope.CONTRACTS;
    throw new Error(`Invalid AuthScope: ${s}`);
  };
  return (
    <Selector
      label={"Scope"}
      choices={["Items", "Characters", "Contracts"]}
      onSelect={(s: string) => setAuthScope(fromChoice(s))}
      tooltip={"Permission Scope: Items, Characters, or Contracts"}
      required
    />
  );
};

const AuthKindSelector = (props: { setAuthKind: (k: pb.AuthKind) => void }) => {
  const { setAuthKind } = props;
  const choices = ["Read", "Write"];
  const fromChoice = (s: string): pb.AuthKind => {
    if (s === "Read") return pb.AuthKind.READ;
    if (s === "Write") return pb.AuthKind.WRITE;
    throw new Error(`Invalid AuthKind: ${s}`);
  };
  return (
    <Selector
      label={"Kind"}
      choices={choices}
      onSelect={(s: string) => setAuthKind(fromChoice(s))}
      tooltip={"Modify who can read or write to the scope"}
      required
    />
  );
};

const AddDelSelector = (props: { setIsAdd: (b: boolean) => void }) => {
  const { setIsAdd } = props;
  return (
    <Selector
      label={"Add / Del"}
      choices={["Add", "Del"]}
      onSelect={(s: string) => setIsAdd(s === "Add")}
      tooltip={"Add or delete characters for the selected Scope / Kind"}
      required
    />
  );
};

export default Authorization;
