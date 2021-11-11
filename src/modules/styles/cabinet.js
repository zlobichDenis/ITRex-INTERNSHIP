import styled from "styled-components";

import { DividerSvg } from "assets";

export const Tabs = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 24px;

    @media (min-width: 1920px) {
        justify-content: flex-start;
        gap: 56px;
    }

    @media (min-width: 768px) and (max-width: 1919px) {
        justify-content: flex-start;
        gap: 12px;
    }
`;

export const ControlPanel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    width: 90%;
    font-family: Poppins;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    @media (min-width: 1920px) {
        width: 100%;
    }
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    gap: 24px;
`;

export const AppointmentsListWrapper = styled.div`
    overflow-y: scroll;
`;

export const AppointmentsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px 20px;

    @media (min-width: 1920px) {
        flex-direction: row;
        align-self: flex-start;
    }

    @media (min-width: 768px) and (max-width: 1919px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        gap: 20px 20px;
    }
`;

export const AppointmentsItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 24px;
    width: 85%;
    background-color: #FFFF;
    border-radius: 12px;

    @media (min-width: 1920px) {
        gap: 24px;
        padding: 24px 32px;
        width: 406px;
    }

    @media (min-width: 768px) and (max-width: 1919px) {
        padding: 32px 34px;
        width: 544px;
    }
`;

export const AppointmentsItemHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 16px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserName = styled.span`
    font-family: Poppins;
    font-weight: 600;
    font-size: 17px;
    line-height: 130%;
`;

export const AppointmentOptions = styled.button`
    width: 24px;
`;

export const UserItemDivider = styled.div`
    align-self: center;
    width: 100%;
    height: 1px;
    background-image: url(${DividerSvg});
`;

export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 23px;

    @media (min-width: 1920px) {
        justify-content: center;
    }

    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

export const VisitDate = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
`;

export const VisitMessage = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    font-family: Poppins;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
`;

export const VisitMessageIcon = styled.div`
    padding-left: 2px;
`;


