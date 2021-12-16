import { Formik, Field } from "formik";

import { AppPaths, AuthPath } from "const";
import { useRedirect } from "hooks";
import { RestoreMessage } from "../index";
import {
  AuthTextInput,
  AlertMessage,
  ActionButton,
  BackToSignInButton
} from "components";
import { EmailInputSvg } from "assets";
import { FeedbackForm } from "../../styles";
import { restorePassSchema } from "modules/AuthentificationForm/schemes";


export function RestorePassForm() {
  const { routeToPath } = useRedirect();

  const backToSignIn = () => {
    routeToPath(`${AppPaths.AUTH}${AuthPath.SIGN_IN}`)
  };
  const confirmRestorePass = () => {
    routeToPath(`${AppPaths.AUTH}${AuthPath.RESTORE_CONFIRM}`)
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
            ? <AlertMessage position="absolute" message={errors.email} />
            : null}

          <ActionButton
            width={150}
            textContent='Restore Password' />
        </FeedbackForm>
      )}
    </Formik>

  )
}
