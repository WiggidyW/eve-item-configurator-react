import React from "react";

import Button from '@mui/material/Button';

interface Props {
  delCharacters: () => void;
}

export default function CharDelInput(props: Props): React.ReactElement {
  const { delCharacters } = props;

  return (
    <div className={'cfg-input-button'}>
      <Button
        sx={{ width: '100%', height: '100%' }}
        variant="outlined"
        onClick={delCharacters}
      >
        {"Delete"}
      </Button>
    </div>
  );
}
