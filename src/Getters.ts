
interface ItemGetters {
  getMarketGroup: (idx: number) => string;
  getCategory: (idx: number) => string;
  getGroup: (idx: number) => string;
  getName: (idx: number) => string;
  getTypeId: (idx: number) => number;
}

interface ItemConfigureGetters extends ItemGetters {
  getJson: (idx: number, key: string) => string;
}

interface ItemToggleGetters extends ItemGetters {
  getEnabled: (idx: number) => boolean;
}

export {
  ItemGetters,
  ItemConfigureGetters,
  ItemToggleGetters,
};
