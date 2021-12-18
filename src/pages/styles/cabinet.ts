import styled from 'styled-components';

import { colors } from 'styles';

export const CabinetSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${colors.GREY_SOLID};
  overflow: auto;

  @media (min-width: 768px) and (max-width: 1919px) {
    z-index: 1;
    align-items: center;
  }

  @media (min-width: 1920px) {
    align-items: center;
  }
`;

export const Cabinet = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;  
  height: 100vh;
`;