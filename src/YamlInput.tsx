import React from "react";

import CodeEditor from '@uiw/react-textarea-code-editor';
import { load } from 'js-yaml';

interface Props {
  objSetter: (obj: any) => void;
}

function yamlParse(yaml: string) {
  try {
    return load(yaml);
  } catch (_) {
    return undefined;
  }
}

export default function YamlInput(props: Props): React.JSX.Element {
  const { objSetter } = props;

  const [value, setValue] = React.useState("");
  
  return (
    <CodeEditor
      value={value}
      language="yaml"
      onChange={(event) => {
        const newYamlValue = event.target.value;
        setValue(newYamlValue);
        const obj = yamlParse(newYamlValue);
        objSetter(obj);
      }}
    />
  )
}
