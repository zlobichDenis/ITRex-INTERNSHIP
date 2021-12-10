import { Tittle } from "elements";
import { SortSelect } from "modules/Cabinet/components";
import { InputsWrapper, ControlPanel } from "./styles";

export function DoctorControlPanel() {
  return (
    <ControlPanel>
      <Tittle>My Patients</Tittle>
      <InputsWrapper>
        <SortSelect />
      </InputsWrapper>
    </ControlPanel>
  );
}
