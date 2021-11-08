import React from "react";

import { SortSvg } from "assets";

export const PatientViewControlPanel = () => {
    return (
        <div className="patient-cabinet__search-form">
            <div className="patient-cabinet__input patient-cabinet__input_sort">
                    <label className="patient-cabinet__sort-btn" htmlFor="patient-cabinet__sort-type-toggle">
                        <img src={SortSvg} width="21" height="21" alt="icon" />
                    </label>
                    <input type="checkbox" className="patient-cabinet__sort-type-toggle" id="patient-cabinet__sort-type-toggle" />
                    <ul className="patient-cabinet__sort-types-list">
                        <li className="patient-cabinet__sort-types-list-option patient-cabinet__sort-types-list-option_active">by name</li>
                        <li className="patient-cabinet__sort-types-list-option">by date</li>
                    </ul>
            </div>
            <button className="patient-cabinet__appointment-btn"> 
                <img src="img/arrow.svg" alt="arrow" />
                <span>Create an appointment</span>
            </button>
        </div>
    )
};