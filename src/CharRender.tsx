import React from "react";

export function renderName(name: string): React.ReactElement {
  return (
    <div className="CharName">
      {name}
    </div>
  );
}
