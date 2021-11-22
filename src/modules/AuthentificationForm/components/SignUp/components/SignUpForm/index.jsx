import React from "react";
import { Formik,Field } from "formik";

import { signUpSchema } from "core";
import { AuthTextInput, 
         PasswordInput,  
         AlertMessage, 
         ActionButton  } from "components";
import { NameInputSvg,
         PasswordInputSvg,
         EmailInputSvg,
         PasswordConfirmSvg} from "assets";
import { FeedbackForm } from "modules/Cabinet/styles";
import { Tittle } from "elements";
import { useRedirectToCurrentPage } from "modules/AuthentificationForm/redux";

export const SignUpForm = () => {
    const { setUserProfile } = useRedirectToCurrentPage();

    return (
        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                userName: '',
                password: '',
                passwordConfirm: '',
            }}
            initialErrors={{
                firstName: 'initial error',
            }}
            validationSchema={signUpSchema}
            onSubmit={(values) => { 
                const { passwordConfirm, ...userData } = values;
                setUserProfile(userData, "registration");
                }}
            >
            {({ errors, touched, handleSubmit, isValid }) => (
                <FeedbackForm onSubmit={handleSubmit}>
                        <Tittle>Sign Up</Tittle>

                        <Field component={AuthTextInput} name="firstName" type="text" placeholder="First Name" icon={NameInputSvg} />
                        {errors.firstName && touched.firstName 
                            ? <AlertMessage message={errors.firstName} />
                            : null}

                        <Field component={AuthTextInput} name="lastName" type="text" placeholder="Last Name" icon={NameInputSvg} />
                        {errors.lastName && touched.lastName 
                            ? <AlertMessage message={errors.lastName} />
                            : null}

                        <Field component={AuthTextInput} name="userName" type="text" placeholder="Email" icon={EmailInputSvg} />
                        {errors.userName && touched.userName
                            ? <AlertMessage message={errors.userName} /> 
                            : null}

                        <Field component={PasswordInput} name="password" type="password" placeholder="Password" icon={PasswordInputSvg}/>
                        {errors.password && touched.password
                            ? <AlertMessage message={errors.password} /> 
                            : null}

                        <Field component={PasswordInput} name="passwordConfirm" type="password" placeholder="Confirm Password" icon={PasswordConfirmSvg}/>
                        {errors.passwordConfirm && touched.passwordConfirm
                            ? <AlertMessage message={`Password not match!`} /> 
                            : null}

                        <ActionButton isDisabled={isValid} textContent="Sign Up" />

                </FeedbackForm>
            )}
        </Formik>
    )
};