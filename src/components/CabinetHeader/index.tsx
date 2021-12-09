import { useAppSelector } from "store";
import {
  Header,
  UserInfo,
  UserName,
  UserSpecialty,
  UserNameWrapper,
} from "./styles";
import { getUserProfile } from "modules/AuthentificationForm/redux";

export function CabinetHeader() {
  const {
    first_name: firstName,
    last_name: lastName,
    photo,
    role_name: roleName
  } = useAppSelector(getUserProfile);

  return (
    <Header>
      <img src="./img/logo.png" alt=""/>
      <UserInfo>
        <UserNameWrapper>
          <UserName className="doctor-cabinet__doctor-name">
            {`${firstName} ${lastName}`}
          </UserName>
          <UserSpecialty className="doctor-cabinet__doctor-specialty">
            {roleName}
          </UserSpecialty>
        </UserNameWrapper>
        <img width="48" height="48" src={photo ? photo : ''} alt="DoctorAppointment's"/>
      </UserInfo>
    </Header>
  );
};
