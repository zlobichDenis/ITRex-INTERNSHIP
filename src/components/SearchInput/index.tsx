import { SearchSvg } from "assets";
import { SearchWrapper, SearchField } from "./styles";

export function SearchInput() {
  return (
    <SearchWrapper>
      <img width="21" height="21" src={SearchSvg} alt="icon" />
      <SearchField
        placeholder="Search"
        id="doctor-cabinet__search-field"
        type="search"
      />
    </SearchWrapper>
  );
};
