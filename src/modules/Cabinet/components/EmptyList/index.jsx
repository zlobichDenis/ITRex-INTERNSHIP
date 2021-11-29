import React from "react";

import { EmptyListSvg } from "assets";
import { EmptyListContainer, TittleWrapper, EmptyListContent, EmptyListMessage } from "./styles";

export const EmptyList = () => {
  return (
    <EmptyListContainer>
      {/* <TittleWrapper>
        <h3>My Patients</h3>
      </TittleWrapper> */}
        <EmptyListContent>
          <img src={EmptyListSvg} alt="icon" />
          <EmptyListMessage>
            You have no patients yet.
            <br /> To create a patient profile, please contact your
            administrator.
          </EmptyListMessage>
        </EmptyListContent>
    </EmptyListContainer>
  );
};
