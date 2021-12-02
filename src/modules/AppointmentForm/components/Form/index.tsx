import { Formik, Field } from "formik";
import Loader from "react-loader-spinner";

import { NumberOneSvg, NumberTwoSvg, NumberThreeSvg } from "assets";
import { appointmentSchema } from "core";
import { colors } from "styles";
import { FetchStatus } from "const";
import { ActionButton, AlertMessage, AuthTextInput } from "components";
import {
  CreateAppointmentForm,
  StageCreatingWrapper,
  InputWrapper,
  InputLabel,
} from "../../styles";
import { VisitCalendar, StageName, TimeRadioList, DoctorSelect, SpecializationSelect } from "..";
import { useCreateAppointment, fetchSpecializations } from "../../redux";
import { useGetFormData } from "modules/AppointmentForm/redux/hooks";


export const AppointmentForm = () => {
  const { allSpecializations } = useGetFormData(fetchSpecializations);
  const { createAppointment, fetchStatus } = useCreateAppointment();

  const getSpezialisationsOptions = () => {
    if(allSpecializations) {
      return allSpecializations.map(({ id, specialization_name }) => ({
        value: id,
        label: specialization_name,
      }));
    }
  };

  return allSpecializations ? (
    <Formik
      initialValues={{
        date: "",
        time: "",
        occupation: "",
        doctorName: "",
        reason: "",
        note: "",
      }}
      initialErrors={{
        occupation: "Select a doctor and define the reason of your visit",
      }}
      validationSchema={appointmentSchema}
      validateOnBlur={false}
      onSubmit={(values) => {
        createAppointment(values);
      }}
    >
      {({ values, errors, touched, handleSubmit, setFieldValue, isValid }) => (
        <CreateAppointmentForm onSubmit={handleSubmit}>
          <StageCreatingWrapper>
            <StageName
              icon={NumberOneSvg}
              text="Select a doctor and define the reason of your visit"
            />

            <InputWrapper>
              <InputLabel>Occupation</InputLabel>
              <Field
                component={SpecializationSelect}
                name="occupation"
                id="occupation"
                options={getSpezialisationsOptions()}
                handleReset={setFieldValue}
              />
              {errors.occupation && touched.occupation ? (
                <AlertMessage message={errors.occupation} />
              ) : null}
            </InputWrapper>

            <InputWrapper>
              <InputLabel>Doctors name</InputLabel>
              <Field
                component={DoctorSelect}
                name="doctorName"
                type="radio"
                id="doctorName"
                handleReset={setFieldValue}
              />
              {errors.doctorName && touched.doctorName ? (
                <AlertMessage message={errors.doctorName} />
              ) : null}
            </InputWrapper>

            <InputWrapper>
              <InputLabel>Reason for the visit</InputLabel>
              <Field component={AuthTextInput} name="reason" id="reason" />
              {errors.reason && touched.reason ? (
                <AlertMessage message={errors.reason} />
              ) : null}
            </InputWrapper>

            <InputWrapper>
              <InputLabel>Note</InputLabel>
              <Field component={AuthTextInput} name="note" id="note" />
            </InputWrapper>
          </StageCreatingWrapper>

          <StageCreatingWrapper>
            <StageName
              icon={NumberTwoSvg}
              text="Choose a day for an appointment"
            />
            {values.doctorName && values.occupation ? (
              <Field
                name="date"
                id="date"
                component={VisitCalendar}
                handleReset={setFieldValue}
              />
            ) : (
              <AlertMessage role="no-calendar-message" message="Choose a doctor first" />
            )}
          </StageCreatingWrapper>

          <StageCreatingWrapper>
            <StageName
              icon={NumberThreeSvg}
              text="Select an available timeslot"
            />
            {values.doctorName && values.occupation && values.date ? (
              <TimeRadioList />
            ) : (
              <AlertMessage role="no-date-and-doctor" message="Select a date and doctor first" />
            )}
          </StageCreatingWrapper>

          {fetchStatus === FetchStatus.PENDING
           ? <Loader
              type="Puff"
              color={colors.TEXT_LINK_COLOR}
              height={50}
              width={50}
              timeout={3000}
            />
            : <ActionButton
                isDisabled={isValid}
                type="submit"
                textContent="Submit"
                itsUserView
              />}

        </CreateAppointmentForm>
      )}
    </Formik>
  ) : (
    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
  );
};
