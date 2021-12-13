import { useState, MouseEventHandler } from "react";

import { SortSvg } from "assets";
import { SortWrapper, SortToggle, SortList, SortListItem } from "./styles";

type SortSelectProps = {
  fetchSortAppointmentsByName: MouseEventHandler,
  fetchSortAppointmentsByDate: MouseEventHandler,
}

export function SortSelect ({ fetchSortAppointmentsByName, fetchSortAppointmentsByDate }: SortSelectProps) {
  const [isDisplaySortList, setDisplaySortList] = useState<boolean>(false);

  const toggleVisibleSortList = () => setDisplaySortList(!isDisplaySortList);

  return (
    <SortWrapper>
      <label onClick={toggleVisibleSortList} htmlFor="doctor-cabinet__sort-type-toggle">
        <img width="21" height="21" src={SortSvg} alt="icon" />
      </label>
      <SortToggle id="doctor-cabinet__sort-type-toggle" />
      <SortList isDisplay={isDisplaySortList}>
        <SortListItem onClick={fetchSortAppointmentsByName}>by name</SortListItem>
        <SortListItem onClick={fetchSortAppointmentsByDate}>by date</SortListItem>
      </SortList>
    </SortWrapper>
  );
};
