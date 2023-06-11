export enum Configurator {
  AddCharacters = "add characters",
  DelCharacters = "delete characters",
  ToggleItems = "toggle items",
  ConfigureItems = "configure items",
}

export enum ToggleConfigure {
  Toggle = "toggle",
  Configure = "configure",
}

export enum AddDel {
  Add = "add",
  Del = "delete",
}

export enum AuthKind {
  Read = "read",
  Write = "write",
}

export enum AuthScope {
  Items = "items",
  Characters = "characters",
}

export function ToBool(v: AuthKind | AuthScope): boolean {
  return v === AuthKind.Write || v === AuthScope.Characters;
}
