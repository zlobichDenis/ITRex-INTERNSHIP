import { MouseEventHandler } from "react";

import { RightArrowSvg } from "assets";
import { UserPathWrapper, UserPathLink } from "./styles";

type UserPathProps = {
  handleClick: MouseEventHandler,
}

export function UserPath ({ handleClick }: UserPathProps) {
  return (
    <UserPathWrapper>
      <UserPathLink onClick={handleClick}>Cabinet</UserPathLink>
      <img width="16" height="10" src={RightArrowSvg} alt="arrow" />
      <UserPathLink isActive>Make an appointment</UserPathLink>
    </UserPathWrapper>
  )
}