import { SortSvg } from "assets";
import { SortWrapper, SortToggle, SortList, SortListItem } from "./styles";

export function SortSelect () {
  return (
    <SortWrapper>
      <label htmlFor="doctor-cabinet__sort-type-toggle">
        <img width="21" height="21" src={SortSvg} alt="icon" />
      </label>
      <SortToggle id="doctor-cabinet__sort-type-toggle" />
      <SortList>
        <SortListItem>by name</SortListItem>
        <SortListItem>by date</SortListItem>
      </SortList>
    </SortWrapper>
  );
};
