import { ReactElement } from "react";
import { BuybackContract } from "./Contracts";
import { TableBuybackContracts, TableBuybackDetails } from "./BuybackTable";
import { COLOR_NEUTRAL } from "./Color";

const BuybackContractViewer = (props: {
  contract: BuybackContract;
}): ReactElement => {
  const { contract } = props;

  return (
    <div className="default flexcol">
      <TableBuybackDetails contract={contract} />
      <TableBuybackContracts
        items={contract.items}
        color={COLOR_NEUTRAL}
        title={"Items"}
      />
    </div>
  );
};

export default BuybackContractViewer;
