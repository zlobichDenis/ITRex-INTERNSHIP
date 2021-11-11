import React from "react";
import { Formik, Field } from "formik";
import { useHistory } from "react-router";

import { AppScreens, AuthStages } from "routes";
import { restorePassSchema } from "core";
import { RestoreMessage } from "..";
import { AuthTextInput,  
        AlertMessage, 
        ActionButton,
        BackToSignInButton  } from "components";
import { EmailInputSvg } from "assets";
import { FeedbackForm } from "modules/styles";


export const RestorePassForm = () => {
    let history = useHistory();
    const backToSignIn = () => history.push(`${AppScreens.AUTH}${AuthStages.SIGN_IN}`);
    return (
        <Formik 
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={restorePassSchema}
            onSubmit={() => history.push(`${AppScreens.AUTH}${AuthStages.RESTORE_CONFIRM}`)}
            >
            {({ errors, touched, handleSubmit }) => (
                <FeedbackForm onSubmit={handleSubmit}>
   
                <BackToSignInButton backToSignIn={backToSignIn}/>
                <RestoreMessage isConfirm={false}/>

                <Field component={AuthTextInput} name="email" type="text" placeholder="Email" icon={EmailInputSvg}/>
                {errors.email && touched.email
                    ? <AlertMessage message={errors.email} /> 
                    : null}
                
                <ActionButton textContent='Restore Password'/>
            </FeedbackForm>
            )}
        </Formik>
       
    )
};
