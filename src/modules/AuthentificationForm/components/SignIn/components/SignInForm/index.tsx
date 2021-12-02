import { Formik, Field } from "formik";
import Loader from "react-loader-spinner";

import { signInSchema } from "core";
import { SignInFormValues } from "types";
import { colors } from "styles";
import { FetchStatus } from "const";
import {
  AuthTextInput,
  PasswordInput,
  AlertMessage,
  ActionButton,
} from "components";
import { PasswordInputSvg, EmailInputSvg } from "assets";
import { Tittle } from "elements";
import { FeedbackForm } from "modules/Cabinet/styles";
import { useAuthentification } from "modules/AuthentificationForm/redux";

export const SignInForm = () => {
  const { loginRequest, fetchStatus } = useAuthentification();
  const initialValues: SignInFormValues = {
    userName: '',
    password: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        loginRequest(values);
      }}
    >
      {({ errors, touched, handleSubmit, isValid, isSubmitting }) => (
        <FeedbackForm onSubmit={handleSubmit}>
          <Tittle>Sign In</Tittle>

          <Field
            component={AuthTextInput}
            role="email-input"
            name="userName"
            type="text"
            placeholder="Email"
            icon={EmailInputSvg}
          />
          {errors.userName && touched.userName ? (
            <AlertMessage message={errors.userName} />
          ) : null}

          <Field
            component={PasswordInput}
            role="password-input"
            name="password"
            type="password"
            placeholder="Password"
            icon={PasswordInputSvg}
          />
          {errors.password && touched.password ? (
            <AlertMessage message={errors.password} />
          ) : null}

          {fetchStatus === FetchStatus.PENDING && fetchStatus ? (
            <Loader
              type="Puff"
              color={colors.TEXT_LINK_COLOR}
              height={50}
              width={50}
              timeout={3000}
            />
          ) : (
            <ActionButton
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
