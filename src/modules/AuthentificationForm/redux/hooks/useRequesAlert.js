import { useState, useEffect } from "react";

import { FetchStatus } from "const";


export const useRequestAlert = (fetchStatus) => {
  const [ isShowingNotification, setShowingNotification ] = useState(); 
  const closeNotificationHandle = () => {
    setShowingNotification(false);
  };

  const showNotificationHandle = () => {
    setShowingNotification(true);
  };

  useEffect(() => {
    if(fetchStatus !== FetchStatus.PENDING && fetchStatus) {
      showNotificationHandle();
    } else {
      closeNotificationHandle();
    }
  }, [fetchStatus]);

  return { isShowingNotification, closeNotificationHandle, showNotificationHandle };
};
