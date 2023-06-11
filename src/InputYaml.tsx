import React from "react";

import { prettifyObj } from "./JsonUtil";
import { JsonObject, JsonString, YamlString } from "./TypeUtil";

import CodeEditor from '@uiw/react-textarea-code-editor';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { load } from 'js-yaml';

export interface Props {
  jsonSetter: (key: string, value: JsonObject) => void;
  jsonKeys: string[];
}

export default function InputYaml(props: Props): React.JSX.Element {
  const { jsonSetter, jsonKeys/*, ...other*/ } = props;
  const [yamlValue, setYamlValue] = React.useState("");
  const [jsonValue, setJsonValue] = React.useState("");
  const [keyValue, setKeyValue] = React.useState("");
  return (
    <>
      <Autocomplete
        freeSolo={true}
        options={jsonKeys}
        onInputChange={(_, value) => setKeyValue(value)}
        renderInput={(params) => (
          <TextField
            {...params}
          />
        )}
      />
      <CodeEditor
        value={yamlValue}
        language="yaml"
        onChange={(event) => {
          const newYamlValue = event.target.value;
          setYamlValue(newYamlValue);
          const obj = yamlParse(newYamlValue);
          if (obj !== null) {
            setJsonValue(prettifyObj(obj));
          }
        }}
      />
      <Button
        onClick={() => {
          if (keyValue !== "") {
            const obj = yamlParse(yamlValue);
            if (obj !== null) {
              jsonSetter(keyValue, obj);
            } else {
              throw new Error("yamlValue is not valid yaml");
            }
          } else {
            throw new Error("keyValue is empty");
          }
        }}
      >
        {"Submit"}
      </Button>
    </>
  )
}

function yamlParse(yaml: string) {
  try {
    return load(yaml) ?? null;
  } catch (_) {
    return null;
  }
}

interface YamlEditorProps {
  yamlValue: YamlString;
  jsonValue: JsonString;
  yamlSetter: (value: YamlString) => void;
  jsonSetter: (value: JsonString) => void;
}

function YamlEditor(props: YamlEditorProps): React.JSX.Element {
  const { yamlValue, jsonValue, yamlSetter, jsonSetter } = props;
  return (
    <div style={{
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
      <CodeEditor
        style={{
          width: '100%',
          height: '100%',
          overflowX: 'auto',
          overflowY: 'auto',
        }}
        value={yamlValue}
        language={"yaml"}
        onChange={(event) => {
          const newYamlValue = event.target.value;
          yamlSetter(newYamlValue);
          if (newYamlValue === "") {
            jsonSetter("");
          } else {
            const obj = yamlParse(newYamlValue);
            if (obj !== null) {
              jsonSetter(prettifyObj(obj));
            }
          }
        }}
      />
      <CodeEditor
        style={{
          width: "100%",
          height: "100%",
          overflowX: "auto",
          overflowY: "auto",
        }}
        value={jsonValue}
        language="json"
        readOnly={true}
      />
    </div>
  );
}
