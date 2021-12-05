import { Formik } from "formik"

import { NameInputSvg, AppointmentSvg, CrossSvg } from "assets"
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
  CancelButtonText
} from "./styles"

export function ResolutionForm() {
  return (
    <ModalContainer>
      <ResolutionFormContainer >

        <ResolutionFormHeader>
          <ResolutionFormTittle>Create Resolution</ResolutionFormTittle>
          <ResolutionFormInfo>
            <img src={NameInputSvg} width="24" height="24" alt="icon"/>
            <PatientName>Mila Western</PatientName>
          </ResolutionFormInfo>
        </ResolutionFormHeader>

        <FieldWrapper>
          <FieldName>Resolution</FieldName>
          <ResolutionFormField type="text" />
        </FieldWrapper>

        <ResolutionFormButtonsWrapper>
          <CancelButton>
            <img src={CrossSvg} width="24" height="24" alt="icon"/>
            <CancelButtonText>Cancel</CancelButtonText>
          </CancelButton>

          <CreateButton>
            <img src={AppointmentSvg} width="24" height="24" alt="icon"/>
            <CreateButtonText>Create</CreateButtonText>
          </CreateButton>
        </ResolutionFormButtonsWrapper>

      </ResolutionFormContainer>
    </ModalContainer>
  )
};