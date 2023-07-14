import * as weve_esi from "../../pb/weve_esi";
import * as item_configurator from "../../pb/item_configurator";
import * as buyback from "../../pb/buyback";
import { RepAndLocationNames } from "./Fetcher";

interface BuybackContractItem {
  typeId: number;
  name: string;
  checkItem?: buyback.RepItem;
  buyItem?: buyback.RepItem;
}

type BuybackContractChildItem = BuybackContractItem;

interface BuybackContractParentItem extends BuybackContractItem {
  esiItem?: weve_esi.ExchangeContractItem;
  children?: BuybackContractChildItem[];
}

class BuybackContract {
  public hash: string;
  public items: BuybackContractParentItem[];

  public esiPrice: number;
  public esiExpireDate: Date;
  public esiIssueDate: Date;
  public esiCharId: number;
  public esiCorpId: number;
  public esiVolume: number;
  public esiLocationId: BigInt;
  public esiSystemId: number;
  public esiSystemName: string;
  public esiRegionId: number;
  public esiRegionName: string;

  public checkRegion: string;
  public checkVersion: string;
  public checkPrice: number;
  public checkDate: Date;

  public buyVersion: string;
  public buyPrice: number;

  public valid: boolean;

  constructor(
    repContract: item_configurator.BuybackContract,
    systemName: string,
    regionName: string
  ) {
    this.esiSystemName = systemName;
    this.esiRegionName = regionName;
    this.hash = repContract.hashCode;
    const itemsMap = new Map<number, BuybackContractParentItem>();

    const esiContract =
      repContract.esiContract ?? contractMissing(this.hash, "ESI");

    this.esiPrice = esiContract.price;
    this.esiExpireDate = epochSecsToDate(esiContract.expires);
    this.esiIssueDate = epochSecsToDate(esiContract.issued);
    this.esiCharId = esiContract.charId;
    this.esiCorpId = esiContract.corpId;
    this.esiVolume = esiContract.volume;
    this.esiLocationId = esiContract.locationId;
    this.esiSystemId = esiContract.systemId;
    this.esiRegionId = esiContract.regionId;

    for (const esiItem of esiContract.items) {
      const item = itemsMap.get(esiItem.typeId);
      if (item) {
        const existingEsiItem = item.esiItem;
        if (existingEsiItem) existingEsiItem.quantity += esiItem.quantity;
        else item.esiItem = esiItem;
      } else
        itemsMap.set(esiItem.typeId, {
          typeId: esiItem.typeId,
          name: "",
          esiItem,
        });
    }

    const checkContract =
      repContract.checkContract ?? contractMissing(this.hash, "CHECK");

    this.checkRegion = checkContract.location;
    this.checkVersion = checkContract.version;
    this.checkPrice = checkContract.sum;
    this.checkDate = epochSecsToDate(checkContract.timestamp);

    for (const checkItem of checkContract.items) {
      const item = itemsMap.get(checkItem.parentTypeId);
      if (checkItem.typeId === checkItem.parentTypeId) {
        if (item) {
          item.checkItem = checkItem;
          if (item.name === "") item.name = checkItem.name;
        } else {
          itemsMap.set(checkItem.parentTypeId, {
            typeId: checkItem.parentTypeId,
            name: checkItem.name,
            checkItem,
          });
        }
      } else {
        if (item) {
          if (item.children === undefined) item.children = [];
          const child = item.children.find(
            (c) => c.typeId === checkItem.typeId
          );
          if (child) child.checkItem = checkItem;
          else
            item.children.push({
              typeId: checkItem.typeId,
              name: checkItem.name,
              checkItem,
            });
        } else {
          itemsMap.set(checkItem.parentTypeId, {
            typeId: checkItem.parentTypeId,
            name: "",
            children: [
              { typeId: checkItem.typeId, name: checkItem.name, checkItem },
            ],
          });
        }
      }
    }

    const buyContract =
      repContract.buyContract ?? contractMissing(this.hash, "BUY");

    this.buyVersion = buyContract.version;
    this.buyPrice = buyContract.sum;

    for (const buyItem of buyContract.items) {
      const item = itemsMap.get(buyItem.parentTypeId);
      if (buyItem.typeId === buyItem.parentTypeId) {
        if (item) {
          item.buyItem = buyItem;
          if (item.name === "") item.name = buyItem.name;
        } else {
          itemsMap.set(buyItem.parentTypeId, {
            typeId: buyItem.parentTypeId,
            name: buyItem.name,
            buyItem,
          });
        }
      } else {
        if (item) {
          if (item.children === undefined) item.children = [];
          const child = item.children.find((c) => c.typeId === buyItem.typeId);
          if (child) child.buyItem = buyItem;
          else
            item.children.push({
              typeId: buyItem.typeId,
              name: buyItem.name,
              buyItem,
            });
        } else {
          itemsMap.set(buyItem.parentTypeId, {
            typeId: buyItem.parentTypeId,
            name: "",
            children: [{ typeId: buyItem.typeId, name: buyItem.name, buyItem }],
          });
        }
      }
    }

    this.items = Array.from(itemsMap.values());

    this.valid = (() => {
      if (this.esiPrice > this.checkPrice * 1.01) return false;
      if (
        !this.esiSystemName.includes(this.checkRegion) &&
        !this.esiRegionName.includes(this.checkRegion)
      )
        return false;
      for (const item of this.items) {
        if (item.checkItem?.accepted) {
          if (
            item.esiItem === undefined ||
            Number(item.esiItem.quantity) < item.checkItem.quantity
          )
            return false;
        }
      }
      return true;
    })();
  }
}

const buybackContractsFromRep = (rep: RepAndLocationNames) =>
  rep.rep.contracts.map(
    (c) =>
      new BuybackContract(
        c,
        rep.systemNames.get(
          c.esiContract?.systemId ?? contractMissing(c.hashCode, "CHECK")
        ) ?? "Unknown System",
        rep.regionNames.get(
          c.esiContract?.regionId ?? contractMissing(c.hashCode, "CHECK")
        ) ?? "Unknown Region"
      )
  );

const contractMissing = (hash: string, type: string): never => {
  throw new Error(
    `Contract '${hash}' is missing inner Contract of type '${type}'`
  );
};

const epochSecsToDate = (epochSecs: BigInt): Date =>
  new Date(Number(epochSecs) * 1000);

export type { BuybackContractParentItem, BuybackContractChildItem };
export { BuybackContract, buybackContractsFromRep };
