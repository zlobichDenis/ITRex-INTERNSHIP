import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import Loader from "react-loader-spinner";

import { NumberOneSvg, NumberTwoSvg, NumberThreeSvg } from "assets";
import { useRequestAlert, appointmentSchema } from "core";
import { getAllSpecializations } from "services";
import { colors } from "styles";
import {
  CreateAppointmentForm,
  StageCreatingWrapper,
  InputWrapper,
  InputLabel,
} from "../../styles";
import { ActionButton, AlertMessage, AuthTextInput, Notification } from "components";
import { SelectList, VisitCalendar, StageName, TimeRadioList } from "..";
import { useCreateAppointment } from "../../redux";
import { FetchStatus } from "const";

export const AppointmentForm = () => {
  const [allSpecializations, setAllSpecializations] = useState(null);
  const { createAppointment, fetchStatus } = useCreateAppointment();
  const { isShowingNotification, closeNotificationHandle } = useRequestAlert(fetchStatus);

  useEffect(() => {
    getAllSpecializations().then((responce) =>
      setAllSpecializations(responce.data)
    );
  }, []);

  const getSpezialisationsOptions = () => {
    return allSpecializations.map(({ id, specialization_name }) => ({
      value: id,
      label: specialization_name,
    }));
  };
  console.log(fetchStatus)
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
                component={SelectList}
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
                component={SelectList}
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
              <AlertMessage message="Choose a doctor first" />
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
              <AlertMessage message="Select a date and doctor first" />
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
                icon={null}
              />}

          <Notification
            fetchStatus={fetchStatus}
            closeNotificationHandle={closeNotificationHandle}
            isShow={isShowingNotification}
            message={
              fetchStatus === FetchStatus.SUCCESS
                ? "Success Authorization"
                : "Something going wrong"
            }
          />
        </CreateAppointmentForm>
      )}
    </Formik>
  ) : (
    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
  );
};
