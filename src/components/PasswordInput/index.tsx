import { useState } from "react";

import { InputText } from "elements";
import { EyeSvg, EyeBlockSvg } from "assets";
import { InputField } from "../styles";

type PasswordInputProps = {
  placeholder: string,
  field: object,
  icon: string,
  role: string,
}


export function PasswordInput ({ placeholder, field, icon, role }: PasswordInputProps) {
  const [isShowingPass, setVisiblePass] = useState<boolean>(false);
  const showPassToggle = (): void => {
    setVisiblePass((isShowingPass) => !isShowingPass);
  };

  return (
    <InputField>
      <img width="21" src={icon} alt="icon" />
      <InputText
        {...field}
        role={role}
        type={isShowingPass ? "text" : "password"}
        placeholder={placeholder}
        className="feedback-field__input feedback-field__input_password"
      />
      <button type="button">
        <img onClick={showPassToggle} src={isShowingPass ? EyeSvg : EyeBlockSvg} width="24" height="24" alt="icon"/>
      </button>
    </InputField>
  );
};
