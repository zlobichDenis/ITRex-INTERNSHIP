import styled from "styled-components";

import { colors } from "styles";

export const Tittle = styled.h3`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${colors.TEXT_TITLE_COLOR};
  font-family: "Poppins";
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

export const InputText = styled.input`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 17px;
  line-height: 140%;
  border: none;
  background-color: transparent;
  width: 100%;
  color: ${colors.TEXT_COLOR};

  &:focus {
    outline: none;
  }
`;

export const OrdinaryText = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  letter-spacing: -0.24px;
  color: ${colors.TEXT_COLOR};
`;
