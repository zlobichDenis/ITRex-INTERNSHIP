import styled from 'styled-components';

import { colors } from 'styles';
import { FetchStatus } from 'const';

type NotificationWrapperProps = {
  isShowing: boolean,
  fetchStatus: string,
}

export const NotificationWrapper = styled.div<NotificationWrapperProps>`
  position: absolute;
  left: 32px;
  bottom: 32px;
  display: ${({ isShowing }) => (isShowing ? 'block' : 'none')};
  width: 457px;
  background-color: ${({ fetchStatus }) => fetchStatus === FetchStatus.SUCCESS ? colors.GREEN : colors.RED};
  border-radius: 12px;
`;

export const NotificationContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  padding: 32px 24px;
`;

export const NotificationText = styled.p`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NotificationTextTittle = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: ${colors.WHITE};
`;

export const NotificationMessage = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: ${colors.WHITE};
`;

export const CloseButton = styled.button`
  display: flex;
`;
