import { useState, useCallback } from "react";

import { PersonOptionsSvg } from "assets";
import { useAppDispatch } from "store";
import { PatientData } from "types";
import { ResolutionForm } from "../ResolutionForm";
import { deleteAppointment, createResolution } from "modules/Cabinet/redux";
import { AppointmentMenuList, AppointmentMenuListItem, AppointmentOptions } from "./styles";

type AppointmentMenuProps = {
  appointmentID: string,
  patient: PatientData,
}

export function AppointmentMenu({ appointmentID, patient }: AppointmentMenuProps) {
  const [isDisplayMenu, setDisplayMenu] = useState<boolean>(false);
  const [isDisplayCreateResolutionModal, setDisplayCreateResolutionModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { first_name: firstName, last_name: lastName } = patient;

  const toggleAppointmentMenu = () => setDisplayMenu(!isDisplayMenu);
  const showCreateResolutionForm = () =>  setDisplayCreateResolutionModal(true);
  const closeCreateResolutionForm = () => {
    setDisplayMenu(false);
    setDisplayCreateResolutionModal(false);
  };

  const dispatchDeletingAppointment = useCallback(() => {
    setDisplayMenu(false);
    dispatch(deleteAppointment(appointmentID));
  }, [dispatch]);

  const dispatchNewResolution = useCallback((resolution: string) => {
    setDisplayMenu(false);
    closeCreateResolutionForm();
    dispatch(createResolution({ resolution, appointmentID }))
  }, [dispatch]);

  return (
    <>
      <AppointmentOptions onClick={toggleAppointmentMenu}>
        <img src={PersonOptionsSvg} width="21" height="21" alt="icon" />
      </AppointmentOptions>
      <ResolutionForm 
        firstName={firstName} 
        lastName={lastName} 
        closeHandle={closeCreateResolutionForm} 
        isDisplay={isDisplayCreateResolutionModal} 
        createNewResolution={dispatchNewResolution} />
        
      <AppointmentMenuList isDisplay={isDisplayMenu}>
        <AppointmentMenuListItem onClick={showCreateResolutionForm}>Create a resolution</AppointmentMenuListItem>
        <AppointmentMenuListItem onClick={dispatchDeletingAppointment}>Delete</AppointmentMenuListItem>
      </AppointmentMenuList>
    </>
  )
};