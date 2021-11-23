import React from "react";
import { useSelector } from "react-redux";

import {
  Header,
  UserInfo,
  UserName,
  UserSpecialty,
  UserNameWrapper,
} from "./styles";

export const CabinetHeader = () => {
  const { first_name: firstName, last_name: lastName, photo, role_name: roleName } = useSelector(state => state.user);
  return (
    <Header>
      <img src="./img/logo.png" alt="" />
      <UserInfo>
        <UserNameWrapper>
          <UserName className="doctor-cabinet__doctor-name">
            {`${firstName} ${lastName}`}
          </UserName>
          <UserSpecialty className="doctor-cabinet__doctor-specialty">
            {roleName}
          </UserSpecialty>
        </UserNameWrapper>
        <img width="48" height="48" src={photo} alt="Doctor's photo" />
      </UserInfo>
    </Header>
  );
};
