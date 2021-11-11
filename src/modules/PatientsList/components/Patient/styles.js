import styled from "styled-components";

import { ActiveStatusSvg, InactiveStatusSvg } from "assets";

export const UserStatus = styled.div`
    font-family: Poppins;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
`;

export const UserStatusIcon = styled.div`
    background-color: ${({ isActive }) => isActive ? `url(${ActiveStatusSvg})` : `url(${InactiveStatusSvg})`};
`;