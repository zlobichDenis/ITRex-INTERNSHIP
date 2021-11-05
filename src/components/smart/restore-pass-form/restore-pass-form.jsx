import React from "react";
import { Formik, Form } from "formik";
import { RestorePassSchema } from "../../../core/schemes/restore-pass-schema";
import { BackToSignInButton } from "../../ui/back-to-sign-in-button/back-to-sign-in-button";
import { RestoreMessage } from "../../ui/restore-message/restore-message";
import { EmailInput } from "../../ui/email-input/email-input";
import { AlertMessage } from "../../ordinary/alert-message/alert-message";
import { RestorePassButton } from "../../ui/restore-pass-button/restore-pass-button";

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

                <EmailInput />
                {errors.email && touched.email
                    ? <AlertMessage message={errors.email} /> 
                    : null}
                
                <RestorePassButton isActive={isSubmitting}/>
            </Form>
            )}
        </Formik>
       
    )
};