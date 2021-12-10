import { MouseEventHandler } from "react";

import { Tab } from "./styles";

type CabinetTabProps = {
  text: string,
  handleClick?: MouseEventHandler,
}

export function CabinetTab ({ text, handleClick }: CabinetTabProps) {
  return (
    <li>
      <Tab onClick={handleClick} isActive={false}>
        <span>{text}</span>
      </Tab>
    </li>
  );
};

