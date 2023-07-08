import { Button } from "@mui/material";

const FullButton = (props: {
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

export default FullButton;
