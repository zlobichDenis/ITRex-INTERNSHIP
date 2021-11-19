import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export const VisitCalendar = ({ availableDates, handleReset, ...props }) => {
  const [ field, state, { setValue, setTouched } ] = useField(props.field);

  const onChange = (value) => {
    handleReset('time', '');
    setValue(moment(value).toISOString())
  };

  return (
      <DatePicker 
        {...field} 
        onBlur={setTouched}
        onChange={onChange} 
        inline 
        />
  );
}

VisitCalendar.propTypes = {
  handleReset: PropTypes.func,
  field: PropTypes.object,
  availableDates: PropTypes.arrayOf(PropTypes.string),
};