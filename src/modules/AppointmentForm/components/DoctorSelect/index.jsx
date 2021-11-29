import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { useField, useFormikContext } from "formik";

import { getDoctorsBySpezialisations } from "services";
import { selectStyles } from "../../styles";
import { fetchDoctorPerSpecialization } from "../../redux";

export const DoctorSelect = ({ id, options, handleReset, ...props }) => {
  const [field, state, { setValue, setTouched }] = useField(props.field);
  const { values } = useFormikContext();
  const { doctors } = useSelector((state) => state.createdAppointment);
  const dispatch = useDispatch();

  useEffect(() => {
    if (values.occupation) {
        dispatch(fetchDoctorPerSpecialization(values.occupation));
    }
  }, [values.occupation]);

  const getDoctorsById = () => {
    if (doctors) {
      return doctors.map(
        ({ id, first_name: firstName, last_name: lastName }) => ({
          label: `${firstName} ${lastName}`,
          value: id,
        })
      );
    }
  };

  const onChange = ({ value }) => {
    handleReset("date", "");
    handleReset("time", "");
    setValue(value);
  };

  return (
    <Select
      styles={selectStyles}
      onChange={onChange}
      onBlur={setTouched}
      options={getDoctorsById()}
    />
  );
};

DoctorSelect.propTypes = {
  handleReset: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  field: PropTypes.object.isRequired,
};
