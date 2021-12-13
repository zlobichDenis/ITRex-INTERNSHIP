import { Tittle } from "elements";
import { UserPath } from "components";
import { CabinetInfo } from "modules/Cabinet/styles";
import { AppointmentForm } from "./components";

export function AppointmentFormContainer () {
  return (
    <CabinetInfo >
      <UserPath />
      <Tittle>
        Make an appointment
      </Tittle>
      <AppointmentForm />
    </CabinetInfo>
  )
};

