import { AlertMessageText } from "./styles";

type AlertMessageProps = {
  message: string,
  position: string,
  role?: string,
}

export function AlertMessage ({ message, role, position }: AlertMessageProps) {
  return (
    <AlertMessageText position={position} role={role}>
      <p>{message}</p>
    </AlertMessageText>
  );
};
