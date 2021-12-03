import { Field, useFormikContext, FormikValues } from "formik";

import { AlertMessage } from "components";
import { DatesList } from "./styles";
import { TimeInputRadio } from "./components";
import { fetchAvailableTimes } from "../../redux";
import { useGetFormData } from "modules/AppointmentForm/hooks";

type RequestData = {
  doctorId: string,
  date: string,
}

export function TimeRadioList () {
  const { values } = useFormikContext<FormikValues>();
  let requestData: RequestData = {
    doctorId: values.doctorName,
    date: values.date,
  }
  console.log(values)
  const { availableHours } = useGetFormData(fetchAvailableTimes, requestData, values.date);

  return (
    <DatesList>
      {availableHours ? (
        availableHours.length > 0 ? (
          availableHours.map((hour: string) => (
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
