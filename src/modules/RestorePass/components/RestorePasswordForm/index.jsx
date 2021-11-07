import React from "react";
import { Formik, Form } from "formik";
import { AppScreens, AuthStages } from "../../../../routes";
import { restorePassSchema } from "../../../../core";
import { BackToSignInButton } from "../../../../components";
import { RestoreMessage } from "../RestoreMessage";
import { AlertMessage } from "../../../../components/AlertMessage";
import { AuthButton } from "../../../../components";
import { AuthTextInput } from "../../../../components/AuthTextInput";

export const RestorePassForm = () => {

    return (
        <Formik 
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={restorePassSchema}
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