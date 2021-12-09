import { useState, useCallback } from "react";

import { SortSvg } from "assets";
import { useAppDispatch } from "store";
import { appointmentsPagination } from "const";
import { SortWrapper, SortToggle, SortList, SortListItem } from "./styles";
import { fetchDoctorAppointments } from "../../redux";
import { DoctorCabinetSortTypes } from "../../const";


export function SortSelect () {
  const [isDisplaySortList, setDisplaySortList] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const toggleVisibleSortList = () => setDisplaySortList(!isDisplaySortList);
  const closeSortList = () => setDisplaySortList(false);

  const getAppointmentsByLastName = useCallback(() => {
    closeSortList();
    dispatch(fetchDoctorAppointments({ ...appointmentsPagination, ...DoctorCabinetSortTypes.LAST_NAME }));
  }, [dispatch]);
  const getAppointmentsByDate = useCallback(() => {
    closeSortList();
    dispatch(fetchDoctorAppointments({ ...appointmentsPagination, ...DoctorCabinetSortTypes.DATE }));
  }, [dispatch]);

  return (
    <SortWrapper>
      <label onClick={toggleVisibleSortList} htmlFor="doctor-cabinet__sort-type-toggle">
        <img width="21" height="21" src={SortSvg} alt="icon" />
      </label>
      <SortToggle id="doctor-cabinet__sort-type-toggle" />
      <SortList isDisplay={isDisplaySortList}>
        <SortListItem onClick={getAppointmentsByLastName}>by name</SortListItem>
        <SortListItem onClick={getAppointmentsByDate}>by date</SortListItem>
      </SortList>
    </SortWrapper>
  );
};
