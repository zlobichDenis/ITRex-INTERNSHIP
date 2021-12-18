import { InputText } from "elements";
import { InputField } from "../styles";

type AuthTextInputProps = {
  field: object,
  icon: string,
  placeholder: string,
  role: string,
}

export function AuthTextInput ({ field, icon, placeholder, role }: AuthTextInputProps) {
  return (
    <InputField>
      {icon ? <img width="21" src={icon} alt="icon" /> : null}
      <InputText role={role} {...field} placeholder={placeholder}></InputText>
    </InputField>
  );
}
