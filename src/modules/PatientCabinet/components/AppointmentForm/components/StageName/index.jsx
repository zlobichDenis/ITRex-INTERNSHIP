import React from "react";
import PropTypes from "prop-types";

import { OrdinaryText } from "elements";
import { StageTittle } from "./styles";


export const StageName = ({ icon, text }) => {
    return (
        <StageTittle >
            <img width="32" height="32" src={icon} alt="step-2" />
            <OrdinaryText>{text}</OrdinaryText>
        </StageTittle>
    )
};

StageName.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}