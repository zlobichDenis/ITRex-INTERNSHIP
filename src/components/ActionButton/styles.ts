import styled from 'styled-components';

import { colors, typography } from 'styles';

type ButtonWrapperProps = {
  itsUserView: boolean,
  itsUserPatient: boolean,
} 

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  justify-content: ${({ itsUserView }): string =>
    itsUserView ? 'flex-end' : 'flex-start'};
  align-self: flex-start;
  width: 100%;

  @media (min-width: 321px) and (max-width: 768px) {
    display: ${({ itsUserPatient }): string => (itsUserPatient ? 'none' : 'flex')};
  }
`;

type ButtonProps = {
  isDisabled: boolean,
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
  padding: 16px 40px;
  border-radius: 8px;
  ${typography.BOLD_TEXT}
  background: ${({ isDisabled }): string =>
    isDisabled ? colors.BLUE : colors.GREY_SOLID};
  border: transparent;
  color: white;
  text-decoration: none;
`;
