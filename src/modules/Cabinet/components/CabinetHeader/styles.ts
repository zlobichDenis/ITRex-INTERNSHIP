import styled from "styled-components";

import { colors } from "styles";

export const Header = styled.div`
    display: flex;
    width: 95%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    background-color: transparent;

    @media (min-width: 1920px) {
        width: 95%;
    }

    @media (min-width: 768px) and (max-width: 1919px) {
        width: 90%;
        background-color: transparent;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`;

export const UserName = styled.span`
    display: block;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    color: ${colors.TEXT_TITLE_COLOR};
    
    @media (min-width: 321px) and (max-width: 768px) {
        display: none;
    }
`;

export const UserSpecialty = styled.span`
    display: block;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: ${colors.TEXT_COLOR};

    @media (min-width: 321px) and (max-width: 768px) {
        display: none;
    }
`;

export const UserNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`