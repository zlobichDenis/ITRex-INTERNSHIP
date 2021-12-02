import { Field, useFormikContext } from "formik";

import { AlertMessage } from "components";
import { DatesList } from "./styles";
import { TimeInputRadio } from "./components";
import { fetchAvailableTimes } from "../../redux";
import { useGetFormData } from "modules/AppointmentForm/redux/hooks";

type RequestData = {
  doctorId: string,
  date: string,
}

export const TimeRadioList = () => {
  const { values }: any = useFormikContext();
  let requestData: RequestData = {
    doctorId: values.doctorName,
    date: values.data,
  }
  const { availableHours } = useGetFormData(fetchAvailableTimes, requestData);

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
