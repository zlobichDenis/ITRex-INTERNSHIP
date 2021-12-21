import styled from "styled-components";

import { typography, colors } from "styles";

export const PageNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 100vh;
  width: 100%;
  text-align: center;
  ${typography.INPUT_TEXT};
  color: ${colors.GREY_MEDIUM};
`;