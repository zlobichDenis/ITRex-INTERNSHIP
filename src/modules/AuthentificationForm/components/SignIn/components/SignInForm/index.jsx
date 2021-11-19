import React from "react";
import { Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { AppScreens } from "routes";
import { setCurrentUser } from "store";
import { signInSchema } from "core";
import { AuthTextInput, 
         PasswordInput,  
         AlertMessage, 
         ActionButton  } from "components";
import { PasswordInputSvg, EmailInputSvg } from "assets";
import { Tittle } from "elements";
import { FeedbackForm } from "modules/styles";
import { getUserProfile, login } from "services";



export const SignInForm = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    const redirectToCurrentPage = ({ role_name: roleName }) => {
        switch (roleName) {
            case 'Patient':
                history.push(AppScreens.PATIENT_VIEW);
                break;
            case 'Doctor':
                history.push(AppScreens.DOCTOR_VIEW)
                break;
        }
    };

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
                    login(values)
                        .then((res) => sessionStorage.setItem('access_token', res.data.access_token))
                        .then(() => getUserProfile(sessionStorage.getItem('access_token')))
                        .then((res) => {
                            dispatch(setCurrentUser(res.data))
                            redirectToCurrentPage(res.data);
                        })
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