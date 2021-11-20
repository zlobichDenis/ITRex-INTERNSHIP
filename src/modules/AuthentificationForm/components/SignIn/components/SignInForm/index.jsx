import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
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
import { fetchUserProfile } from "modules/AuthentificationForm/redux";



export const SignInForm = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    useEffect(() => {
        if (user) {
            switch (user.role_name) {
                case 'Patient':
                    history.push(AppScreens.PATIENT_VIEW);
                    break;
                case 'Doctor':
                    history.push(AppScreens.DOCTOR_VIEW)
                    break;
            }
        }
    }, [user]);


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
                    dispatch(fetchUserProfile(values));
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