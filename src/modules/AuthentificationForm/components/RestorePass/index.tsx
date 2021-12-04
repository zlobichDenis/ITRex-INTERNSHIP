import { RouterLocation } from "connected-react-router";


import { RestorePassForm, RestorePassConfirm } from "./components";
import { AppScreens, AuthStages } from "const";

// type RestorePassProps = {
//   location?: RouterLocation<any>,
// }

export function RestorePass ({ location }: any ) {
  console.log(location)
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

