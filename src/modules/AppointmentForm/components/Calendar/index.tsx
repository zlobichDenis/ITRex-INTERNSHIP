import { useField, FormikHandlers, FieldHookConfig, FieldProps } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import "./calendar.css";

type VisiCalendarProps = {
  availableDates: Array<object>, 
  handleReset(fieldName: string, value: string): FormikHandlers,
  field: FieldHookConfig<string>,
}

export function VisitCalendar ({ availableDates, handleReset, ...props }: VisiCalendarProps & FieldProps) {
  const [field, , { setValue }] = useField(props.field);
  const onChange = (value: any) => {
    handleReset('time', '');
    setValue(moment(value).toISOString());
  };

  return (
    <DatePicker
      {...field}
      onChange={(event) => onChange(event)}
      inline />
  );
}
