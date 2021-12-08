import { useState, useCallback } from "react";

import { PersonOptionsSvg } from "assets";
import { useAppDispatch } from "store";
import { deleteAppointment } from "modules/Cabinet/redux";
import { AppointmentMenuList, AppointmentMenuListItem, AppointmentOptions } from "./styles";

type AppointmentMenuProps = {
  appointmentId: string,
}

export function AppointmentMenu({ appointmentId }: AppointmentMenuProps) {
  const dispatch = useAppDispatch();
  const [ isDisplayMenu, setDisplayMenu ] = useState<boolean>(false);
  const toggleAppointmentMenu = () => setDisplayMenu(!isDisplayMenu);

  const dispatchDeletingAppointment = useCallback(() => {
    setDisplayMenu(false);
    dispatch(deleteAppointment(appointmentId));
  }, [dispatch])

  return (
    <>
      <AppointmentOptions onClick={toggleAppointmentMenu}>
        <img src={PersonOptionsSvg} width="21" height="21" alt="icon" />
      </AppointmentOptions>
      <AppointmentMenuList isDisplay={isDisplayMenu}>
        <AppointmentMenuListItem>Create a resolution</AppointmentMenuListItem>
        <AppointmentMenuListItem>Edit an appointment</AppointmentMenuListItem>
        <AppointmentMenuListItem onClick={dispatchDeletingAppointment}>Delete</AppointmentMenuListItem>
      </AppointmentMenuList>
    </>
  )
};