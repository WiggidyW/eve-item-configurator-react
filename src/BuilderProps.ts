import Row from "./Row.js";

interface ItemProps {
  getMarketGroup: (idx: number) => string;
  getCategory: (idx: number) => string;
  getGroup: (idx: number) => string;
  getName: (idx: number) => string;
  getTypeId: (idx: number) => number;
  rows: Row[];
}

interface ItemConfigureProps extends ItemProps {
  changes: Array<{ [key: string]: number } | null>;
  getJson: (idx: number, key: string) => string;
  uniqueJsonKeys: Set<string>;
}

interface ItemToggleProps extends ItemProps {
  changes: Array<boolean | null>;
  getEnabled: (idx: number) => boolean;
}

interface CharProps {
  uniqueChars: Set<string>;
  chars: string[];
}

export {
  ItemProps,
  ItemConfigureProps,
  ItemToggleProps,
  CharProps,
};
