import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useField, useFormikContext } from "formik";

import { getDoctorsBySpezialisations } from "services";
import { selectStyles } from "./styles";

export const SelectList = ({ id, options, handleReset, ...props }) => {
    const [ doctors, setDoctors ] = useState(null);
    const [ field, state, { setValue, setTouched } ] = useField(props.field);
    const { values } = useFormikContext();

    useEffect(() => {
        if (values.occupation) {
            getDoctorsBySpezialisations(values.occupation)
                .then((responce) => setDoctors(responce.data))
                .then(() => getDoctorsById())
        } 
    }, [values.occupation])

    const getDoctorsById = () => {
        if (id === 'occupation') {
            return options;
        } else {
            if (doctors) {
                return doctors.map(({ id, first_name: firstName, last_name: lastName }) => ({
                    label: `${firstName} ${lastName}`,
                    value: id,
                }))
            }
        }
    }
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
            options={getDoctorsById()}
            />
        )
};

SelectList.propTypes = {
    handleReset: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    field: PropTypes.object.isRequired,
};

