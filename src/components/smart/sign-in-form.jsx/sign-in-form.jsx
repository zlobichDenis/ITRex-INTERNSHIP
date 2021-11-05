import React from "react";
import { Form, Formik }from "formik";
import { AppScreens } from "../../../routes/routes";
import { SignInSchema } from "../../../core/schemes/sign-in-schema"
import { PasswordInput } from "../../ui/password-input/password-input";
import { AlertMessage } from "../../ordinary/alert-message/alert-message";
import { AuthButton } from "../../ui/auth-button/auth-button";
import { AuthTextInput } from "../../ui/auth-text-input/auth-text-input";

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

                    <AuthTextInput nameText="email" type="text" placeholderText="Email" icon="email"/>
                    {errors.email && touched.email
                        ? <AlertMessage message={errors.email} /> 
                        : null}


                    <PasswordInput />
                    {errors.password && touched.password
                        ? <AlertMessage message={errors.password} /> 
                        : null}

                    <AuthButton isActive={isSubmitting} route={AppScreens.DOCTOR_VIEW} textContent='Sign In'/>
                    
                </Form>
            )}
        </Formik>
    )
};