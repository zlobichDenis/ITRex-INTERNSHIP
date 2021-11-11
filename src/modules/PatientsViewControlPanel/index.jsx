import React from "react";

import { SortSelect } from "components";
import { ControlPanel, InputsWrapper } from "modules/styles";
import { ActionButton } from "components";

export const PatientViewControlPanel = () => {
    return (
        <ControlPanel>
            <h3>My Appointments</h3>
            <InputsWrapper>
                <SortSelect />
                    {/* <label className="patient-cabinet__sort-btn" htmlFor="patient-cabinet__sort-type-toggle">
                        <img src={SortSvg} width="21" height="21" alt="icon" />
                    </label>
                    <input type="checkbox" className="patient-cabinet__sort-type-toggle" id="patient-cabinet__sort-type-toggle" />
                    <ul className="patient-cabinet__sort-types-list">
                        <li className="patient-cabinet__sort-types-list-option patient-cabinet__sort-types-list-option_active">by name</li>
                        <li className="patient-cabinet__sort-types-list-option">by date</li>
                    </ul> */}
                <ActionButton textContent="Create an appointment" itsUserPatient={true}/>
            </InputsWrapper>
            {/* <button className="patient-cabinet__appointment-btn"> 
                <img src="img/arrow.svg" alt="arrow" />
                <span>Create an appointment</span>
            </button> */}
        </ControlPanel>
    )
};