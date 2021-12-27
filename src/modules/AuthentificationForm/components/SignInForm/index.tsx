import { Formik, Field } from "formik";
import Loader from "react-loader-spinner";

import { SignIn } from "types";
import { colors } from "styles";
import { ActionButtonPaddings, FetchStatus } from "enums";
import {
  AuthTextInput,
  PasswordInput,
  AlertMessage,
  ActionButton,
} from "components";
import { PasswordInputSvg, EmailInputSvg } from "assets";
import { Tittle } from "elements";
import { FeedbackForm, InputFieldWrapper } from "../../styles";
import { signInSchema } from "../../schemes";
import { useAuthorization } from "../../hooks";

export function SignInForm () {
  const { loginRequest, fetchStatus } = useAuthorization();
  const initialValues: SignIn = {
    userName: '',
    password: '',
  };

  const initialErrors = {
    userName: 'Disabled submit button',
  };

  return (
    <Formik
      initialValues={initialValues}
      initialErrors={initialErrors}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        loginRequest(values);
      }}
    >
      {({ errors, touched, handleSubmit, isValid }) => (
        <FeedbackForm data-testid="sign-in-form" onSubmit={handleSubmit}>
          <Tittle>Sign In</Tittle>

          <InputFieldWrapper>
            <Field
              component={AuthTextInput}
              role="email-input"
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
              component={PasswordInput}
              role="password-input"
              name="password"
              type="password"
              placeholder="Password"
              icon={PasswordInputSvg}
            />
            {errors.password && touched.password ? (
              <AlertMessage position="absolute" message={errors.password} />
            ) : null}
          </InputFieldWrapper>

          {fetchStatus === FetchStatus.PENDING && fetchStatus ? (
            <Loader
              type="Puff"
              color={colors.BLUE}
              height={50}
              width={50}
              timeout={3000}
            />
          ) : (
            <ActionButton
              padding={ActionButtonPaddings.AUTH}
              role="submit-button"
              isDisabled={isValid}
              type="submit"
              textContent="Sign In"
            />
          )}
        </FeedbackForm>
      )}
    </Formik>
  );
};
