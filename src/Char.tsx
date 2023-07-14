import { Avatar } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";

const HeaderChar = (props: {
  charName: string;
  charId: number;
}): ReactElement => {
  const { charName, charId } = props;
  return (
    <>
      <div className={"character-img"}>
        <img
          className={"character"}
          src={`https://images.evetech.net/characters/${charId}/portrait?size=128`}
        />
      </div>
      <div className={"char-spacer"} />
      <div className={"char-name"}>{charName}</div>
    </>
  );
};

interface EsiRep {
  name: string;
}

enum NameFetchable {
  Character,
  Corporation,
}

const NameFetch = (props: {
  id: number;
  kind: NameFetchable;
}): ReactElement => {
  const { id, kind } = props;
  const [name, setName] = useState("Loading...");
  useEffect(() => {
    const url = (() => {
      switch (kind) {
        case NameFetchable.Character:
          return `https://esi.evetech.net/latest/characters/${id}`;
        case NameFetchable.Corporation:
          return `https://esi.evetech.net/latest/corporations/${id}`;
      }
    })();
    fetch(url)
      .then((rep) => rep.json())
      .then((data: EsiRep) => setName(data.name));
  }, [id, kind]);
  return <>{name}</>;
};

const ContractCharAvatar = (props: { charId: number }): ReactElement => {
  const { charId } = props;
  return (
    <Avatar
      src={`https://images.evetech.net/characters/${charId}/portrait?size=64`}
      // imgProps={{ width: 32, height: 32 }}
    />
  );
};

const ContractCorpAvatar = (props: { corpId: number }): ReactElement => {
  const { corpId } = props;
  return (
    <Avatar
      src={`https://images.evetech.net/corporations/${corpId}/logo?size=64`}
      // imgProps={{ width: 32, height: 32 }}
    />
  );
};

const ContractChar = (props: { charId: number }): ReactElement => {
  const { charId } = props;
  return (
    <>
      <div className={"character-img"}>
        <img
          className={"character"}
          src={`https://images.evetech.net/characters/${charId}/portrait?size=64`}
          width={64}
          height={64}
        />
      </div>
      <div className={"char-spacer"} />
      <div className={"char-name"}>
        <NameFetch id={charId} kind={NameFetchable.Character} />
      </div>
    </>
  );
};

const ContractCorp = (props: { corpId: number }): ReactElement => {
  const { corpId } = props;
  return (
    <>
      <div className={"character-img"}>
        <img
          className={"character"}
          src={`https://images.evetech.net/corporations/${corpId}/logo?size=64`}
          width={64}
          height={64}
        />
      </div>
      <div className={"char-spacer"} />
      <div className={"char-name"}>
        <NameFetch id={corpId} kind={NameFetchable.Corporation} />
      </div>
    </>
  );
};

export {
  HeaderChar,
  ContractChar,
  ContractCharAvatar,
  ContractCorp,
  ContractCorpAvatar,
};
