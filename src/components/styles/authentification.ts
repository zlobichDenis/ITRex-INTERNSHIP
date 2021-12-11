import styled from 'styled-components';

import { colors, borders } from 'styles';

export const InputField = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    border-radius: 7px;
    border: ${borders.INPUT_BORDER};
    background: ${colors.WHITE};

    :hover {
        border: ${borders.INPUT_BORDER_HOVER};
    }

    @media (min-width:768px) {
        gap: 16px;
        height: 56px;
    }
`;

type InputIconProps = {
    isShowingPass: boolean,
}
