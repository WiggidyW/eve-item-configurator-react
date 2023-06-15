export enum NavStep {
  ItemOrChar,
  ConfigureOrToggle,
  ReadOrWrite,
  AddOrDel,
  Done,
}

export const BusinessStepStr = `Which Business would you like to modify?`;

export class NavPathBuilder {
  private _business?: string;
  private _inner?: CharPathBuilder | ItemPathBuilder;

  public constructor(business: string) {
    this._business = business;
  }

  private set inner(value: boolean) {
    this._inner = value ? new ItemPathBuilder() : new CharPathBuilder();
  }

  public nextStep(): [string, NavStep] {
    if (this._inner === undefined) {
      return [
        `Would you like to modify Items?\n`
          + `Or would you like to modify Characters?`,
        NavStep.ItemOrChar,
      ];
    } else {
      return this._inner.nextStep();
    }
  }
  public addStep(b: boolean): NavPathBuilder {
    const newNavPathBuilder = new NavPathBuilder(this._business as string);

    if (this._inner === undefined) {
      newNavPathBuilder.inner = b;
    } else {
      newNavPathBuilder._inner = this._inner;
      newNavPathBuilder._inner.addStep(b);
    }
    return newNavPathBuilder;
  }
  public finish(): NavPath | undefined {
    const inner = this._inner?.finish();
    if (this._business !== undefined && inner !== undefined) {
      return new NavPath(this._business, inner);
    }
  }
}

export default class NavPath {
  private _business: string;
  private _isItem: boolean;
  private _inner: CharPath | ItemPath;

  public constructor(
    business: string,
    inner: CharPath | ItemPath,
  ) {
    this._business = business;
    this._inner = inner;
    this._isItem = inner instanceof ItemPath;
  }

  public get business(): string {
    return this._business;
  }
  public get isItem(): boolean {
    return this._isItem;
  }
  public get isChar(): boolean {
    return !this._isItem;
  }
  public get inner(): CharPath | ItemPath {
    return this._inner;
  }
  public get itemPath(): ItemPath | undefined {
    return this.isItem ? (this._inner as ItemPath) : undefined;
  }
  public get itemPathUnchecked(): ItemPath {
    return this._inner as ItemPath;
  }
  public get charPath(): CharPath | undefined {
    return this.isChar ? (this._inner as CharPath) : undefined;
  }
  public get charPathUnchecked(): CharPath {
    return this._inner as CharPath;
  }
  public get isItemConfigure(): boolean {
    return this.isItem && this.itemPathUnchecked.isConfigure;
  }
  public get isItemToggle(): boolean {
    return this.isItem && this.itemPathUnchecked.isToggle;
  }
  public get isCharAdd(): boolean {
    return this.isChar && this.charPathUnchecked.isAdd;
  }
  public get isCharDel(): boolean {
    return this.isChar && this.charPathUnchecked.isDel;
  }
}

export class CharPathBuilder {
  private _isItem?: boolean;
  private _isRead?: boolean;
  private _isAdd?: boolean;

  private get itemStr(): string {
    switch (this._isItem) {
      case true:
        return "Items";
      case false:
        return "Characters";
      default:
        return "[ERROR]";
    }
  }

  public constructor() {}

  public nextStep(): [string, NavStep] {
    if (this._isItem === undefined) {
      return [
        `Would you like to modify who can read / write Characters?\n`
          + `Or would you like to modify who can read / write Items?`,
        NavStep.ItemOrChar,
      ];
    } else if (this._isRead === undefined) {
      return [
        `Would you like to modify who can read ${this.itemStr}?\n`
          + `Or would you like to modify who can write ${this.itemStr}?`,
        NavStep.ReadOrWrite,
      ]
    } else if (this._isAdd === undefined) {
      return [
        "Would you like to Add People?\n"
          + "Or would you like to Delete People?",
        NavStep.AddOrDel,
      ];
    } else {
      return ["", NavStep.Done];
    }
  }
  public addStep(b: boolean) {
    if (this._isItem === undefined) {
      this._isItem = b;
    } else if (this._isRead === undefined) {
      this._isRead = b;
    } else if (this._isAdd === undefined) {
      this._isAdd = b;
    }
  }
  public finish(): CharPath | undefined {
    if (this._isItem !== undefined
      && this._isRead !== undefined
      && this._isAdd !== undefined
    ) {
      return new CharPath(this._isItem, this._isRead, this._isAdd);
    }
  }
}

export class CharPath {
  private _isItem: boolean;
  private _isRead: boolean;
  private _isAdd: boolean;

  public constructor(
    isItem: boolean,
    isRead: boolean,
    isAdd: boolean,
  ) {
    this._isItem = isItem;
    this._isRead = isRead;
    this._isAdd = isAdd;
  }

  public get authKind(): boolean {
    return this._isRead;
  }
  public get isRead(): boolean {
    return this._isRead;
  }
  public get isWrite(): boolean {
    return !this._isRead;
  }
  public get authScope(): boolean {
    return this._isItem;
  }
  public get isItem(): boolean {
    return this._isItem;
  }
  public get isChar(): boolean {
    return !this._isItem;
  }
  public get isAdd(): boolean {
    return this._isAdd;
  }
  public get isDel(): boolean {
    return !this._isAdd;
  }
}

export class ItemPathBuilder {
  private _isConfigure?: boolean;

  public constructor() {}

  public nextStep(): [string, NavStep] {
    if (this._isConfigure === undefined) {
      return [
        `Would you like to Enable / Disable Items?\n`
          + `or would you like to Configure Items?`,
        NavStep.ConfigureOrToggle,
      ];
    } else {
      return ["", NavStep.Done];
    }
  }
  public addStep(b: boolean) {
    if (this._isConfigure === undefined) {
      this._isConfigure = b;
    }
  }
  public finish(): ItemPath | undefined {
    if (this._isConfigure !== undefined) {
      return new ItemPath(this._isConfigure);
    }
  }
}

export class ItemPath {
  private _isConfigure: boolean;

  public constructor(isConfigure: boolean) {
    this._isConfigure = isConfigure;
  }

  public get isConfigure(): boolean {
    return this._isConfigure;
  }
  public get isToggle(): boolean {
    return !this._isConfigure;
  }
}

export { NavPath };
