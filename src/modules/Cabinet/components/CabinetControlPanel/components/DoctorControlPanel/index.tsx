import { SearchInput, SortSelect } from "components";
import { Tittle } from "elements";
import { InputsWrapper } from "../styles";

export function DoctorViewControlPanel() {
  return (
    <>
      <Tittle>My Patients</Tittle>
      <InputsWrapper>
        <SearchInput />
        <SortSelect />
      </InputsWrapper>
    </>
  );
};
