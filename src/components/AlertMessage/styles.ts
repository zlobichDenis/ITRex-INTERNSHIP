import styled from 'styled-components';

import { colors } from 'styles';
import { OrdinaryText } from 'elements';

export const AlertMessageText = styled(OrdinaryText)`
    position: absolute;
    font-size: 15px;
    color: ${colors.RED};
`;