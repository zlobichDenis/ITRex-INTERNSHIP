import React from "react";
import PropTypes from "prop-types";

import { RadioWrapper, RadioInput } from "./styles";

export const TimeInputRadio = ({ field, timeValue }) => {
    return (
        <RadioWrapper>
            <label htmlFor="time">{timeValue}</label>
            <RadioInput 
                {...field}
                id="time"
                name="time" 
                type="checkbox" 
                value={timeValue}/>
        </RadioWrapper>
    )
};

TimeInputRadio.propTypes = {
    field: PropTypes.object.isRequired,
    timeValue: PropTypes.string,
};

