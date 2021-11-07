import React from "react";
import { Form, Formik, Field } from "formik";
import { useHistory } from "react-router";

import { AppScreens } from "../../../../routes";
import { signInSchema } from "../../../../core";
import { AuthTextInput, 
         PasswordInput,  
         AlertMessage, 
         ActionButton  } from "../../../../components";


export const SignInForm = () => {
    let history = useHistory();
    return (
        <Formik 
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={signInSchema}
            onSubmit={() => history.push(AppScreens.DOCTOR_VIEW)}
            >  
            {({ errors, touched }) => (
                <Form className="feedback-form">
                    <p className="feedback-form__title">Sign In</p>

                    <Field component={AuthTextInput} name="email" type="text" placeholder="Email" icon="name"/>
                    {errors.email && touched.email
                        ? <AlertMessage message={errors.email} /> 
                        : null}


                    <Field component={PasswordInput} name="password" type="password" placeholder="Password" icon=""/>
                    {errors.password && touched.password
                        ? <AlertMessage message={errors.password} /> 
                        : null}

                    <ActionButton textContent='Sign In'/>
                    
                </Form>
            )}
        </Formik>
    )
};