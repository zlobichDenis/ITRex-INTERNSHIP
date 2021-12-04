import Select from "react-select";
import { useField, useFormikContext, FormikHandlers, FieldHookConfig, FormikValues, FieldProps } from "formik";

import { selectStyles } from "../../styles";
import { fetchDoctorPerSpecialization } from "../../redux";
import { useGetFormData } from "modules/AppointmentForm/hooks";

type DoctorSelectProps = {
  id: string,
  handleReset(name: string, value: string): FormikHandlers,
  field: FieldHookConfig<string>,
}

export function DoctorSelect ({ id, handleReset, ...props }: DoctorSelectProps & FieldProps) {
  const [field, state, { setValue }] = useField(props.field);

  const { values } = useFormikContext<FormikValues>();
  const { doctors } = useGetFormData(fetchDoctorPerSpecialization, values.occupation, values.occupation)

  const getDoctorsById = () => {
    if (doctors) {
      return doctors.map(
        ({ id, first_name: firstName, last_name: lastName }) => ({
          label: `${firstName} ${lastName}`,
          value: id,
        })
      );
    }
  };

  const onChange = ({ value }: any) => {
    handleReset("date", "");
    handleReset("time", "");
    setValue(value);
  };

  return (
    <Select
      id={id}
      placeholder="Select doctor"
      styles={selectStyles}
      onChange={onChange}
      options={getDoctorsById()}
    />
  );
};

