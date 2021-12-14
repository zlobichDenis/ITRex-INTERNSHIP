import { Field, Formik } from "formik";

import { AppointmentSvg, CrossSvg, NameInputSvg } from "assets";
import { AlertMessage } from "components";
import {
  CancelButton,
  CancelButtonText,
  CreateButton,
  CreateButtonText,
  FieldName,
  FieldWrapper,
  PatientName,
  ResolutionFormButtonsWrapper,
  ResolutionFormContainer,
  ResolutionFormField,
  ResolutionFormHeader,
  ResolutionFormInfo,
  ResolutionFormTittle
} from "../styles";
import { resolutionFormSсhema } from "../../schemes";


type ResolutionFormProps = {
  createNewResolution(resolution: string): void,
  closeHandle(): void,
  firstName: string,
  lastName: string,
}

type ResolutionFormValues = {
  resolution: string,
};

export const CreateResolutionForm = (
  { createNewResolution,
    closeHandle,
    lastName,
    firstName,
  }: ResolutionFormProps) => {
  const initialValues: ResolutionFormValues = {
    resolution: "",
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={resolutionFormSсhema}
      onSubmit={(values) => createNewResolution(values.resolution)}
    >
      {({
          errors,
          touched,
          handleSubmit,
          handleChange
        }) => (
        <ResolutionFormContainer onSubmit={handleSubmit}>
          <ResolutionFormHeader>
            <ResolutionFormTittle>Create Resolution</ResolutionFormTittle>
            <ResolutionFormInfo>
              <img src={NameInputSvg} width="24" height="24" alt="icon"/>
              <PatientName>{firstName} {lastName}</PatientName>
            </ResolutionFormInfo>
          </ResolutionFormHeader>

          <FieldWrapper>
            <FieldName>Resolution</FieldName>
            <Field
              component={ResolutionFormField}
              onChange={handleChange}
              type="text"
              id="resolution"
              name="resolution"/>
            {errors.resolution && touched.resolution ? (
              <AlertMessage position="unset" message={errors.resolution}/>
            ) : null}
          </FieldWrapper>

          <ResolutionFormButtonsWrapper>
            <CancelButton
              onClick={closeHandle}>
              <img src={CrossSvg} width="24" height="24" alt="icon"/>
              <CancelButtonText>Cancel</CancelButtonText>
            </CancelButton>

            <CreateButton type="submit">
              <img src={AppointmentSvg} width="24" height="24" alt="icon"/>
              <CreateButtonText>Create</CreateButtonText>
            </CreateButton>
          </ResolutionFormButtonsWrapper>
        </ResolutionFormContainer>
      )}
    </Formik>
  )
}