import { FormikHandlers, FieldHookConfig, useField, FieldProps } from "formik";
import Select from "react-select";
import { useGetFormData } from "modules/AppointmentForm/hooks";

import { fetchSpecializations } from "modules/AppointmentForm/redux";
import { selectStyles } from "../../styles";


type SpecializationSelectProps = {
  id: string,
  options?: Array<object>, 
  handleReset(fieldName: string, value: string): FormikHandlers,
  field: FieldHookConfig<string>,
}

export function SpecializationSelect({
  id, options, handleReset, ...props
}: SpecializationSelectProps & FieldProps) {
  const [, , { setValue }] = useField(props.field);
  const { allSpecializations } = useGetFormData(fetchSpecializations);

  const getSpezialisationsOptions = () => {
    if (allSpecializations) {
      return allSpecializations.map(({ id, specialization_name }) => ({
        value: id,
        label: specialization_name,
      }));
    }
  };

  const onChange = ({ value }: any) => {
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
      options={getSpezialisationsOptions()} />
  );
}

