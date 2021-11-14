import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useField } from "formik";

import { selectStyles } from "./styles";

export const SelectList = ({ options, id, handleReset, ...props }) => {
    const [ field, state, { setValue, setTouched } ] = useField(props.field);
    const onChange = ({ value }) => {
        if (id === "occupation") {
            handleReset('date', '');
            handleReset('time', '');
            handleReset('doctorName', '');
        } else {
            handleReset('date', '');
            handleReset('time', '');
        }
        setValue(value);
    }

    return (
        <Select 
            styles={selectStyles} 
            onChange={onChange} 
            onBlur={setTouched} 
            options={options}
            />
        )
};

SelectList.propTypes = {
    handleReset: PropTypes.func,
    id: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    field: PropTypes.object.isRequired,
};

