import { Formik, Field } from "formik";

import { SignUpFormValues } from "types";
import { actionButtonPaddings } from "enums";
import {
  AuthTextInput,
  PasswordInput,
  AlertMessage,
  ActionButton,
} from "components";
import {
  NameInputSvg,
  PasswordInputSvg,
  EmailInputSvg,
  PasswordConfirmSvg,
} from "assets";
import { Tittle } from "elements";
import { FeedbackForm, InputFieldWrapper } from "../../styles";
import { signUpSchema } from "../../schemes";
import { useAuthentification } from "../../hooks";


export function SignUpForm () {
  const { registrationRequest } = useAuthentification();
  const initialValues: SignUpFormValues = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    passwordConfirm: "",
  }

  return (
    <Formik
      initialValues={initialValues}
      initialErrors={{
        firstName: "initial error",
      }}
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        const { passwordConfirm, ...userData } = values;
        registrationRequest(userData);
      }}
    >
      {({ errors, touched, handleSubmit, isValid }) => (
        <FeedbackForm onSubmit={handleSubmit}>
          <Tittle>Sign Up</Tittle>

          <InputFieldWrapper>
            <Field
              role="first-name-input"
              component={AuthTextInput}
              name="firstName"
              type="text"
              placeholder="First Name"
              icon={NameInputSvg}
            />
            {errors.firstName && touched.firstName ? (
              <AlertMessage position="absolute" message={errors.firstName} />
            ) : null}
          </InputFieldWrapper>

          <InputFieldWrapper>
            <Field
              component={AuthTextInput}
              role="last-name-input"
              name="lastName"
              type="text"
              placeholder="Last Name"
              icon={NameInputSvg}
            />
            {errors.lastName && touched.lastName ? (
              <AlertMessage position="absolute" message={errors.lastName} />
            ) : null}
          </InputFieldWrapper>

          <InputFieldWrapper>
            <Field
              role="email-input"
              component={AuthTextInput}
              name="userName"
              type="text"
              placeholder="Email"
              icon={EmailInputSvg}
            />
            {errors.userName && touched.userName ? (
              <AlertMessage position="absolute" message={errors.userName} />
            ) : null}
          </InputFieldWrapper>

          <InputFieldWrapper>
            <Field
              role="password-input"
              component={PasswordInput}
              name="password"
              type="password"
              placeholder="Password"
              icon={PasswordInputSvg}
            />
            {errors.password && touched.password ? (
              <AlertMessage position="absolute" message={errors.password} />
            ) : null}
          </InputFieldWrapper>

          <InputFieldWrapper>
            <Field
              role="password-confirm-input"
              component={PasswordInput}
              name="passwordConfirm"
              type="password"
              placeholder="Confirm Password"
              icon={PasswordConfirmSvg}
            />
            {errors.passwordConfirm && touched.passwordConfirm ? (
              <AlertMessage position="absolute" message={`Password not match!`} />
            ) : null}
          </InputFieldWrapper>

          <ActionButton
            padding={actionButtonPaddings.AUTH}
            role="submit-button"
            isDisabled={isValid}
            textContent="Sign Up"
          />

        </FeedbackForm>
      )}
    </Formik>
  );
}
