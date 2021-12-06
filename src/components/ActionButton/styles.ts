import styled from "styled-components";
import { colors } from "styles";

type ButtonWrapperProps = {
  itsUserView: boolean,
  itsUserPatient: boolean,
} 

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  justify-content: ${({ itsUserView }) =>
    itsUserView ? "flex-end" : "flex-start"};
  align-self: flex-start;
  width: 100%;

  @media (min-width: 321px) and (max-width: 768px) {
    display: ${({ itsUserPatient }) => (itsUserPatient ? "none" : "flex")};
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
  font-family: "Poppins";
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  background: ${({ isDisabled }) =>
    isDisabled ? colors.BLUE : colors.GREY_SOLID};
  border: transparent;
  color: white;
  text-decoration: none;
`;
