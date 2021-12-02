import { useField, FieldHookConfig } from "formik";

import { RadioWrapper, RadioInput } from "./styles";
import moment from "moment";

type TimeRadioProps = {
  timeValue: string,
  selectedTime: string,
  field: FieldHookConfig<string>,
}

export function TimeInputRadio({ timeValue, selectedTime, ...props }: TimeRadioProps) {
  const [field] = useField(props.field);

  return (
    <RadioWrapper isSelected={selectedTime === timeValue ? true : false} htmlFor={`time-${timeValue}`}>
      <RadioInput
        {...field}
        id={`time-${timeValue}`}
        name="time"
        type="radio"
        value={timeValue} />
      {moment(timeValue).format('hh:mm A')}
    </RadioWrapper>
  )
};


