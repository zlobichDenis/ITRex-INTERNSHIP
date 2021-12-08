import styled from "styled-components";

import { typography } from "styles";

export const ControlPanel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    width: 90%;
    ${typography.H1};

    @media (min-width: 1920px) {
        width: 100%;
    }
`;
