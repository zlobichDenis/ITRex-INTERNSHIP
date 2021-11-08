import React from "react";

import { SearchSvg } from "assets";

function SearchInput() {
    return (
        <div className="doctor-cabinet__input doctor-cabinet__input_search">
            <img width="21" height="21" src={SearchSvg} alt="icon" />
            <input type="checkbox" className="doctor-cabinet__search-toggle" />                                     
            <input placeholder="Search" id="doctor-cabinet__search-field" className="doctor-cabinet__search-field" type="search" />
        </div>
    )
};

export { SearchInput };