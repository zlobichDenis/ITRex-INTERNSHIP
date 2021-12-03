import { useField, FormikHandlers, FieldHookConfig } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import "./calendar.css";

type VisiCalendarProps = {
  availableDates: Array<object>, 
  handleReset(fieldName: string, value: string): FormikHandlers,
  field: FieldHookConfig<string>,
}

export function VisitCalendar({ availableDates, handleReset, ...props }: VisiCalendarProps) {
  const [field, state, { setValue }] = useField(props.field);
  const onChange = (value: any) => {
    handleReset('time', '');
    setValue(moment(value).toISOString());
  };

  return (
    <DatePicker
      {...field}
      onChange={(event) => {
        console.log(event)
        onChange(event)
      }}
      inline />
  );
}
