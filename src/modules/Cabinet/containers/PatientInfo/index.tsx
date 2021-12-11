import { CabinetInfo } from "../../styles";
import { PatientTabs } from "../../features";
import { PatientCabinetRouter } from "routes";

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
