import { FormikHandlers, FieldHookConfig, useField } from "formik";
import Select from "react-select";


import { selectStyles } from "../../styles";

type SpecializationSelectProps = {
  id: string,
  options: Array<object>, 
  handleReset(fieldName: string, value: string): FormikHandlers,
  field: FieldHookConfig<string>,
}

export function SpecializationSelect({
  id, options, handleReset, ...props
}: SpecializationSelectProps) {
  const [field, state, { setValue, setTouched }] = useField(props.field);

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
      options={options} />
  );
}

