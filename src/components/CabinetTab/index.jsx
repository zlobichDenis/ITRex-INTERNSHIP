import React from "react";
import PropTypes from "prop-types";

import { Tab } from "./styles";

export const CabinetTab = ({ text }) => {
    return (
        <li>
            <Tab isActive={false}>
                <span>{text}</span>
            </Tab>
        </li>
    )
};

CabinetTab.propTypes = {
    text: PropTypes.string.isRequired,
};