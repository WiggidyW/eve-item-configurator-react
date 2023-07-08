import React from "react";
import { prettifyObj } from "../JsonUtil";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

interface Props {
  obj: any;
  validateObj: (obj: any) => boolean;
  onClick: () => void;
}

export default function YamlSubmitButton(props: Props): React.JSX.Element {
  const { obj, onClick, validateObj } = props;

  const value = (() => {
    if (validateObj(obj)) {
      try {
        return prettifyObj(obj);
      } catch (_) {}
    }
    return "Invalid Input";
  })();

  return (
    <Tooltip
      title={<CodeEditor value={value} language="json" readOnly={true} />}
      placement={"right"}
    >
      <Button
        sx={{ width: "100%", height: "100%" }}
        variant="outlined"
        onClick={onClick}
      >
        {"Submit"}
      </Button>
    </Tooltip>
  );
}
