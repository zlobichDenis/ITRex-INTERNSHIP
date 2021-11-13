import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useField } from "formik";

import { selectStyles } from "./styles";

export const SelectList = ({ options, ...props }) => {
    const [ field, state, { setValue, setTouched } ] = useField(props.field);
    const onChange = ({ value }) => {
        setValue(value);
    }

    return <Select styles={selectStyles} onChange={onChange} onBlur={setTouched} options={options}/>
};

SelectList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    field: PropTypes.object.isRequired,
};

