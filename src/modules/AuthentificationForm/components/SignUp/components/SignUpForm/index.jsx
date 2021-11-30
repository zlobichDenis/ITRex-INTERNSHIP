import React from "react";
import { Formik, Field } from "formik";

import { signUpSchema, useRequestAlert } from "core";
import { FetchStatus } from "const";
import {
  AuthTextInput,
  PasswordInput,
  AlertMessage,
  ActionButton,
  Notification
} from "components";
import {
  NameInputSvg,
  PasswordInputSvg,
  EmailInputSvg,
  PasswordConfirmSvg,
} from "assets";
import { FeedbackForm } from "modules/Cabinet/styles";
import { Tittle } from "elements";
import { useAuthentification } from "modules/AuthentificationForm/redux";


export const SignUpForm = () => {
  const { registrationRequest, fetchStatus } = useAuthentification();
  const { isShowingNotification, closeNotificationHandle } = useRequestAlert(fetchStatus);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        passwordConfirm: "",
      }}
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

          <Field
            role="first-name-input"
            component={AuthTextInput}
            name="firstName"
            type="text"
            placeholder="First Name"
            icon={NameInputSvg}
          />
          {errors.firstName && touched.firstName ? (
            <AlertMessage message={errors.firstName} />
          ) : null}

          <Field
            component={AuthTextInput}
            role="last-name-input"
            name="lastName"
            type="text"
            placeholder="Last Name"
            icon={NameInputSvg}
          />
          {errors.lastName && touched.lastName ? (
            <AlertMessage message={errors.lastName} />
          ) : null}

          <Field
            role="email-input"
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
            role="password-input"
            component={PasswordInput}
            name="password"
            type="password"
            placeholder="Password"
            icon={PasswordInputSvg}
          />
          {errors.password && touched.password ? (
            <AlertMessage message={errors.password} />
          ) : null}

          <Field
            role="password-confirm-input"
            component={PasswordInput}
            name="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            icon={PasswordConfirmSvg}
          />
          {errors.passwordConfirm && touched.passwordConfirm ? (
            <AlertMessage message={`Password not match!`} />
          ) : null}

          <ActionButton role="submit-button" isDisabled={isValid} textContent="Sign Up" />

          <Notification
            fetchStatus={fetchStatus}
            closeNotificationHandle={closeNotificationHandle}
            isShow = {isShowingNotification}
            message={
              fetchStatus === FetchStatus.SUCCESS
                ? "Success Authorization"
                : "Unsuccess Authorization"
            }
          />
        </FeedbackForm>
      )}
    </Formik>
  );
};
