import styled from "styled-components";

import { colors } from "styles";

export const UserPathWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    align-items: center;
    gap: 8px;
    width: 100%;
`;

export const UserPathLink = styled.a`
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 24px;
    color: ${({ isActive }) => (
        isActive
        ? colors.TEXT_COLOR
        : colors.TEXT_LINK_COLOR
    )}
`;