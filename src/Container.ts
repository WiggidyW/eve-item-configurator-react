import { JsonString, ItemIndex, JsonObject } from "./TypeUtil";
import Row from "./Row";

export type ContainerComponent = (props: Props) => JSX.Element;

export interface Props {
  jsonGetter: (i: ItemIndex, key: string) => JsonString | null;
  jsonSetter: (key: string, value: JsonObject) => void;
  selectedSetter: (value: ItemIndex[]) => void;
  marketGroupGetter: (i: ItemIndex) => string;
  categoryGetter: (i: ItemIndex) => string;
  enabledGetter: (i: ItemIndex) => boolean;
  enabledSetter: (value: boolean) => void;
  typeIdGetter: (i: ItemIndex) => number;
  groupGetter: (i: ItemIndex) => string;
  nameGetter: (i: ItemIndex) => string;
  jsonKeys: string[];
  rows: Row[];
  [other: string]: any;
}
