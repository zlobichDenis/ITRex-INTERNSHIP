import styled from 'styled-components';

import { colors, typography } from 'styles';

type ButtonWrapperProps = {
  position?: string,
}

type ButtonProps = {
  isDisabled: boolean,
  width: number,
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
  width: ${({ width }) => width}px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
  border-radius: 8px;
  ${typography.BOLD_TEXT}
  background: ${({ isDisabled }): string =>
    isDisabled ? colors.BLUE : colors.GREY_SOLID};
  border: transparent;
  color: white;
  text-decoration: none;
`;
