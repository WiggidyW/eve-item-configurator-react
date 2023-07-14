import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
  IconButton,
  Collapse,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { quantityToStr, priceToStr } from "./FmtUtil";
import {
  BuybackContractParentItem,
  BuybackContractChildItem,
  BuybackContract,
} from "./Contracts";
import { COLOR_BAD, COLOR_GOOD, COLOR_WARN } from "./Color";

interface Props<I> {
  items: I[];
  color: string;
  title: string;
}

const TableBuybackContracts = (
  props: Props<BuybackContractParentItem>
): ReactElement => {
  const { items, color, title } = props;
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: color,
        textAlign: "center",
        maxHeight: "100%",
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography>{`${title} (${items.length} items)`}</Typography>
      </Toolbar>
      <Table>
        <TableHeadBuybackContracts />
        <TableBody>
          {items.map((item) => (
            <TableRowBuybackContracts item={item} key={item.typeId} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const TableBuybackDetails = (props: {
  contract: BuybackContract;
}): ReactElement => {
  const { contract } = props;
  return (
    // <TableContainer>
    <Table
      size={"small"}
      sx={{
        maxHeight: "100%",
        // tableLayout: "fixed",
        "& .MuiTableCell-root": { align: "center" },
        minHeight: "fit-content",
      }}
    >
      <TableHeadBuybackDetails />
      <TableBody>
        <TableRowBuybackDetails contract={contract} />
      </TableBody>
    </Table>
    // </TableContainer>
  );
};

const TableHeadBuybackContractsChildren = (): ReactElement => (
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Quantity</TableCell>
      <TableCell>Per</TableCell>
      <TableCell>Total</TableCell>
      <TableCell>Description</TableCell>
    </TableRow>
  </TableHead>
);

const TableHeadBuybackContracts = (): ReactElement => (
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell />
      <TableCell>Quantity</TableCell>
      <TableCell>Per</TableCell>
      <TableCell>Total</TableCell>
      <TableCell>Description</TableCell>
    </TableRow>
  </TableHead>
);

const TableHeadBuybackDetails = (): ReactElement => (
  <TableHead>
    <TableRow>
      <TableCell>Character</TableCell>
      <TableCell>Corporation</TableCell>
      <TableCell>Price</TableCell>
      <TableCell>Location</TableCell>
      <TableCell>Issued</TableCell>
      <TableCell>Expires</TableCell>
      <TableCell>Volume</TableCell>
    </TableRow>
  </TableHead>
);

const TableRowBuybackDetails = (props: {
  contract: BuybackContract;
}): ReactElement => {
  const { contract } = props;

  const baseColor = contract.valid ? undefined : COLOR_BAD;

  const priceColor = (() => {
    if (baseColor !== undefined) return baseColor;
    if (contract.buyPrice > 1.05 * contract.checkPrice) return COLOR_GOOD;
    if (contract.buyPrice * 1.2 < contract.checkPrice) return COLOR_BAD;
    if (contract.buyPrice * 1.05 < contract.checkPrice) return COLOR_WARN;
  })();

  return (
    <TableRow>
      <ColoredCell bgcolor={baseColor}>
        <CharacterNameWithImage characterId={contract.esiCharId} noWrap />
      </ColoredCell>
      <ColoredCell bgcolor={baseColor}>
        <CorporationNameWithImage corporationId={contract.esiCorpId} noWrap />
      </ColoredCell>
      <DiffCell
        key1={"Cached"}
        value1={priceToStr(contract.checkPrice)}
        key2={"Contract"}
        value2={priceToStr(contract.esiPrice)}
        key3={"Current"}
        value3={priceToStr(contract.buyPrice)}
        bgcolor={priceColor}
        noWrapValue
      />
      <DiffCell
        key1={"Cached"}
        value1={contract.checkRegion}
        key2={"Contract"}
        value2={`${contract.esiSystemName} / ${contract.esiRegionName}`}
        bgcolor={baseColor}
        noWrapValue
      />
      <ColoredCell bgcolor={baseColor}>
        {contract.esiIssueDate.toLocaleString()}
      </ColoredCell>
      <ColoredCell bgcolor={baseColor}>
        {contract.esiExpireDate.toLocaleString()}
      </ColoredCell>
      <ColoredCell bgcolor={baseColor}>
        {quantityToStr(contract.esiVolume, 2)}
      </ColoredCell>
    </TableRow>
  );
};

const TableRowBuybackContractsChildren = (props: {
  items: BuybackContractChildItem[];
  open: boolean;
}): ReactElement => {
  const { items, open } = props;

  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Table size="small" aria-label="child items">
            <TableHeadBuybackContractsChildren />
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.typeId}>
                  <TableCell>
                    <ItemNameWithImage
                      noWrap
                      name={item.name}
                      typeId={item.typeId}
                    />
                  </TableCell>
                  <DiffCell
                    noWrapValue
                    key1={"Cached"}
                    value1={
                      item.checkItem
                        ? quantityToStr(item.checkItem.quantity, 2)
                        : ""
                    }
                    key2={"Current"}
                    value2={
                      item.buyItem
                        ? quantityToStr(item.buyItem.quantity, 2)
                        : ""
                    }
                  />
                  <DiffCell
                    noWrapValue
                    key1={"Cached"}
                    value1={
                      item.checkItem ? priceToStr(item.checkItem.pricePer) : ""
                    }
                    key2={"Current"}
                    value2={
                      item.buyItem ? priceToStr(item.buyItem.pricePer) : ""
                    }
                  />
                  <DiffCell
                    noWrapValue
                    key1={"Cached"}
                    value1={
                      item.checkItem
                        ? priceToStr(
                            item.checkItem.pricePer * item.checkItem.quantity
                          )
                        : ""
                    }
                    key2={"Current"}
                    value2={
                      item.buyItem
                        ? priceToStr(
                            item.buyItem.pricePer * item.buyItem.quantity
                          )
                        : ""
                    }
                  />
                  <DiffCell
                    key1={"Cached"}
                    value1={item.checkItem ? item.checkItem.description : ""}
                    key2={"Current"}
                    value2={item.buyItem ? item.buyItem.description : ""}
                  />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

const TableRowBuybackContracts = (props: {
  item: BuybackContractParentItem;
}): ReactElement => {
  const { item } = props;

  const [childrenOpen, setChildrenOpen] = useState(false);

  const baseColor = (() => {
    if (item.checkItem === undefined) return COLOR_BAD;
    const checkQuant = item.checkItem.quantity;
    const esiQuant = item.esiItem?.quantity ?? 0;
    if (esiQuant < checkQuant) return COLOR_BAD;
  })();

  const priceColor = (() => {
    if (baseColor !== undefined) return baseColor;
    const checkPrice = item.checkItem?.pricePer ?? 0;
    const buyPrice = item.buyItem?.pricePer ?? 0;
    if (buyPrice > 1.05 * checkPrice) return COLOR_GOOD;
    if (buyPrice * 1.2 < checkPrice) return COLOR_BAD;
    if (buyPrice * 1.05 < checkPrice) return COLOR_WARN;
  })();

  const quantColor = (() => {
    if (baseColor !== undefined) return baseColor;
    const checkQuant = item.checkItem?.quantity ?? 0;
    const esiQuant = item.esiItem?.quantity ?? 0;
    if (checkQuant < esiQuant || checkQuant > esiQuant) return COLOR_WARN;
  })();

  return (
    <>
      <TableRow>
        <ColoredCell bgcolor={baseColor}>
          <ItemNameWithImage noWrap name={item.name} typeId={item.typeId} />
        </ColoredCell>
        <ColoredCell bgcolor={baseColor}>
          {item.children !== undefined && item.children.length > 0 ? (
            <IconButton
              aria-label="expand check row"
              size="small"
              onClick={() => setChildrenOpen(!childrenOpen)}
            >
              {childrenOpen ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
          ) : null}
        </ColoredCell>
        <DiffCell
          key1={"Cached"}
          value1={
            item.checkItem ? quantityToStr(item.checkItem.quantity, 0) : ""
          }
          key2={"Contract"}
          value2={item.esiItem ? quantityToStr(item.esiItem.quantity, 0) : ""}
          bgcolor={quantColor}
          noWrapValue
        />
        <DiffCell
          key1={"Cached"}
          value1={item.checkItem ? priceToStr(item.checkItem.pricePer) : ""}
          key2={"Current"}
          value2={item.buyItem ? priceToStr(item.buyItem.pricePer) : ""}
          bgcolor={priceColor}
          noWrapValue
        />
        <DiffCell
          key1={"Cached"}
          value1={
            item.checkItem
              ? priceToStr(item.checkItem.pricePer * item.checkItem.quantity)
              : ""
          }
          key2={"Current"}
          value2={
            item.buyItem
              ? priceToStr(item.buyItem.pricePer * item.buyItem.quantity)
              : ""
          }
          bgcolor={priceColor}
          noWrapValue
        />
        <DiffCell
          key1={"Cached"}
          value1={item.checkItem ? item.checkItem.description : ""}
          key2={"Current"}
          value2={item.buyItem ? item.buyItem.description : ""}
          bgcolor={baseColor}
        />
      </TableRow>
      {item.children !== undefined && item.children.length > 0 ? (
        <TableRowBuybackContractsChildren
          items={item.children}
          open={childrenOpen}
        />
      ) : null}
    </>
  );
};

const ColoredCell = (props: {
  bgcolor?: string;
  children?: ReactNode;
}): ReactElement => {
  const { bgcolor, children } = props;
  if (bgcolor === undefined) return <TableCell>{children}</TableCell>;
  else
    return <TableCell sx={{ backgroundColor: bgcolor }}>{children}</TableCell>;
};

const DiffCell = (props: {
  key1: string;
  value1: string;
  key2: string;
  value2: string;
  key3?: string;
  value3?: string;
  bgcolor?: string;
  noWrapValue?: boolean;
}): ReactElement => {
  const { key1, value1, key2, value2, key3, value3, bgcolor, noWrapValue } =
    props;

  const TypographyKey = (props: { text: string }): ReactElement => {
    const { text } = props;
    return (
      <Typography sx={{ fontSize: "inherit", fontWeight: "bold" }}>
        {text}
      </Typography>
    );
  };

  const TypographyValue = (props: { text: string }): ReactElement => {
    const { text } = props;
    return (
      <Typography noWrap={noWrapValue} sx={{ fontSize: "inherit" }}>
        {text}
      </Typography>
    );
  };

  const TypographyMissing = (): ReactElement => (
    <Typography sx={{ fontSize: "inherit", fontStyle: "italic" }}>
      Missing!
    </Typography>
  );

  if (
    (value1 === value2 && value1 !== "" && value3 === undefined) ||
    (value1 === value2 && value2 === value3 && value1 !== "")
  )
    return (
      <ColoredCell bgcolor={bgcolor}>
        <TypographyValue text={value1} />
      </ColoredCell>
    );
  else
    return (
      <ColoredCell bgcolor={bgcolor}>
        <TypographyKey text={key1} />
        {value1 === "" ? (
          <TypographyMissing />
        ) : (
          <TypographyValue text={value1} />
        )}
        <div style={{ height: "4px" }} />
        <TypographyKey text={key2} />
        {value2 === "" ? (
          <TypographyMissing />
        ) : (
          <TypographyValue text={value2} />
        )}
        {key3 !== undefined && value3 !== undefined ? (
          <>
            <TypographyKey text={key3} />
            {value3 === "" ? (
              <TypographyMissing />
            ) : (
              <TypographyValue text={value3} />
            )}
          </>
        ) : null}
      </ColoredCell>
    );
};

const ItemNameWithImage = (props: {
  name: string;
  typeId: number;
  noWrap?: boolean;
}): ReactElement => {
  const { name, typeId, noWrap } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={`https://images.evetech.net/types/${typeId}/icon?size=32`}
        alt={typeId.toString()}
        width={32}
        height={32}
      />
      <div style={{ minWidth: "2px" }} />
      <Typography noWrap={noWrap} sx={{ fontSize: "inherit" }}>
        <ItemName typeId={typeId} name={name} />
      </Typography>
    </div>
  );
};

const CharacterNameWithImage = (props: {
  characterId: number;
  noWrap?: boolean;
}): ReactElement => {
  const { characterId, noWrap } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={`https://images.evetech.net/characters/${characterId}/portrait?size=64`}
        alt={characterId.toString()}
        width={64}
        height={64}
      />
      <div style={{ minWidth: "2px" }} />
      <Typography noWrap={noWrap} sx={{ fontSize: "inherit" }}>
        <CharacterName characterId={characterId} />
      </Typography>
    </div>
  );
};

const CorporationNameWithImage = (props: {
  corporationId: number;
  noWrap?: boolean;
}): ReactElement => {
  const { corporationId, noWrap } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={`https://images.evetech.net/corporations/${corporationId}/logo?size=64`}
        alt={corporationId.toString()}
        width={64}
        height={64}
      />
      <div style={{ minWidth: "4px" }} />
      <Typography noWrap={noWrap} sx={{ fontSize: "inherit" }}>
        <CorporationName corporationId={corporationId} />
      </Typography>
    </div>
  );
};

const ItemName = (props: { typeId: number; name?: string }): ReactElement => {
  const { typeId, name: initName } = props;

  const [itemName, setItemName] = useState(initName);

  useEffect(() => {
    if (itemName === undefined || itemName === "") {
      fetch(`https://esi.evetech.net/latest/universe/types/${typeId}/`)
        .then((response) => response.json())
        .then((data) => setItemName(data.name))
        .catch((_) => setItemName(typeId.toString()));
    }
  }, [itemName, typeId]);

  return <>{itemName}</>;
};

const CharacterName = (props: { characterId: number }): ReactElement => {
  const { characterId } = props;

  const [characterName, setCharacterName] = useState("");

  useEffect(() => {
    if (characterName === "") {
      fetch(
        `https://esi.evetech.net/latest/characters/${characterId}/?datasource=tranquility`
      )
        .then((response) => response.json())
        .then((data) => setCharacterName(data.name))
        .catch((_) => setCharacterName(characterId.toString()));
    }
  }, [characterId]);

  return <>{characterName}</>;
};

const CorporationName = (props: { corporationId: number }): ReactElement => {
  const { corporationId } = props;

  const [corporationName, setCorporationName] = useState("");

  useEffect(() => {
    if (corporationName === "") {
      fetch(
        `https://esi.evetech.net/latest/corporations/${corporationId}/?datasource=tranquility`
      )
        .then((response) => response.json())
        .then((data) => setCorporationName(data.name))
        .catch((_) => setCorporationName(corporationId.toString()));
    }
  }, [corporationId]);

  return <>{corporationName}</>;
};

export { TableBuybackContracts, TableBuybackDetails };
