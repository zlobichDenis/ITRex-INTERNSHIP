import React from "react";

import { EmptyListSvg } from "assets";
import { EmptyListContainer, EmptyListContent, EmptyListMessage } from "./styles";

export const EmptyList = () => {
  return (
    <EmptyListContainer data-testid="empty-appointments-list">
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
