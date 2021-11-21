import React  from "react";
import { Formik, Field } from "formik";

import { signInSchema } from "core";
import { login } from "services";
import { AuthTextInput, 
         PasswordInput,  
         AlertMessage, 
         ActionButton  } from "components";
import { PasswordInputSvg, EmailInputSvg } from "assets";
import { Tittle } from "elements";
import { FeedbackForm } from "modules/styles";
import { useRedirectToCurrentPage } from "modules/AuthentificationForm/redux";



export const SignInForm = () => {
    const { setUserProfile } = useRedirectToCurrentPage();

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
            onSubmit={(values) => { 
                    setUserProfile(values, "login");
                }}
            >  
            {({ errors, touched, handleSubmit, isValid, isSubmitting }) => (
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