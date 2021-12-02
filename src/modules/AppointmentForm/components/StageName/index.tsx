import { OrdinaryText } from "elements";
import { StageTittle } from "./styles";

type StageNameProps = {
  icon: string,
  text: string,
}

export const StageName = ({ icon, text }:StageNameProps) => {
  return (
    <StageTittle >
      <img width="32" height="32" src={icon} alt="step-2" />
      <OrdinaryText>{text}</OrdinaryText>
    </StageTittle>
  )
};
