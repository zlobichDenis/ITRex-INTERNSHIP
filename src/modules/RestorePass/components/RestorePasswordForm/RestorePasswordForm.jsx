import React from "react";
import { Formik, Form } from "formik";
import { AppScreens, AuthStages } from "../../../routes/routes";
import { RestorePassSchema } from "../../../../core/schemes/restore-pass-schema";
import { BackToSignInButton } from "../../../../old structure/components/ui/back-to-sign-in-button/back-to-sign-in-button";
import { RestoreMessage } from "../../../../old structure/components/ordinary/restore-message/restore-message";
import { AlertMessage } from "../../../../components/AlertMessage/alert-message";
import { AuthButton } from "../../ui/auth-button/auth-button";
import { AuthTextInput } from "../../../../components/AuthTextInput/AuthTextInput";

export const RestorePassForm = () => {

    return (
        <Formik 
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={RestorePassSchema}
            >
            {({ errors, touched, isSubmitting }) => (
                <Form className="feedback-form">
                <BackToSignInButton />
                <RestoreMessage isConfirm={false}/>

                <AuthTextInput nameText="email" type="text" placeholderText="Email" icon="email"/>
                {errors.email && touched.email
                    ? <AlertMessage message={errors.email} /> 
                    : null}
                
                <AuthButton isActive={isSubmitting} route={`${AppScreens.AUTH}${AuthStages.RESTORE_CONFIRM}`} textContent='Restore Password'/>
            </Form>
            )}
        </Formik>
       
    )
};