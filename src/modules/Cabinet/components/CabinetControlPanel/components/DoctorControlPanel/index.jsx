import React from "react";

import { SearchInput, SortSelect } from "components";
import { Tittle } from "elements";
import { InputsWrapper } from "../styles";

export const DoctorViewControlPanel = () => {
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
