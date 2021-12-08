import styled from 'styled-components';

import { colors, typography } from 'styles';

export const Tittle = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${colors.BLACK};
  ${typography.H1}
`;

export const InputText = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  color: ${colors.GREY_MEDIUM};
  ${typography.INPUT_TEXT};
  
  &:focus {
    outline: none;
  }
`;

export const OrdinaryText = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${colors.GREY_MEDIUM};
  ${typography.ORDINARY_TEXT}
`;
