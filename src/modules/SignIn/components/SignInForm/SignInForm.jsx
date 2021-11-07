import React from "react";
import { Form, Formik }from "formik";
import { AppScreens } from "../../../routes/routes";
import { SignInSchema } from "../../../../core/schemes/sign-in-schema"
import { PasswordInput } from "../../../../components/PasswordInput/PasswordInput";
import { AlertMessage } from "../../../../components/AlertMessage/alert-message";
import { AuthButton } from "../../ui/auth-button/auth-button";
import { AuthTextInput } from "../../../../components/AuthTextInput/AuthTextInput";

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