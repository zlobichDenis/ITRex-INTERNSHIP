import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useField } from "formik";

import { selectStyles } from "../../styles";

export const SpecializationSelect = ({
  id,
  options,
  handleReset,
  ...props
}) => {
  const [field, state, { setValue, setTouched }] = useField(props.field);

  const onChange = ({ value }) => {
    handleReset("date", "");
    handleReset("time", "");
    handleReset("doctorName", "");
    setValue(value);
  };

  return (
    <Select
      id={id}
      placeholder="Select occupation"
      styles={selectStyles}
      onChange={onChange}
      onBlur={setTouched}
      options={options}
    />
  );
};

SpecializationSelect.propTypes = {
  handleReset: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  field: PropTypes.object.isRequired,
};
