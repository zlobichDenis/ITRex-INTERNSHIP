import { AlertMessageText } from "./styles";

type AlertMessageProps = {
  message: string,
  role?: string,
}

export function AlertMessage ({ message, role }: AlertMessageProps) {
  return (
    <AlertMessageText role={role}>
      <p>{message}</p>
    </AlertMessageText>
  );
};
