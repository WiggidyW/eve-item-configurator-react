import React from "react";
import { Popup, InvalidInput } from "../../Popup";
import YamlSubmit from "./YamlSubmit";
import YamlTextInput from "./YamlText";
import KeySelector from "./KeySelector";

interface Props {
  keys: string[];
  throwPopup: (popup: Popup) => void;
  setJson: (key: string, value: string) => void;
}

const ItemConfigureInput = (props: Props): React.ReactElement => {
  const { keys, throwPopup, setJson } = props;

  const key = React.useRef<string | null>(null);

  const [obj, setObj] = React.useState<any>(undefined);

  const validateObj = (obj: any) => obj !== undefined;

  const submit = () => {
    if (key.current === null) throwPopup(InvalidInput("No key selected"));
    else if (obj === undefined) throwPopup(InvalidInput("Entry not valid"));
    else setJson(key.current, obj);
  };

  return (
    <>
      <div className={"cfg-input-button"}>
        <KeySelector
          keys={keys}
          setKey={(newKey: string | null) => (key.current = newKey)}
        />
      </div>
      <div className={"cfg-input-spacer"} />
      <div className={"cfg-input-button"}>
        <YamlSubmit obj={obj} validateObj={validateObj} onClick={submit} />
      </div>
      <div className={"cfg-input-spacer"} />
      <YamlTextInput setObj={setObj} />
    </>
  );
};

export default ItemConfigureInput;
