import styled from "styled-components";

import { colors, typography } from "styles";

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
`;

export const TittleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  width: 90%;
  ${typography.H1};
`;

export const EmptyListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  ${typography.NORMAL_TEXT};
`;

export const EmptyListMessage = styled.p`
  text-align: center;
  color: ${colors.GREY_MEDIUM};
`;

