import React from "react";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router";

import { AppScreens, AuthStages } from "../../../../routes";
import { restorePassSchema } from "../../../../core";
import { RestoreMessage } from "..";
import { AuthTextInput,  
        AlertMessage, 
        ActionButton,
        BackToSignInButton  } from "../../../../components";

export const RestorePassForm = () => {
    let history = useHistory();
    return (
        <Formik 
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={restorePassSchema}
            onSubmit={() => history.push(`${AppScreens.AUTH}${AuthStages.RESTORE_CONFIRM}`)}
            >
            {({ errors, touched }) => (
                <Form className="feedback-form">

                <BackToSignInButton />

                <RestoreMessage isConfirm={false}/>

                <Field component={AuthTextInput} name="email" type="text" placeholder="Email" icon="name"/>
                {errors.email && touched.email
                    ? <AlertMessage message={errors.email} /> 
                    : null}
                
                <ActionButton textContent='Restore Password'/>
            </Form>
            )}
        </Formik>
       
    )
};
