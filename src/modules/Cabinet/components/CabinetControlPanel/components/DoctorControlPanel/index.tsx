import { SearchInput} from "components";
import { Tittle } from "elements";
import { SortSelect } from "modules/Cabinet/components";
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
