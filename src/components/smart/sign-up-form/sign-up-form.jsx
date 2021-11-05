import React from "react";
import { Formik, Form } from "formik";
import { SignUpSchema } from "../../../core/schemes/sign-up-schema";
import { FirstNameInput } from "../../ui/firstname-input/firstname-input";
import { LastNameInput } from "../../ui/lastname-input/lastname-input";
import { EmailInput } from "../../ui/email-input/email-input";
import { PasswordInput } from "../../ui/password-input/password-input";
import { PasswordConfirm } from "../../ui/password-confirm-input/password-confirm";
import { AlertMessage } from "../../ordinary/alert-message/alert-message";
import { SignUpButton } from "../../ui/sign-up-button/sign-up-button";

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

                    <FirstNameInput />
                    {errors.firstName && touched.firstName 
                        ? <AlertMessage message={errors.firstName} />
                        : null}

                    <LastNameInput />
                    {errors.lastName && touched.lastName 
                        ? <AlertMessage message={errors.lastName} />
                        : null}

                    <EmailInput />
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

                    <SignUpButton isActive={isSubmitting}/>

                </Form>
            )}
    </Formik>
    )
};