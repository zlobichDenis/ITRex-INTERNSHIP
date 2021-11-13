import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const VisitCalendar = ({ ...props }) => {
  const [ field, state, { setValue, setTouched } ] = useField(props.field);
  const onChange = ( value ) => {
    setValue(value)
  };

  return (
    <DatePicker 
      {...field} 
      onChange={onChange} 
      inline 
      />
  );
}

VisitCalendar.propTypes = {
  field: PropTypes.object,
};