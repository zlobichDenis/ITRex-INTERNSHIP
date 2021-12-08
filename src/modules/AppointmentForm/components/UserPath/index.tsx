import { RightArrowSvg } from "assets";
import { UserPathWrapper, UserPathLink } from "./styles";

export function UserPath () {
  return (
    <UserPathWrapper>
      <UserPathLink>Doctor</UserPathLink>
      <img width="16" height="10" src={RightArrowSvg} alt="arrow" />
      <UserPathLink isActive>Make an appointment</UserPathLink>
    </UserPathWrapper>
  )
};