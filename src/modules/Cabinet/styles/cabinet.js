import styled from "styled-components";

import { DividerSvg } from "assets";
import { colors } from "styles";


// export const AppointmentsItem = styled.li`
//     display: flex;
//     flex-direction: column;
//     gap: 16px;
//     padding: 16px 24px;
//     width: 85%;
//     background-color: #FFFF;
//     border-radius: 12px;

//     @media (min-width: 1920px) {
//         gap: 24px;
//         padding: 24px 32px;
//         width: 406px;
//     }

//     @media (min-width: 768px) and (max-width: 1919px) {
//         padding: 32px 34px;
//         width: 544px;
//     }
// `;

// export const AppointmentsItemHeader = styled.div`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: nowrap;
//     justify-content: space-between;
// `;



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


