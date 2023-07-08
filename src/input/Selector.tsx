import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { ReactElement, ReactNode } from "react";

const Selector = (props: {
  label: string;
  choices: string[];
  onSelect: (s: string) => void;
  required?: boolean;
  tooltip?: string;
}): ReactElement => {
  const { label, choices, onSelect, required, tooltip } = props;
  const Container = (props: { children: ReactElement }) => {
    const { children } = props;
    if (tooltip === undefined) return <>{children}</>;
    return (
      <Tooltip title={tooltip} placement="top">
        {children}
      </Tooltip>
    );
  };
  return (
    <Container>
      <FormControl required={required} sx={{ width: "100%", height: "100%" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          sx={{ width: "100%", height: "100%" }}
          label={label}
          value={""}
          onChange={(event: SelectChangeEvent) => onSelect(event.target.value)}
        >
          {choices.map((choice, index) => (
            <MenuItem value={choice} key={index}>
              {choice}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default Selector;
