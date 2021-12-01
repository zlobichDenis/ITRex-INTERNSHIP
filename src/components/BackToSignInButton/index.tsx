import { BackArrowSvg } from "assets";
import { RestoreButton } from "./styles";

type BackToSignInButtonProps = {
  backToSignIn(): void,
}

export function BackToSignInButton ({ backToSignIn }: BackToSignInButtonProps) {
  return (
    <RestoreButton onClick={backToSignIn}>
      <img width="21" height="21" src={BackArrowSvg} alt="icon" />
      <span>Restore password</span>
    </RestoreButton>
  );
};

