import React, { useEffect} from "react";
import { Formik, Field } from "formik";

import { signInSchema } from "core";
import {
  AuthTextInput,
  PasswordInput,
  AlertMessage,
  ActionButton,
  Notification,
} from "components";
import { PasswordInputSvg, EmailInputSvg } from "assets";
import { Tittle } from "elements";
import { FeedbackForm } from "modules/Cabinet/styles";
import {
  useAuthentification,
  useRequestAlert,
} from "modules/AuthentificationForm/redux";

import { FetchStatus } from "const";

export const SignInForm = () => {
  const { setUserProfile, authError, userProfile, fetchStatus } = useAuthentification();
  const { isShowingNotification, closeNotificationHandle } = useRequestAlert(fetchStatus);

  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
      }}
      initialErrors={{
        initialError: "Initial error",
      }}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        setUserProfile(values, "login");
      }}
    >
      {({ errors, touched, handleSubmit, isValid, isSubmitting }) => (
        <FeedbackForm onSubmit={handleSubmit}>
          <Tittle>Sign In</Tittle>

          <Field
            component={AuthTextInput}
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
            name="password"
            type="password"
            placeholder="Password"
            icon={PasswordInputSvg}
          />
          {errors.password && touched.password ? (
            <AlertMessage message={errors.password} />
          ) : null}

          <ActionButton
            isDisabled={isValid}
            type="submit"
            textContent="Sign In"
          />

          <Notification
            fetchStatus={fetchStatus}
            closeNotificationHandle={closeNotificationHandle}
            isShow = {isShowingNotification}
            message={
              fetchStatus === FetchStatus.SUCCESS
                ? "Success Authorization"
                : authError
            }
          />
        </FeedbackForm>
      )}
    </Formik>
  );
};
