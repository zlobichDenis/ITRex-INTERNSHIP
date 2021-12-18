import { MouseEventHandler } from "react";

import { LogoSvg } from "assets";
import { UserProfile } from "types";
import {
  Header,
  UserInfo,
  UserName,
  UserSpecialty,
  UserNameWrapper,
  Logo
} from "./styles";

type CabinetHeaderProps = {
  handleClick: MouseEventHandler,
  userProfile: UserProfile,
}

export function CabinetHeader({ handleClick, userProfile}: CabinetHeaderProps) {
  const {
    first_name: firstName,
    last_name: lastName,
    photo,
    role_name: roleName
  } = userProfile;

  return (
    <Header>
      <Logo onClick={handleClick} src={LogoSvg} alt=""/>
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
