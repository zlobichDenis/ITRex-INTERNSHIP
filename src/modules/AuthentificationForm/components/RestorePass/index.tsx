import { Location } from "history";

import { RestorePassForm, RestorePassConfirm } from "./components";
import { AppScreens, AuthStages } from "routes";


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

