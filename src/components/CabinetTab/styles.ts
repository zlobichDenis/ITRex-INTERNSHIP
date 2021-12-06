import styled from "styled-components"

import { colors } from "styles"

type TabProps = {
    isActive: boolean,
}

export const Tab = styled.button<TabProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    background-color:${({ isActive }) => (
        isActive
            ? colors.BLUE
            : colors.WHITE
    )};
    color: ${({ isActive }) => (
        isActive
            ? colors.WHITE
            : colors.BLUE
    )};
    border-radius: 8px; 
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
`;