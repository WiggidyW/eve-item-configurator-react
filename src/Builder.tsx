import { item_configurator_proto as pb } from "./item_configurator_pb.js";
import { prettifyStr } from "./ItemsUtil.js";
import Row from "./Row.js";

const BuildCharAddProps = (rep: pb.ListCharactersRep) => {
  return buildCharProps(rep);
}

const BuildCharDelProps = (rep: pb.ListCharactersRep) => {
  return buildCharProps(rep);
}

const buildCharProps = (rep: pb.ListCharactersRep) => {
  const chars = rep.characters;

  return { chars, uniqueChars: new Set<string>(chars) };
};

const BuildItemToggleProps = (rep: pb.ListRep) => {
  const initBuilderProps = buildItemProps(rep);

  const items = rep.items;
  items.reduce((acc, item) => acc.add(item.enabled ?? false), new Set<boolean>());
  
  const rows = new Array<Row>(items.length);
  const newEnabled = new Array<boolean | null>(items.length);

  for (let i = 0; i < items.length; ++i) {
    rows[i] = new Row(i);
    newEnabled[i] = null;
  }

  return {
    ...initBuilderProps,
    changes: newEnabled,
    rows,
    getEnabled: (idx) => items[idx].enabled ?? false,
  };
}

const BuildItemConfigureProps = (rep: pb.ListRep) => {
  const initBuilderProps = buildItemProps(rep);

  const jsonStrs = rep.json.map((jsonStr) => prettifyStr(jsonStr));
  const items = rep.items;

  const newJsonIdx = new Array<{ [key: string]: number } | null>(items.length);
  const rows = new Array<Row>(items.length);
  const uniqueJsonKeys = new Set<string>();

  for (let i = 0; i < items.length; ++i) {
    newJsonIdx[i] = null;
    rows[i] = new Row(i);
    for (const key in Object.keys(items[i].jsonIdx ?? {})) {
      uniqueJsonKeys.add(key);
    }
  }

  return {
    ...initBuilderProps,
    changes: newJsonIdx,
    uniqueJsonKeys,
    rows,
    getJson: (idx, key) => {
      const jsonStrIdx = items[idx].jsonIdx?.[key];
      return jsonStrIdx === undefined ? "" : jsonStrs[jsonStrIdx];
    },
  };
}

const buildItemProps = (rep: pb.ListRep) => {
  const marketGroups = rep.marketGroups;
  const categories = rep.categories;
  const groups = rep.groups;
  const items = rep.items;

  return {
    getMarketGroup: (idx) => marketGroups[items[idx].marketGroupIdx ?? 0],
    getCategory: (idx) => categories[items[idx].categoryIdx ?? 0],
    getGroup: (idx) => groups[items[idx].groupIdx ?? 0],
    getTypeId: (idx) => items[idx].typeId ?? 0,
    getName: (idx) => items[idx].name ?? "",
  };
}

export {
  BuildItemConfigureProps,
  BuildItemToggleProps,
  BuildCharAddProps,
  BuildCharDelProps,
};
