import { RestorePassForm, RestorePassConfirm } from "..";
import { AppScreens, AuthStages } from "const";


export function RestorePass ({ location }: any ) {
  return (
    <>
      {location.pathname ===
      `${AppScreens.AUTH}${AuthStages.RESTORE_CONFIRM}` ? (
        <RestorePassConfirm />
      ) : (
        <RestorePassForm />
      )}
    </>
  );
};

