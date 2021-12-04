import { useAppSelector } from "store";
import { UserRoles } from "const";
import { PatientCabinetRouter } from "routes";
import { DoctorInfo } from "./components";
import { CabinetContentWrapper } from "./styles";


export const UserCabinet = () => {
    const { role_name: roleName } = useAppSelector(state => state.user.userProfile);

    return (
        <CabinetContentWrapper>
            {roleName === UserRoles.PATIENT
                ? <PatientCabinetRouter />
                : <DoctorInfo />}
        </CabinetContentWrapper>
    )
};

