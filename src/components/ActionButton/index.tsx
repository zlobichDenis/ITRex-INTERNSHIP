import React from "react";

import { ButtonArrowSvg } from "assets";
import { ButtonWrapper, Button } from "./styles";

type ActionButtonProps = {
  textContent: string,
  padding: string,
  position?: string,
  role?: string, 
  icon?: string, 
  type?: any, 
  isDisabled?: boolean,
  handleClick?: React.MouseEventHandler<HTMLButtonElement>,
}


export function ActionButton ({
  textContent,
  role,
  icon = ButtonArrowSvg,
  type = "submit",
  padding,
  isDisabled = true,
  position,
  handleClick,
}: ActionButtonProps) {
  return (
    <ButtonWrapper position={position}>
      <Button
        padding={padding}
        role={role}
        onClick={handleClick}
        type={type}
        isDisabled={isDisabled}
      >
        <span>{textContent}</span>
        {icon ? <img height="14" width="7" src={icon} alt="icon" /> : null}
      </Button>
    </ButtonWrapper>
  );
}




