import React from "react";
import { Formik, Field } from "formik";
import { useHistory } from "react-router";

import { AppScreens } from "routes";
import { signInSchema } from "core";
import { AuthTextInput, 
         PasswordInput,  
         AlertMessage, 
         ActionButton  } from "components";
import { PasswordInputSvg, EmailInputSvg } from "assets";
import { Tittle } from "elements";
import { FeedbackForm } from "modules/styles";
import { login } from "services";


export const SignInForm = () => {
    let history = useHistory();
    return (
        <Formik 
            initialValues={{
                userName: '',
                password: '',
            }}
            initialErrors={{
                initialError: "Initial error",
            }}
            validationSchema={signInSchema}
            onSubmit={async (values) => { 
                await login(values);
                history.push(AppScreens.PATIENT_VIEW)
            }}
            >  
            {({ errors, touched, handleSubmit, isValid }) => (
                <FeedbackForm onSubmit={handleSubmit}>
                    <Tittle >Sign In</Tittle>

                    <Field component={AuthTextInput} name="userName" type="text" placeholder="Email" icon={EmailInputSvg}/>
                    {errors.userName && touched.userName
                        ? <AlertMessage message={errors.userName} /> 
                        : null}


                    <Field component={PasswordInput} name="password" type="password" placeholder="Password" icon={PasswordInputSvg}/>
                    {errors.password && touched.password
                        ? <AlertMessage message={errors.password} /> 
                        : null}

                    <ActionButton isDisabled={isValid} type="submit" textContent='Sign In'/>
                    
                </FeedbackForm>
            )}
        </Formik>
    )
};