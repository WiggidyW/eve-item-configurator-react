import React from "react";

import NavPath, { NavStep, NavPathBuilder, BusinessStepStr } from "./NavPath.js";
import Unreachable from "./Unreachable.js";

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";

interface Props {
  businesses: string[];
  setNavPath: (v: NavPath) => void;
}

export default function NavStepper(props: Props): React.ReactElement {
  const { businesses, setNavPath } = props;

  const [navPathBuilder, setNavPathBuilder] = React.useState<NavPathBuilder>();

  let description: string;
  let label: string;
  let choices: string[];
  let onSelect: (string) => void;

  if (navPathBuilder === undefined) {
    description = BusinessStepStr;
    label = "Business";
    choices = businesses;
    onSelect = (business: string) => (
      setNavPathBuilder(new NavPathBuilder(business))
    );

  } else {
    const nextStep = navPathBuilder.nextStep();
    description = nextStep[0];
    const step = nextStep[1];

    switch (step) {
      case NavStep.ItemOrChar:
        [label, choices] = ["Items / Characters", ["Item", "Character"]];
      case NavStep.ConfigureOrToggle:
        [label, choices] = ["Configure / Toggle", ["Configure", "Toggle"]];
      case NavStep.ReadOrWrite:
        [label, choices] = ["Read / Write", ["Read", "Write"]];
      case NavStep.AddOrDel:
        [label, choices] = ["Add / Delete", ["Add", "Delete"]];
      case NavStep.Done:
        setNavPath(navPathBuilder.finish() ?? Unreachable());
        [label, choices] = ["", []];
    }
    onSelect = (choice: string) => (
      setNavPathBuilder(navPathBuilder.addStep(choice === choices[0]))
    );
  }

  return (
    <div>
      <div>{description}</div>
      <Selector
        label={label}
        choices={choices}
        onSelect={onSelect}
      />
    </div>
  );
}

interface SelectorProps {
  label: string;
  choices: string[];
  onSelect: (string) => void;
}

function Selector(props: SelectorProps): React.ReactElement {
  const { label, choices, onSelect } = props;
  return (
    <Select
      value={''}
      label={label}
      onChange={(event: SelectChangeEvent) => onSelect(event.target.value)}
    >
      {choices.map((choice, index) => (
        <MenuItem
          value={choice}
          key={index}
        >
          {choice}
        </MenuItem>
      ))}
    </Select>
  );
}
