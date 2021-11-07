import React from "react";
import { Form, Formik } from "formik";
import { AppScreens } from "../../../../routes";
import { signInSchema } from "../../../../core";
import { PasswordInput } from "../../../../components/PasswordInput";
import { AlertMessage } from "../../../../components/AlertMessage";
import { AuthButton } from "../../../../components";
import { AuthTextInput } from "../../../../components/AuthTextInput";


export const SignInForm = () => {
    return (
        <Formik 
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={signInSchema}
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