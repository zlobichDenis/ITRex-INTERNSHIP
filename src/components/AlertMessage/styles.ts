import styled from 'styled-components';

import { colors } from 'styles';
import { OrdinaryText } from 'elements';

type AlertMessageTextProps = {
  position?: string,
}

export const AlertMessageText = styled(OrdinaryText)<AlertMessageTextProps>`
  position: ${({ position }) => position};
  font-size: 15px;
  color: ${colors.RED};
`;