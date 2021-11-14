import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

import { RadioWrapper, RadioInput } from "./styles";

export const TimeInputRadio = ({ timeValue, selectedTime, ...props }) => {
    const [ field, state, { setValue } ] = useField(props.field);
    
    return (
        <RadioWrapper isSelected={selectedTime === timeValue ? true : false}>
            <label htmlFor={`time-${timeValue}`}>{timeValue}</label>
            <RadioInput 
                {...field}
                id={`time-${timeValue}`}
                name="time" 
                type="radio" 
                value={timeValue}/>
        </RadioWrapper>
    )
};

TimeInputRadio.propTypes = {
    field: PropTypes.object.isRequired,
    timeValue: PropTypes.string,
    selectedTime: PropTypes.string,
};

