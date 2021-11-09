import styled from "styled-components";

import { colors } from "styles";

export const CabinetSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: ${colors.CABINET_BACKGROUND_COLOR};

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

export const CabinetContentWrapper = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    gap: 40px;
    padding: 40px 24px;
    border-radius: 30px;
    background-color: ${colors.CABINET_CONTENT_BACKGROUND_COLOR};
    background-size: cover;

    @media (min-width: 1920px) {
        width: 95%;
        height: 90%;
        gap: 56px;
        padding: 40px 48px;
        border-radius: 30px;
    }
    
    @media (min-width: 768px) and (max-width: 1919px) {
        width: 90%;
        height: 90%;
        gap: 56px;
        padding: 40px 48px;
    }
`;

export const CabinetInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    overflow-y: scroll;

    @media (min-width: 1920px) {
        gap: 32px;
    }
`;