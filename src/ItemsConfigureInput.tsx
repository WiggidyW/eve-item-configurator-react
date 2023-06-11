import React from "react";

import Popup from "./Popup";
import KeyInput from "./KeyInput";
import YamlInput from "./YamlInput";
import YamlSubmit from "./YamlSubmit";

interface Props {
  keys: string[];
  throwPopup: (popup: Popup) => void;
  jsonSetter: (key: string, value: string) => void;
}

export default function ItemsConfigureInput(props: Props): React.ReactElement {
  const { keys, throwPopup, jsonSetter } = props;

  const key = React.useRef<string | null>(null);

  const [obj, setObj] = React.useState<any>(undefined);
  
  const objValidator = (obj: any) => obj !== undefined;

  const submit = () => {
    if (key.current === null) {
      throwPopup({
        message: "No key selected",
        ok: false,
      });
    } else if (obj === undefined) {
      throwPopup({
        message: "Invalid Input",
        ok: false,
      });
    } else {
      jsonSetter(key.current, JSON.stringify(obj));
    }
  };

  return (
    <div style={{
    }}>
      <KeyInput
        keys={keys}
        keySetter={(newKey: string | null) => key.current = newKey}
      />
      <div style={{}}/>
      <YamlSubmit
        obj={obj}
        objValidator={objValidator}
        onClick={submit}
      />
      <div style={{}}/>
      <YamlInput
        objSetter={setObj}
      />
    </div>
  );
}
