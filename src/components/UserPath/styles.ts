import styled from 'styled-components';

import { colors } from 'styles';

type UserPathLinkProps = {
  isActive?: boolean;
};

export const UserPathWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const UserPathLink = styled.a<UserPathLinkProps>`
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  color: ${({ isActive }): string =>
    isActive ? colors.GREY_MEDIUM : colors.BLUE};
  cursor: pointer;
`;
