import { Tab } from "./styles";

type CabinetTabProps = {
  text: string,
  isActive: boolean,
}

export function CabinetTab ({ text, isActive }: CabinetTabProps) {
  return (
      <Tab isActive={isActive}>
        <span>{text}</span>
      </Tab>
  );
}

