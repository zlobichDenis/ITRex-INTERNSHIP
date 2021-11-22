import React from "react";

import {
  Header,
  UserInfo,
  UserName,
  UserSpecialty,
  UserNameWrapper,
} from "./styles";

export const CabinetHeader = () => {
  return (
    <Header>
      <img src="./img/logo.png" alt="" />
      <UserInfo>
        <UserNameWrapper>
          <UserName className="doctor-cabinet__doctor-name">
            Miranda Nelson
          </UserName>
          <UserSpecialty className="doctor-cabinet__doctor-specialty">
            Doctor
          </UserSpecialty>
        </UserNameWrapper>
        <img src="img/doctor-photo-1.png" alt="Doctor's photo" />
      </UserInfo>
    </Header>
  );
};
