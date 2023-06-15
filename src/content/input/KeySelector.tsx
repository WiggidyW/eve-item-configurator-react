import React from "react";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface Props {
  keys: string[];
  setKey: (key: string | null) => void;
}

const KeySelector = (props: Props): React.ReactElement => {
  const { keys, setKey } = props;

  const [value, setValue] = React.useState<string | null>(null);

  const onChange = (s: string | null) => {
    const v: string | null = s === '' ? null : s;
    setValue(v);
    setKey(v);
  }

  return (
    <Autocomplete
      sx={{
        '& .MuiFormControl-root': {
          height: "100%",
          marginTop: "0px",
          marginBottom: "0px",
        },
        '& .MuiOutlinedInput-root': {
          height: "100%",
        },
        width: "100%",
        height: "100%",
      }}
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      onInputChange={(_, newValue) => onChange(newValue)}
      freeSolo={true}
      options={keys}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Key"
          variant="outlined" 
        />
      )}
    />
  );
}

export default KeySelector;
