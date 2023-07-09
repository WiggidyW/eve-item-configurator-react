import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { HeaderButton } from "./input/Button";

interface Props {
  onCancelRef: React.MutableRefObject<() => void>;
  onSaveRef: React.MutableRefObject<() => void>;
  langRef: React.MutableRefObject<string>;
  charName: string;
  langs: string[]; // First is default.
  charId: number;
}

const Header = (props: Props): React.ReactElement => {
  const { onCancelRef, onSaveRef, langRef, charName, charId, langs } = props;
  return (
    <>
      <div className={"default"}>
        <div className={"default header-item"}>
          <LangSelector
            langs={langs}
            setLang={(lang) => (langRef.current = lang)}
          />
        </div>
      </div>
      <div className={"default"}>
        <div className={"default header-item"}>
          <HeaderButton text={"Cancel"} onClick={onCancelRef} />
        </div>
      </div>
      <div className={"default"}>
        <div className={"default header-item"}>
          <HeaderButton text={"Save"} onClick={onSaveRef} />
        </div>
      </div>
      <div className={"default"}>
        <Char charName={charName} charId={charId} />
      </div>
    </>
  );
};

interface LangSelectorProps {
  langs: string[]; // First is default.
  setLang: (lang: string) => void;
}

const LangSelector = (props: LangSelectorProps): React.ReactElement => {
  const { langs, setLang } = props;

  const [value, setValue] = React.useState(langs[0]);

  return (
    <Select
      sx={{ width: "100%", height: "100%" }}
      value={value}
      onChange={(event: SelectChangeEvent) => {
        const lang = event.target.value;
        setValue(lang);
        setLang(lang);
      }}
    >
      {langs.map((lang) => (
        <MenuItem value={lang} key={lang}>
          {lang}
        </MenuItem>
      ))}
    </Select>
  );
};

interface CharProps {
  charName: string;
  charId: number;
}

const Char = (props: CharProps): React.ReactElement => {
  const { charName, charId } = props;

  return (
    <>
      <div className={"character-img"}>
        <img
          className={"character"}
          src={`https://images.evetech.net/characters/${charId}/portrait?size=128`}
        />
      </div>
      <div className={"char-spacer"} />
      <div className={"char-name"}>{charName}</div>
    </>
  );
};

export default Header;
