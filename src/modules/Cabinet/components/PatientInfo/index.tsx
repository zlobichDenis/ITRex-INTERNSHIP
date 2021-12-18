import { PatientCabinetRouter } from "routes";
import { PatientTabs } from "..";
import { CabinetInfo } from "../../styles";


export function PatientInfo () {
  return (
    <>
      <PatientTabs />
      <CabinetInfo role="patient-tabs">
        <PatientCabinetRouter />
      </CabinetInfo>
    </>
  );
}
