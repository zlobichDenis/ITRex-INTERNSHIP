import styled from "styled-components"
import { colors } from "styles";

export const ButtonWrapper = styled.div`
    display: flex;
    align-self: flex-start;
    width: 100%;

    @media (min-width: 321px) and (max-width: 768px) {
        display: ${({ itsUserPatient }) => itsUserPatient ? "none" : "flex"};
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 8px;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    background: ${colors.ACTION_BUTTON_COLOR};
    border: transparent;
    color: white;
    text-decoration: none;
`;