import { useState } from "react";

export const useAuthentificationAlert = () => {
  const [ isShowingNotification, setShowingNotification ] = useState(false);    

  const closeNotificationHandle = () => {
    setShowingNotification(false);
  };

  const showNotificationHandle = () => {
    setShowingNotification(true);
  };

  return { isShowingNotification, closeNotificationHandle, showNotificationHandle };
};
