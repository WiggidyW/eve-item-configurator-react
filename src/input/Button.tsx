import { Button } from "@mui/material";

const HeaderButton = (props: {
  text: string;
  onClick: React.MutableRefObject<() => void>;
}): React.ReactElement => {
  const { text, onClick } = props;
  return (
    <Button
      sx={{ width: "100%", height: "100%" }}
      variant="outlined"
      onClick={() => onClick.current()}
    >
      {text}
    </Button>
  );
};

const FullButton = (props: {
  text: string;
  onClick: () => void;
}): React.ReactElement => {
  const { text, onClick } = props;
  return (
    <Button
      sx={{ width: "100%", height: "100%" }}
      variant="outlined"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export { HeaderButton, FullButton };
