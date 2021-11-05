import React from "react";
import { Form, Formik }from "formik";
import  { SignInSchema } from "../../../core/schemes/sign-in-schema"
import { EmailInput } from "../../ui/email-input/email-input";
import { PasswordInput } from "../../ui/password-input/password-input";
import { AlertMessage } from "../../ordinary/alert-message/alert-message";
import { SignInButton } from "../../ui/sign-in-button/sign-in-button"

export const SignInForm = () => {

    return (
        <Formik 
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={SignInSchema}
        >  
            {({ errors, touched, isSubmitting }) => (
                <Form className="feedback-form">
                    <p className="feedback-form__title">Sign In</p>

                    <EmailInput />
                    {errors.email && touched.email
                        ? <AlertMessage message={errors.email} /> 
                        : null}


                    <PasswordInput />
                    {errors.password && touched.password
                        ? <AlertMessage message={errors.password} /> 
                        : null}

                    <SignInButton isActive={isSubmitting}/>
                </Form>
            )}
        </Formik>
    )
};