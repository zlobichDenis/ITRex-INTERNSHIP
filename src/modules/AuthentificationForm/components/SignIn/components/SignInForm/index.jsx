import React, { useState } from "react";
import { Formik, Field } from "formik";

import { signInSchema } from "core";
import {
  AuthTextInput,
  PasswordInput,
  AlertMessage,
  ActionButton,
} from "components";
import { PasswordInputSvg, EmailInputSvg } from "assets";
import { Tittle } from "elements";
import { FeedbackForm } from "modules/Cabinet/styles";
import { useAuthentification, useAuthentificationAlert } from "modules/AuthentificationForm/redux";

import { Notification } from "components";

export const SignInForm = () => {
  const { isShowingNotification, closeNotificationHandle, showNotificationHandle } = useAuthentificationAlert();
  const { setUserProfile, authError, user } = useAuthentification();
  console.log(authError)

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
        showNotificationHandle();
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
          {user
            ? <Notification handleClose={closeNotificationHandle} isSuccess={true} message={'Success Authorization'} isDisplay={isShowingNotification}/>
            : <Notification handleClose={closeNotificationHandle} isSuccess={false} message={authError} isDisplay={isShowingNotification}/>}
        </FeedbackForm>
      )}
    </Formik>
  );
};
