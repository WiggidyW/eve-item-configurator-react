import React from "react";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface Props {
  keys: string[];
  keySetter: (key: string | null) => void;
}

export default function AutocompleteInput(props: Props): React.ReactElement {
  const { keys, keySetter } = props;

  const [value, setValue] = React.useState<string | null>(null);

  return (
    <Autocomplete
      value={value}
      onChange={(_, newValue) => {
        keySetter(newValue);
        setValue(newValue);
      }}
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
