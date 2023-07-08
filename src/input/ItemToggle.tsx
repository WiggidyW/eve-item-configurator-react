import React from "react";
import Button from "@mui/material/Button";

interface Props {
  setEnabled: (enabled: boolean) => void;
}

export default function ItemToggleInput(props: Props): React.ReactElement {
  const { setEnabled } = props;

  return (
    <>
      <div className={"cfg-input-divider top"}>
        <div className={"cfg-input-button-divided"}>
          <Button
            sx={{ width: "100%", height: "100%" }}
            variant="outlined"
            onClick={() => setEnabled(true)}
          >
            {"Enable"}
          </Button>
        </div>
      </div>
      <div className={"cfg-input-spacer"} />
      <div className={"cfg-input-divider bottom"}>
        <div className={"cfg-input-button-divided"}>
          <Button
            sx={{ width: "100%", height: "100%" }}
            variant="outlined"
            onClick={() => setEnabled(false)}
          >
            {"Disable"}
          </Button>
        </div>
      </div>
    </>
  );
}
