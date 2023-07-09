import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { ReactElement, useState } from "react";

const Selector = (props: {
  label: string;
  choices: string[];
  onSelect: (s: string) => void;
  required?: boolean;
  displayChoice?: boolean;
  tooltip?: string;
  error?: boolean;
}): ReactElement => {
  const { label, choices, onSelect, required, tooltip, displayChoice, error } =
    props;
  const [value, setValue] = useState<string>("");
  const Container = (props: { children: ReactElement }) => {
    const { children } = props;
    if (tooltip === undefined) return <>{children}</>;
    return (
      <Tooltip title={<div className="tooltip">{tooltip}</div>} placement="top">
        {children}
      </Tooltip>
    );
  };
  return (
    <Container>
      <FormControl
        required={required}
        error={error}
        sx={{ width: "100%", height: "100%" }}
      >
        <InputLabel id="select-label">{label}</InputLabel>
        <Select
          sx={{ width: "100%", height: "100%" }}
          label={label}
          value={value}
          onChange={(event: SelectChangeEvent) => {
            if (displayChoice) setValue(event.target.value);
            onSelect(event.target.value);
          }}
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
