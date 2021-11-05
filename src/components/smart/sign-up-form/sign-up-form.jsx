import React from "react";
import { Formik, Form } from "formik";
import { AppScreens } from "../../../routes/routes";
import { SignUpSchema } from "../../../core/schemes/sign-up-schema";
import { AuthTextInput } from "../../ui/auth-text-input/auth-text-input";
import { PasswordInput } from "../../ui/password-input/password-input";
import { PasswordConfirm } from "../../ui/password-confirm-input/password-confirm";
import { AlertMessage } from "../../ordinary/alert-message/alert-message";
import { AuthButton } from "../../ui/auth-button/auth-button";

export const SignUpForm = () => {
    return (
        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirm: '',
            }}
            validationSchema={SignUpSchema}
            >
            {({ errors, touched, values, isSubmitting }) => (
                <Form className="feedback-form">
                    <p className="feedback-form__title">Sign Up</p>

                    <AuthTextInput nameText="firstName" type="text" placeholderText="First Name" icon="name"/>
                    {errors.firstName && touched.firstName 
                        ? <AlertMessage message={errors.firstName} />
                        : null}

                    <AuthTextInput nameText="lastName" type="text" placeholderText="Last Name" icon="name"/>
                    {errors.lastName && touched.lastName 
                        ? <AlertMessage message={errors.lastName} />
                        : null}

                    <AuthTextInput nameText="email" type="text" placeholderText="Email" icon="email"/>
                    {errors.email && touched.email
                        ? <AlertMessage message={errors.email} /> 
                        : null}

                    <PasswordInput />
                    {errors.password && touched.password
                        ? <AlertMessage message={errors.password} /> 
                        : null}

                    <PasswordConfirm />
                    {(values.password !== values.passwordConfirm) && touched.passwordConfirm
                        ? <AlertMessage message={`Password not match!`} /> 
                        : null}

                    <AuthButton isActive={isSubmitting} route={AppScreens.PATIENT_VIEW} textContent='Sign Up'/>

                </Form>
            )}
    </Formik>
    )
};