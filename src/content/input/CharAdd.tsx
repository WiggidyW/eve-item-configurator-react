import React from "react";
import { Popup, InvalidInput } from "../../Popup";
import YamlSubmit from "./YamlSubmit";
import YamlInput from "./YamlText";

interface Props {
  throwPopup: (popup: Popup) => void;
  addCharacters: (chars: string[]) => void;
}

const CharAddInput = (props: Props): React.ReactElement => {
  const { throwPopup, addCharacters } = props;

  const [obj, setObj] = React.useState<any>(undefined);

  const validObj = (_: any) => true;

  const throwInvalidInput = () =>
    throwPopup(
      InvalidInput(
        "Entry must be either a character or a list of characters.\n" +
          "A list can be either newline-separated (starting with - per line)\n" +
          "or comma-separated (starting with [ and ending with ])\n" +
          "Lists must also surround characters with quotes (\" or ')"
      )
    );

  // Returns the object as a string, or undefined if invalid
  const parseObj = (obj: any): string | undefined => {
    if (typeof obj === "string" && obj.length > 0) return obj;
    else if (["number", "boolean"].includes(typeof obj)) return obj.toString();
  };

  // Returns the object as a list of strings, empty if invalid
  const parseObjList = (obj: any): string[] => {
    if (Array.isArray(obj))
      return obj.reduce((list: string[], row: any, idx: number) => {
        const char = parseObj(row);
        if (char !== undefined) list[idx] = char;
        return list;
      }, new Array<string>(obj.length));
    else {
      const char = parseObj(obj);
      if (char !== undefined) return [char];
      else return [];
    }
  };

  const submit = () => {
    const chars = parseObjList(obj);
    if (chars.length > 0) addCharacters(chars);
    else throwInvalidInput();
  };

  return (
    <>
      <div className={"cfg-input-button"}>
        <YamlSubmit obj={obj} validateObj={validObj} onClick={submit} />
      </div>
      <div className={"cfg-input-spacer"} />
      <YamlInput setObj={setObj} />
    </>
  );
};

export default CharAddInput;
