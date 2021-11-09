import React from "react";
import { Form, Formik, Field } from "formik";
import { useHistory } from "react-router";

import { AppScreens } from "routes";
import { signInSchema } from "core";
import { AuthTextInput, 
         PasswordInput,  
         AlertMessage, 
         ActionButton  } from "components";
import { PasswordInputSvg, EmailInputSvg } from "assets";
import { Tittle } from "styles";
import { FeedbackForm } from "modules/styles";


export const SignInForm = () => {
    let history = useHistory();
    return (
        <Formik 
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={signInSchema}
            onSubmit={() => history.push(AppScreens.PATIENT_VIEW)}
            >  
            {({ errors, touched, handleSubmit }) => (
                <FeedbackForm onSubmit={handleSubmit}>
                    <Tittle >Sign In</Tittle>

                    <Field component={AuthTextInput} name="email" type="text" placeholder="Email" icon={EmailInputSvg}/>
                    {errors.email && touched.email
                        ? <AlertMessage message={errors.email} /> 
                        : null}


                    <Field component={PasswordInput} name="password" type="password" placeholder="Password" icon={PasswordInputSvg}/>
                    {errors.password && touched.password
                        ? <AlertMessage message={errors.password} /> 
                        : null}

                    <ActionButton textContent='Sign In'/>
                    
                </FeedbackForm>
            )}
        </Formik>
    )
};