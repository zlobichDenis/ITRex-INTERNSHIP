import { useCallback } from "react";
import { useSelector, useDispatch  } from "react-redux";

import { fetchLogin, fetchRegistration } from "..";

export const useAuthentification = () => {
  const dispatch = useDispatch();
  const { userProfile, fetchStatus } = useSelector((state) => state.user);

  const loginRequest = useCallback((userData) => {
    dispatch(fetchLogin(userData))
  }, [dispatch]);

  const registrationRequest = useCallback((userData) => {
    dispatch(fetchRegistration(userData))
  }, [dispatch]);

  return { userProfile, fetchStatus, registrationRequest, loginRequest };
};
