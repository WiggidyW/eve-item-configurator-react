import React from "react";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export interface Props {
  enabledSetter: (value: boolean) => void;
  // [other: string]: any;
}

export default function InputEnabler(props: Props): React.JSX.Element {
  const { enabledSetter/*, ...other*/ } = props;
  return (
    <ButtonGroup
      variant="contained"
      aria-label="outlined primary button group"
    >
      <Button
        onClick={() => enabledSetter(true)}
      >
        {"Enable"}
      </Button>
      <Button
        onClick={() => enabledSetter(false)}
      >
        {"Disable"}
      </Button>
    </ButtonGroup>
  );
}
