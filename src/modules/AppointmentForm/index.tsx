import { Tittle } from "elements";
import { CabinetInfo } from "modules/Cabinet/styles";
import { UserPath, AppointmentForm } from "./components";

export const AppointmentFormContainer = () => {
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

