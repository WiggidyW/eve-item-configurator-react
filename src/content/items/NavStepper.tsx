import React from "react";
import NavPath, { NavStep, NavPathBuilder, BusinessStepStr } from "../NavPath";
import Selector from "../../input/Selector";

interface Props {
  businesses: string[];
  setNavPath: (v: NavPath) => void;
  onCancelRef: React.MutableRefObject<() => void>;
}

export default function NavStepper(props: Props): React.ReactElement {
  const { businesses, setNavPath, onCancelRef } = props;

  const [navPathBuilder, setNavPathBuilder] = React.useState<NavPathBuilder>();

  onCancelRef.current = () => setNavPathBuilder(undefined);

  let description: string;
  let label: string;
  let choices: string[];
  let onSelect: (s: string) => void;

  // If undefined, then we need to get the business and initialize the builder.
  if (navPathBuilder === undefined) {
    description = BusinessStepStr;
    [label, choices] = ["Business", businesses];
    // Auto-select the next step as well (item/character? => item)
    onSelect = (business: string) =>
      setNavPathBuilder(new NavPathBuilder(business).addStep(true));

    // Otherwise, determine which step we're on and what the choices are.
  } else {
    const nextStep = navPathBuilder.nextStep();
    description = nextStep[0];
    const step = nextStep[1];

    // These are the final steps, so we finish navigation here.
    if (step === NavStep.AddOrDel || step === NavStep.ConfigureOrToggle) {
      if (step === NavStep.AddOrDel) {
        [label, choices] = ["Add / Delete", ["Add", "Delete"]];
      } /* if (step === NavStep.ConfigureOrToggle) */ else {
        [label, choices] = ["Configure / Toggle", ["Configure", "Toggle"]];
      }

      // The callback will update the parent component's navPath.
      onSelect = (choice: string) =>
        setNavPath(
          navPathBuilder.addStep(choice === choices[0]).finish() as NavPath
        );

      // TODO: Swap Final Steps and Intermediate Steps, to have a better flow of logic.
    } else {
      // These are the intermediate steps, so we continue navigation here.
      if (step === NavStep.ItemOrChar) {
        [label, choices] = ["Items / Characters", ["Item", "Character"]];
      } /* if (step === NavStep.ReadOrWrite) */ else {
        [label, choices] = ["Read / Write", ["Read", "Write"]];
      }

      // Done will never be reached from here, so we don't need to handle it.

      // The callback will update the builder.
      onSelect = (choice: string) =>
        setNavPathBuilder(navPathBuilder.addStep(choice === choices[0]));
    }
  }

  return (
    <div className={"default flexcol"}>
      <div className={"nav-parent"}>
        <div className={"nav-description"}>{description}</div>
        <div className={"nav-spacer"} />
        <div className={"nav-selector"}>
          <Selector label={label} choices={choices} onSelect={onSelect} />
        </div>
      </div>
      <div className={"nav-spacer-footer"} />
    </div>
  );
}
