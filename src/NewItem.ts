import { item_configurator_proto as pb } from "./item_configurator_pb.js";

export default class NewItem implements pb.IUpdateItem {
  public typeId: number;
  public enabled: boolean | null;
  public jsonIdx: { [k: string]: number };

  constructor(pbItem: pb.ListItem) {
    this.typeId = pbItem.typeId;
    this.enabled = null;
    this.jsonIdx = {};
  }

  isChanged = function(): boolean {
    return this.enabled !== null || Object.keys(this.jsonIdx).length > 0;
  }
}
