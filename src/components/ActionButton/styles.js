import styled from "styled-components"
import { colors } from "styles";

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: ${({ itsUserView }) => itsUserView ? "flex-end" : "flex-start"};
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
    padding: 16px 40px;
    border-radius: 8px;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    background: ${({ isDisabled }) => isDisabled ?colors.ACTION_BUTTON_COLOR : colors.DISABLED_BUTTON};
    border: transparent;
    color: white;
    text-decoration: none;
`;