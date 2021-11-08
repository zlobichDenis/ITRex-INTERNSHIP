import React from "react";

import { SortSvg } from "assets";

export const SortSelect = () => {
    return (
        <div className="doctor-cabinet__input doctor-cabinet__input_sort">
            <label className="doctor-cabinet__sort-btn" htmlFor="doctor-cabinet__sort-type-toggle">
                <img width="21" height="21" src={SortSvg} alt="icon" />
            </label>
            <input type="checkbox" className="doctor-cabinet__sort-type-toggle" id="doctor-cabinet__sort-type-toggle" />
            <ul className="doctor-cabinet__sort-types-list">
                <li className="doctor-cabinet__sort-types-list-option doctor-cabinet__sort-types-list-option_active">by name</li>
                <li className="doctor-cabinet__sort-types-list-option">by date</li>
            </ul>
        </div>
    )
};
