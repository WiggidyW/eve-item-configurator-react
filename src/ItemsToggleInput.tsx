import React from "react";

import Button from '@mui/material/Button';

interface Props {
  enabledSetter: (enabled: boolean) => void;
}

export default function ItemsConfigureInput(props: Props): React.ReactElement {
  const { enabledSetter } = props;

  return (
    <div style={{
    }}>
      <Button
        variant="outlined"
        onClick={() => enabledSetter(true)}
      >
        {"Enable"}
      </Button>
      <div style={{}}/>
      <Button
        variant="outlined"
        onClick={() => enabledSetter(false)}
      >
        {"Disable"}
      </Button>
    </div>
  );
}
