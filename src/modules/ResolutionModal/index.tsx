import { CreateResolutionForm } from "./components";
import { ModalContainer } from "./styles"

type ResolutionModalProps = {
  isDisplay: boolean,
  createNewResolution(resolution: string): void,
  closeHandle(): void,
  firstName: string,
  lastName: string,
}

export function ResolutionModal({ isDisplay, ...props }: ResolutionModalProps) {
  return (
    <ModalContainer isDisplay={isDisplay}>
      <CreateResolutionForm {...props} />
    </ModalContainer>
  )
};