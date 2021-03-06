import { RestorePassForm, RestorePassConfirm } from "../../components";
import { AppPaths, AuthPath } from "enums";


export function RestorePass ({ location }: any ) {
  return (
    <>
      {location.pathname ===
      `${AppPaths.AUTH}${AuthPath.RESTORE_CONFIRM}` ? (
        <RestorePassConfirm />
      ) : (
        <RestorePassForm />
      )}
    </>
  );
};

