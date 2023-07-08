import * as pb from "../pb/item_configurator";
import { prettifyStr } from "./JsonUtil";
import Row from "./Row";

const BuildCharAddProps = (rep: pb.ListCharactersRep) => {
  return buildCharProps(rep);
};

const BuildCharDelProps = (rep: pb.ListCharactersRep) => {
  return buildCharProps(rep);
};

const buildCharProps = (rep: pb.ListCharactersRep) => {
  const chars = rep.characters;

  return { chars, uniqueChars: new Set<string>(chars) };
};

const BuildItemToggleProps = (rep: pb.ListRep) => {
  const initBuilderProps = buildItemProps(rep);

  const items = rep.items;
  items.reduce(
    (acc, item) => acc.add(item.enabled ?? false),
    new Set<boolean>()
  );

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
    getEnabled: (idx: number) => items[idx].enabled ?? false,
  };
};

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
    for (const key of Object.keys(items[i].jsonIdx ?? {})) {
      uniqueJsonKeys.add(key);
    }
  }

  return {
    ...initBuilderProps,
    changes: newJsonIdx,
    uniqueJsonKeys,
    rows,
    getJson: (idx: number, key: string) => {
      const jsonStrIdx = items[idx].jsonIdx?.[key];
      return jsonStrIdx === undefined ? "" : jsonStrs[jsonStrIdx];
    },
  };
};

const buildItemProps = (rep: pb.ListRep) => {
  const marketGroups = rep.marketGroups;
  const categories = rep.categories;
  const groups = rep.groups;
  const items = rep.items;

  return {
    getMarketGroup: (idx: number) =>
      marketGroups[items[idx].marketGroupIdx ?? 0],
    getCategory: (idx: number) => categories[items[idx].categoryIdx ?? 0],
    getGroup: (idx: number) => groups[items[idx].groupIdx ?? 0],
    getTypeId: (idx: number) => items[idx].typeId ?? 0,
    getName: (idx: number) => items[idx].name ?? "",
  };
};

export {
  BuildItemConfigureProps,
  BuildItemToggleProps,
  BuildCharAddProps,
  BuildCharDelProps,
};
