import styled from "styled-components";

import { colors, typography } from "styles";

type AppointmentMenuListProps = {
  isDisplay: boolean,
}

export const AppointmentOptions = styled.button`
  width: 24px;
`;

export const AppointmentMenuList = styled.ul<AppointmentMenuListProps>`
  position: absolute;
  top: 80px;
  right: 50px;
  display: ${({ isDisplay }) => isDisplay ? "flex" : 'none'};
  flex-direction: column;
  width: 272px;
  padding: 6px;
  background-color: white;
`;

export const AppointmentMenuListItem = styled.li`
  padding: 10px 20px;
  color: ${colors.BLACK};
  ${typography.NORMAL_TEXT}
  cursor: pointer;

  &:hover {
    background-color: ${colors.GREY_LIGHT};
  }
`;
