import { ButtonArrowSvg } from "assets";
import { ButtonWrapper, Button } from "./styles";


type ActionButtonProps = {
  textContent: string, 
  role: string, 
  icon: string, 
  type: any, 
  isDisabled: boolean, 
  itsUserPatient: boolean, 
  itsUserView: boolean, 
  handleClick(): void,
}

export function ActionButton ({
  textContent,
  role,
  icon = ButtonArrowSvg,
  type = "submit",
  isDisabled = true,
  itsUserPatient = false,
  itsUserView = false,
  handleClick,
}: ActionButtonProps) {
  return (
    <ButtonWrapper itsUserView={itsUserView} itsUserPatient={itsUserPatient}>
      <Button
        role={role}
        onClick={handleClick}
        type={type}
        isDisabled={isDisabled}
      >
        <span>{textContent}</span>
        {icon ? <img height="21" width="21" src={icon} alt="icon" /> : null}
      </Button>
    </ButtonWrapper>
  );
}

