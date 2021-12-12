import React from "react";
import { Field, Formik } from "formik";

import { NameInputSvg, AppointmentSvg, CrossSvg } from "assets"
import { AlertMessage } from "components";
import {
  ModalContainer,
  ResolutionFormContainer,
  ResolutionFormTittle,
  ResolutionFormInfo,
  ResolutionFormHeader,
  FieldWrapper,
  PatientName,
  FieldName,
  ResolutionFormField,
  ResolutionFormButtonsWrapper,
  CreateButton,
  CreateButtonText,
  CancelButton,
  CancelButtonText,
} from "./styles"
import { resolutionFormSсhema } from "modules/Cabinet/schemes";

type ResolutionFormProps = {
  createNewResolution(resolution: string): void,
  closeHandle(): void,
  isDisplay: boolean,
  firstName: string,
  lastName: string,
}

type ResolutionFormValues = {
  resolution: string,
};

export function ResolutionForm(
  {
    createNewResolution,
    isDisplay,
    closeHandle,
    lastName,
    firstName
  }: ResolutionFormProps) {
  const initialValues: ResolutionFormValues = {
    resolution: "",
  }

  return (
    <ModalContainer isDisplay={isDisplay}>

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
                onClick={() => {
                  closeHandle();
                }}>
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

    </ModalContainer>
  )
};