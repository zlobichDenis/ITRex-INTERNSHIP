import styled from "styled-components"

import { colors } from "styles"

export const Tab = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    background-color:${({ isActive }) => (
        isActive
            ? colors.ACTION_BUTTON_COLOR
            : colors.INACTIVE_CABINET_TAB_COLOR
    )};
    color: ${({ isActive }) => (
        isActive
            ? colors.INACTIVE_CABINET_TAB_COLOR
            : colors.ACTION_BUTTON_COLOR
    )};
    border-radius: 8px; 
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
`;