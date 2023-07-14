import { MutableRefObject, ReactElement, useRef, useState } from "react";
import { BuybackContract, buybackContractsFromRep } from "./Contracts";
import {
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { ContractCharAvatar, ContractCorpAvatar } from "../../Char";
import Viewer from "./Viewer";
import { COLOR_BAD, COLOR_GOOD } from "./Color";
import { RepAndLocationNames } from "./Fetcher";

const BuybackContractSelector = (props: {
  onBackRef: MutableRefObject<() => void>;
  rep: RepAndLocationNames;
}): ReactElement => {
  const { onBackRef, rep } = props;

  const contracts = useContracts(rep);
  const [contract, setContract] = useState<BuybackContract>();

  onBackRef.current = () => setContract(undefined);

  if (contract === undefined) {
    return (
      <Grid
        container
        width={"100%"}
        maxHeight={"100%"}
        justifyContent={"center"}
        // alignItems={"center"}
      >
        {contracts.map((c) => (
          <Grid key={c.hash}>
            <SelectorContract contract={c} onSelect={(c) => setContract(c)} />
          </Grid>
        ))}
      </Grid>
    );
  } else return <Viewer contract={contract} />;
};

const useContracts = (rep: RepAndLocationNames): BuybackContract[] => {
  const contractRef = useRef<BuybackContract[]>();
  if (contractRef.current === undefined)
    contractRef.current = buybackContractsFromRep(rep).sort((a, b) =>
      a.esiIssueDate > b.esiIssueDate ? 1 : -1
    );
  return contractRef.current;
};

const SelectorContract = (props: {
  contract: BuybackContract;
  onSelect: (c: BuybackContract) => void;
}): ReactElement => {
  const { contract, onSelect } = props;
  const bgColor = (): string => {
    if (contract.valid) return COLOR_GOOD;
    // console.log(contract, contract.valid);
    else return COLOR_BAD;
    // return COLOR_BAD;
  };
  return (
    <ListItemButton onClick={() => onSelect(contract)}>
      <ListItem
        key={contract.hash}
        sx={{
          backgroundColor: bgColor(),
        }}
      >
        <ListItemAvatar>
          <ContractCharAvatar charId={contract.esiCharId} />
        </ListItemAvatar>
        <ListItemAvatar>
          <ContractCorpAvatar corpId={contract.esiCorpId} />
        </ListItemAvatar>
        <ListItemText
          primary={contract.hash}
          secondary={
            contract.esiIssueDate.toLocaleDateString() +
            " " +
            contract.esiIssueDate.toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            })
          }
        />
      </ListItem>
    </ListItemButton>
  );
};

export default BuybackContractSelector;
