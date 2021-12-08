import styled from "styled-components";

import { ActiveStatusSvg, InactiveStatusSvg } from "assets";
import { typography } from "styles";

type UserStatusIconProps = {
    isActive: boolean,
}

export const UserStatus = styled.div`
    ${typography.PARAGRAPH}
    font-size: 13px;
`;

export const UserStatusIcon = styled.div<UserStatusIconProps>`
    background-color: ${({ isActive }) => isActive ? `url(${ActiveStatusSvg})` : `url(${InactiveStatusSvg})`};
`;