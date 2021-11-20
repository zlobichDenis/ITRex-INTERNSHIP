import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

import { RadioWrapper, RadioInput } from "./styles";
import moment from "moment";

export const TimeInputRadio = ({ timeValue, selectedTime, ...props }) => {
    const [ field ] = useField(props.field);
    timeValue = moment(timeValue).format('hh:mm A');
    return (
            <RadioWrapper isSelected={selectedTime === timeValue ? true : false} htmlFor={`time-${timeValue}`}>
                <RadioInput 
                    {...field}
                    id={`time-${timeValue}`}
                    name="time" 
                    type="radio" 
                    value={timeValue}/>
                {timeValue}
            </RadioWrapper>
    )
};

TimeInputRadio.propTypes = {
    field: PropTypes.object.isRequired,
    timeValue: PropTypes.string,
    selectedTime: PropTypes.string,
};

