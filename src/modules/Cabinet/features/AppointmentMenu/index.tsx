import { useState, useCallback } from "react";

import { PersonOptionsSvg } from "assets";
import { PatientData } from "types";
import { useCreateNewResolution, useDeleteAppointment } from "../../hooks";
import { ResolutionForm } from "../../components";
import { AppointmentMenuList, AppointmentMenuListItem, AppointmentOptions } from "./styles";

type AppointmentMenuProps = {
  appointmentID: string,
  patient: PatientData,
}

export function AppointmentMenu({ appointmentID, patient }: AppointmentMenuProps) {
  const [isDisplayMenu, setDisplayMenu] = useState<boolean>(false);
  const [isDisplayCreateResolutionModal, setDisplayCreateResolutionModal] = useState<boolean>(false);
  const { dispatchNewResolution } = useCreateNewResolution(appointmentID);
  const { dispatchDeleteAppointment } = useDeleteAppointment(appointmentID);

  const { first_name: firstName, last_name: lastName } = patient;

  const toggleAppointmentMenu = () => setDisplayMenu(!isDisplayMenu);
  const showCreateResolutionForm = () =>  setDisplayCreateResolutionModal(true);

  const closeCreateResolutionForm = () => {
    setDisplayMenu(false);
    setDisplayCreateResolutionModal(false);
  };

  const deleteAppointment = useCallback(() => {
    setDisplayMenu(false);
    dispatchDeleteAppointment();
  }, [dispatchDeleteAppointment]);
  const createNewResolution = useCallback((resolution: string) => {
    setDisplayMenu(false);
    closeCreateResolutionForm();
    dispatchNewResolution(resolution);
  }, [dispatchNewResolution]);

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
        createNewResolution={createNewResolution}
      />
      <AppointmentMenuList isDisplay={isDisplayMenu}>
        <AppointmentMenuListItem onClick={showCreateResolutionForm}>Create a resolution</AppointmentMenuListItem>
        <AppointmentMenuListItem onClick={deleteAppointment}>Delete</AppointmentMenuListItem>
      </AppointmentMenuList>
    </>
  )
}