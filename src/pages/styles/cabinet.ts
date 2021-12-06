import styled from "styled-components";

import { colors } from "styles";

export const CabinetSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: ${colors.GREY_SOLID};

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
    height: 100%;
`;