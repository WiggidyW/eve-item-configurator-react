import React from "react";

import { prettifyObj } from "./JsonUtil.js";

import CodeEditor from '@uiw/react-textarea-code-editor';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

interface Props {
  obj: any;
  objValidator: (obj: any) => boolean;
  onClick: () => void;
}

export default function YamlSubmit(props: Props): React.JSX.Element {
  const { obj, onClick, objValidator } = props;

  const value = (() => {
    if (objValidator(obj)) {
      try {
        return prettifyObj(obj);
      } catch (_) {}
    }
    return "Invalid Input";
  })();
  
  return (
    <Tooltip
      title={
        <CodeEditor
          value={value}
          language="yaml"
          readOnly={true}
        />
      }
      placement={"right"}
    >
      <Button
        variant="outlined"
        onClick={onClick}
      >
        {"Submit"}
      </Button>
    </Tooltip>
  );
}
