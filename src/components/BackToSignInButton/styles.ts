import styled from 'styled-components';

import { colors } from 'styles';

export const RestoreButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 16px;
  text-decoration: none;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.BLACK};
`;
