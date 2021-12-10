import { DoctorCabinetRouter } from "routes";
import { DoctorTabs } from "../../features";
import { CabinetInfo } from "../../styles";

export function DoctorInfo () {
  return (
    <>
      <DoctorTabs />
      <CabinetInfo>
        <DoctorCabinetRouter />
      </CabinetInfo>
    </>
  );
}
