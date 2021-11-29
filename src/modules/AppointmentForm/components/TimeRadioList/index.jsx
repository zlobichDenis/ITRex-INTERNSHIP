import React, { useEffect } from "react";
import { Field, useFormikContext } from "formik";
import { useSelector, useDispatch } from "react-redux";

import { AlertMessage } from "components";
import { DatesList } from "./styles";
import { TimeInputRadio } from "./components";
import { fetchAvailableTimes } from "../../redux";

export const TimeRadioList = () => {
  const dispatch = useDispatch();
  const { availableTimes: availableHours } = useSelector(state => state.createdAppointment);
  const { values } = useFormikContext();

  useEffect(() => {
    if (values.doctorName) {
        dispatch(fetchAvailableTimes({ doctorId: values.doctorName, date: values.date }))
    }
  }, [values.date]);


  return (
    <DatesList>
      {availableHours ? (
        availableHours.length > 0 ? (
          availableHours.map((hour) => (
            <Field
              key={`time-${hour}`}
              name="time"
              component={TimeInputRadio}
              timeValue={hour}
              selectedTime={values.time}
            />
          ))
        ) : (
          <AlertMessage message="Unfortunately, there is no available time on this date. Choose another convenient date for you." />
        )
      ) : null}
    </DatesList>
  );
};
