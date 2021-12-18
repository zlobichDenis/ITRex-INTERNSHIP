import styled from 'styled-components';
import { DividerSvg } from 'assets';

import { typography, colors } from "styles";

export const AppointmentsItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 24px;
  width: 80vw;
  height: 264px;
  background-color: ${colors.WHITE};
  border-radius: 12px;

  @media (min-width: 1920px) {
    gap: 24px;
    padding: 24px 32px;
    width: 20vw;
  }

  @media (min-width: 1024px) and (max-width: 1919px) {
    width: 30vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 32px 34px;
    width: 60vw;
  }
`;

export const AppointmentsItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const UserName = styled.span`
  ${typography.BOLD_TEXT};
  font-size: 17px;
`;

export const SpecializationName = styled.span`
  ${typography.ORDINARY_TEXT};
  color: ${colors.GREY_MEDIUM};
`;

export const UserItemDivider = styled.div`
  align-self: center;
  width: 100%;
  height: 1px;
  background-image: url(${DividerSvg});
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 23px;

  @media (min-width: 1920px) {
    justify-content: center;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const VisitDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  ${typography.BOLD_TEXT}
`;

export const VisitMessage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  height: 70px;
  ${typography.ORDINARY_TEXT};
  font-size: 15px;
`;

export const VisitMessageIcon = styled.div`
  padding-left: 2px;
`;

export const VisitMessageText = styled.span`
  word-break: break-all;
`;

export const VisitReason = styled.span`
  overflow: auto;
`;
