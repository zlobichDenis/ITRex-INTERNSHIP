import { Tab } from "./styles";

type CabinetTabProps = {
  text: string,
}

export function CabinetTab ({ text }: CabinetTabProps) {
  return (
    <li>
      <Tab isActive={false}>
        <span>{text}</span>
      </Tab>
    </li>
  );
};

