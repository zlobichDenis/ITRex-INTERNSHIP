import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useField, useFormikContext } from "formik";

import { selectStyles } from "../../styles";
import { fetchDoctorPerSpecialization } from "../../redux";
import { useGetFormData } from "modules/AppointmentForm/redux/hooks";

export const DoctorSelect = ({ id, options, handleReset, ...props }) => {
  const [field, state, { setValue, setTouched }] = useField(props.field);
  const { values } = useFormikContext();
  const { doctors } = useGetFormData(fetchDoctorPerSpecialization, values.occupation)

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
      id={id}
      placeholder="select doctor"
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
