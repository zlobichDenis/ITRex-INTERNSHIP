import styled from 'styled-components';

import { colors } from 'styles';

type ModalContainerProps = {
  isDisplay: boolean,
}

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  z-index: 998;
  top: 0;
  right: 0;
  display: ${({ isDisplay }) => isDisplay ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.BLACK_ALPHA_025};
`;


