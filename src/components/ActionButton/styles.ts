import styled from 'styled-components';

import { colors, typography } from 'styles';

type ButtonWrapperProps = {
  position?: string,
}

type ButtonProps = {
  isDisabled: boolean,
  padding: string,
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  justify-content: ${({ position }) => position};
  align-self: flex-start;
  width: 100%;

  @media (min-width: 321px) and (max-width: 768px) {

  }
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
  height: 56px;
  padding: ${({ padding }) => padding};
  border-radius: 8px;
  ${typography.BOLD_TEXT}
  background: ${({ isDisabled }): string =>
    isDisabled ? colors.BLUE : colors.GREY_SOLID};
  border: transparent;
  color: white;
  text-decoration: none;
`;
