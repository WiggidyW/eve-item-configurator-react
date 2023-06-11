import React, { useState } from "react";
import Item from "./Item";
import ItemGridJson from "./ItemGridJson";
import { item_configurator_proto as pb } from "./item_configurator_pb.js";
import { JsonIndexMap, JsonString, ItemIndex, JsonIndex } from "./Types";

const InitialNewJsonStrings: JsonString[] = [];

let JsonKeys: Set<JsonString> = new Set();
let OldJsonStrings: JsonString[] = [];
let OldJsonIndexes: JsonIndexMap[] = [];
let NewJsonStrings: JsonString[] = [];
let NewJsonIndexes: pb.Item[] = [];
let SelectedItems: ItemIndex[] = [];

interface ItemConfiguratorJsonProps {
  itemConfigName: string;
  items: Item[];
  jsonDefaultKeys: Set<JsonString>;
  jsonDefaultStrings: JsonString[];
  kindData: JsonIndexMap[] | boolean[];
  groupGetter: (groupIdx: ItemIndex) => string;
  categoryGetter: (categoryIdx: ItemIndex) => string;
  marketGroupGetter: (marketGroupIdx: ItemIndex) => string;
}

export default function ItemConfiguratorJson(
  props: ItemConfiguratorJsonProps,
) {
  const {
    itemConfigName,
    items,
    jsonDefaultKeys,
    jsonDefaultStrings,
    kindData,
    ...other
  } = props;

  const [jsonKeys, setJsonKeys] = useState(jsonDefaultKeys);
  const [newJsonStrings, setNewJsonStrings] = useState(InitialNewJsonStrings);
  // If you use a callback for the initial state,
  // it will only be called on the initial render.
  const [newJsonIndexes, setNewJsonIndexes] = useState(() => items.map(
    (item) => new pb.Item({
      typeId: item.id,
      enabled: true,
      jsonIdx: {},
    })
  ));

  JsonKeys = jsonKeys;
  OldJsonStrings = jsonDefaultStrings;
  OldJsonIndexes = kindData as JsonIndexMap[];
  NewJsonStrings = newJsonStrings;
  NewJsonIndexes = newJsonIndexes;

  const jsonGetter = function(i: ItemIndex, key: string) {
    const newJsonIndex = NewJsonIndexes[i].jsonIdx[key] || undefined;
    if (newJsonIndex !== undefined) {
      return NewJsonStrings[newJsonIndex];
    }
    const oldJsonIndex = OldJsonIndexes[i][key] || undefined;
    if (oldJsonIndex !== undefined) {
      return OldJsonStrings[oldJsonIndex];
    }
    return "";
  };

  const jsonSetter = function(key: string, value: string) {
    const newJsonIndex = NewJsonStrings.length;

    // Add new JSON string
    const jsonObject = JSON.parse(value);
    const jsonPretty = JSON.stringify(jsonObject, null, 2);
    NewJsonStrings.push(jsonPretty);

    // Update new JSON indexes
    for (const i of SelectedItems) {
      NewJsonIndexes[i].jsonIdx[key] = newJsonIndex;
    }

    // Update JSON keys
    if (!JsonKeys.has(key)) {
      JsonKeys.add(key);

    // Commit the state changes
      setJsonKeys(JsonKeys);
    }
    setNewJsonStrings(NewJsonStrings);
    setNewJsonIndexes(NewJsonIndexes);
  };

  return (
    <ItemGridJson
      rows={items}
      jsonColumns={Array.from(jsonKeys)}
      updateSelected={(selected: ItemIndex[]) => {
        SelectedItems = selected;
      }}
      {...props /* eslint-disable-line react/jsx-props-no-spreading */}
    />
  )
}
