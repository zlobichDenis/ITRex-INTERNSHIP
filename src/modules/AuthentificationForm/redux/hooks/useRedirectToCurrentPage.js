import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { fetchUserProfile } from "modules/AuthentificationForm/redux";
import { AppScreens } from "routes";

export const useRedirectToCurrentPage = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    useEffect(() => {
        if (user) {
            switch (user.role_name) {
                case 'Patient':
                    history.push(AppScreens.PATIENT_VIEW);
                    break;
                case 'Doctor':
                    history.push(AppScreens.DOCTOR_VIEW)
                    break;
            }
        }
    }, [user]);

    const setUserProfile = useCallback((userData, requestType) => {
        dispatch(fetchUserProfile({ userData, requestType }))
    }, [dispatch]);

    return { setUserProfile }
};

