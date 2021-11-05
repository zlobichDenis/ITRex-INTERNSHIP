import React from "react";
import { SearchInput } from "../../ui/search-input/search-input";
import { SortSelect } from "../../ui/sort-select/sort-select";

export const DoctorViewControlPanel = () => {
    return (
        <div className="doctor-cabinet__control-panel">
        <h3>My Patients</h3>
        <div className="doctor-cabinet__search-form">
            <SearchInput />
            <SortSelect />
        </div>
    </div>
    )
};