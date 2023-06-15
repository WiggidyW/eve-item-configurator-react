import React from "react";

import { Box } from "@mui/material";
import CodeEditor from '@uiw/react-textarea-code-editor';
import { load } from 'js-yaml';

interface Props {
  setObj: (obj: any) => void;
}

const yamlParse = (yaml: string): unknown => {
  try {
    return load(yaml);
  } catch (_) {
    return undefined;
  }
}

export default function YamlTextInput(props: Props): React.JSX.Element {
  const { setObj } = props;

  const [value, setValue] = React.useState("");
  
  return (
    <Box sx={{
      height: '100%',
      width: '100%',
      border: 1,
    }}>
      <CodeEditor
        style={{ height: '100%', width: '100%' }}
        value={value}
        language="yaml"
        onChange={(event) => {
          const newYamlValue = event.target.value;
          setValue(newYamlValue);
          const obj = yamlParse(newYamlValue);
          setObj(obj);
        }}
      />
    </Box>
  );
}
