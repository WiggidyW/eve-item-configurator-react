import React from "react";

import { item_configurator_proto as pb } from "./item_configurator_pb.js";
import { ToggleConfigure } from "./Kind.js";
import { prettifyStr } from "./JsonUtil.js";
import Popup from "./Popup.js";
import NewItem from "./NewItem.js";
import BuilderItemsStateful from "./BuilderItemsStateful";
import Row from "./Row.js";

interface Props {
  child: (props) => React.JSX.Element;
  rep: pb.ListRep;
  grpcClient: pb.ItemConfigurator;
  business: string;
  refreshTokenRef: React.MutableRefObject<string>;
  onSaveRef: React.MutableRefObject<() => void>;
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  returnHome: () => void;
  throwPopup: (popup: Popup) => void;
}

// This component is used to parse the rep into useable props and only render
// once.
export default function BuilderItemsStateless(
  props: Props,
): React.JSX.Element {
  const { rep, ...other } = props;

  // Extract all non-item fields from the rep
  const jsonStrings = rep.json.map((jsonStr) => prettifyStr(jsonStr));
  const marketGroups = rep.marketGroups;
  const categories = rep.categories;
  const groups = rep.groups;

  // Resolve missing fields by converting IListItem to ListItems
  const items = new Array<pb.ListItem>(rep.items.length);
  // Initialize the list of items that have been changed
  const newItems = new Array<NewItem>(rep.items.length);
  // Store the incrementing index of each item for the DataGrid
  const rows: Row[] = new Array(rep.items.length);
  // Collect all unique keys from Json Indexes
  const jsonKeys = new Set<string>();

  // Iterate through each item and populate the collections
  for (let i = 0; i < rep.items.length; i++) {
    const pbIListItem = rep.items[i];
    const pbListItem = new pb.ListItem(pbIListItem);
    
    items[i] = pbListItem;
    newItems[i] = new NewItem(pbListItem);
    rows[i] = new Row(i);
    for (const key in pbIListItem.jsonIdx) {
      jsonKeys.add(key);
    }
  }

  return (
    <BuilderItemsStateful
      // Return the associated JSON string if the item has the key
      jsonGetter={(idx: number, key: string) => {
        const jsonStrIdx: number | undefined = items[idx].jsonIdx[key];
        return jsonStrIdx ? jsonStrings[jsonStrIdx] : '';
      }}

      // Return the market group str indexed by the item
      marketGroupGetter={(idx: number) => (
        marketGroups[items[idx].marketGroupIdx]
      )}

      // Return the category str indexed by the item
      categoryGetter={(idx: number) => (
        categories[items[idx].categoryIdx]
      )}

      // Return the group str indexed by the item
      groupGetter={(idx: number) => (
        groups[items[idx].groupIdx]
      )}

      // Return the name of the item
      nameGetter={(idx: number) => (
        items[idx].name
      )}

      // Return the enabled state of the item
      enabledGetter={(idx: number) => (
        items[idx].enabled
      )}

      // Return the type ID of the item
      typeIdGetter={(idx: number) => (
        items[idx].typeId
      )}

      jsonKeys={jsonKeys}
      newItems={newItems}
      rows={rows}
      {...other}
    />
  );
}
