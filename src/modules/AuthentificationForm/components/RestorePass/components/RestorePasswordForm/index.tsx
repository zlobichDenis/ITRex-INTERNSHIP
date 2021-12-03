import { Formik, Field } from "formik";
import { useHistory } from "react-router";

import { AppScreens, AuthStages } from "const";
import { useRedirect } from "hooks";
import { restorePassSchema } from "core";
import { RestoreMessage } from "..";
import {
  AuthTextInput,
  AlertMessage,
  ActionButton,
  BackToSignInButton
} from "components";
import { EmailInputSvg } from "assets";
import { FeedbackForm } from "modules/Cabinet/styles";


export function RestorePassForm() {
  const { routeToPath } = useRedirect();
  const backToSignIn = () => {
    routeToPath(`${AppScreens.AUTH}${AuthStages.SIGN_IN}`)
  };
  const confirmRestorePass = () => {
    routeToPath(`${AppScreens.AUTH}${AuthStages.RESTORE_CONFIRM}`)
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={restorePassSchema}
      onSubmit={confirmRestorePass}
    >
      {({ errors, touched, handleSubmit }) => (
        <FeedbackForm onSubmit={handleSubmit}>

          <BackToSignInButton backToSignIn={backToSignIn} />
          <RestoreMessage isConfirm={false} />

          <Field component={AuthTextInput} name="email" type="text" placeholder="Email" icon={EmailInputSvg} />
          {errors.email && touched.email
            ? <AlertMessage message={errors.email} />
            : null}

          <ActionButton textContent='Restore Password' />
        </FeedbackForm>
      )}
    </Formik>

  )
};
