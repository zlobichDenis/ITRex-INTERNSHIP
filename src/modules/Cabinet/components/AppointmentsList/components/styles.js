import styled from "styled-components";
import { DividerSvg } from "assets";

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