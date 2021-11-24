import { useCallback, useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { useHistory } from "react-router";

import { AppScreens } from "routes";
import { fetchUserProfile } from "modules/AuthentificationForm/redux";

export const useAuthentification = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { userProfile, fetchStatus } = useSelector((state) => state.user);
  const authError = useSelector(state => state.error);

  useEffect(() => {
    if (userProfile) {
      switch (userProfile.role_name) {
        case "Patient":
          history.push(AppScreens.PATIENT_VIEW);
          break;
        case "Doctor":
          history.push(AppScreens.DOCTOR_VIEW);
          break;
      }
    }
  }, [userProfile]);

  const setUserProfile = useCallback(
    (userData, requestType) => {
      dispatch(fetchUserProfile({ userData, requestType }));
    },
    [dispatch]);

  return { userProfile, setUserProfile, authError, fetchStatus };
};
