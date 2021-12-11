import { CabinetHeader } from "components";
import { UserCabinet } from "modules";
import { CabinetSection, Cabinet } from "../styles";

export function PatientView () {
  return (
    <CabinetSection>
      <Cabinet>
        <CabinetHeader />
        <UserCabinet />
      </Cabinet>
    </CabinetSection>
  );
}
