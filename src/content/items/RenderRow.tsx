// import React from "react";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

// const ITEM_IMG_URL_1 = "https://images.evetech.net/types/";
// const ITEM_IMG_URL_2 = "/icon?size=";

export function renderName(name: string, _: number) {
  return (
    <div className="ItemName">
      {/* <img
        src={ITEM_IMG_URL_1 + typeId + ITEM_IMG_URL_2 + 32}
        alt={typeId.toString()}
        width={32}
        height={32}
      /> */}
      {name}
    </div>
  );
}

export function renderCategory(category: string) {
  return <div className="ItemCategory">{category}</div>;
}

export function renderGroup(group: string) {
  return <div className="ItemGroup">{group}</div>;
}

export function renderMarketGroup(marketGroup: string) {
  return <div className="ItemMarketGroup">{marketGroup}</div>;
}

export function renderEnabled(enabled: boolean) {
  return (
    <div className="ItemEnabled">
      {enabled ? (
        <CheckIcon htmlColor="green" />
      ) : (
        <CloseIcon htmlColor="red" />
      )}
    </div>
  );
}

export function renderJson(json: string) {
  return <div className="ItemJson">{json}</div>;
}
