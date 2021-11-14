import React from "react";
import PropTypes from "prop-types";
import { Formik, Field } from "formik";
import { connect } from "react-redux";

import { NumberOneSvg, NumberTwoSvg, NumberThreeSvg } from "assets";
import { appointmentSchema } from "core";
import { CreateAppointmentForm,
        StageCreatingWrapper,
        InputWrapper,
        InputLabel,
        DatesList } from "./styles";
import { ActionButton, AlertMessage, AuthTextInput } from "components";
import { SelectList, TimeInputRadio, VisitCalendar, StageName } from "./components";

const AppointmentFormComponent = ({ doctors }) => {

    const occupations = doctors
        .reduce((acc, { occupation }) => {
            if (!acc.includes(occupation)) {
                return [...acc, occupation];
            }
            return acc }, [])
        .map((occupation) => ({
                value: occupation,
                label: occupation,
            }));

    const getFilteredDoctorsByOccupation = (doctorOccupation) => {
        if (doctorOccupation) {
            return doctors
                .filter(({ occupation }) => occupation === doctorOccupation)
                .map(({ firstName, lastName, id }) => ({
                    label: `${firstName} ${lastName}`,
                    value: id,
                }));
        }
        return doctors.map(({ firstName, lastName, id }) => ({
            label: `${firstName} ${lastName}`,
            value: id,
        }));
    };

    const getAvailableTime = (doctorsId) => {
        return Object.key(doctors.find(({ id }) => id === doctorsId).availableTime)
    };

    return (
        <Formik
            initialValues={{
                date: "",
                time: "",
                occupation: "",
                doctorName: "",
                reason: "",
                note: "",
            }}
            validationSchema={appointmentSchema}
            validateOnBlur={false}
            onSubmit={() => console.log(values)}
            >
            {({ values, errors, touched, handleSubmit, setFieldValue }) => (
                console.log(values),
                <CreateAppointmentForm onSubmit={handleSubmit}>

                <StageCreatingWrapper>
                        <StageName icon={NumberOneSvg} text="Select a doctor and define the reason of your visit"/>

                        <InputWrapper>
                            <InputLabel>Occupation</InputLabel>
                            <Field component={SelectList} name="occupation" id="occupation" options={occupations} handleReset={setFieldValue}/>
                            {errors.occupation && touched.occupation
                                ? <AlertMessage message={errors.occupation} />
                                : null}
                        </InputWrapper>

                        <InputWrapper>
                            <InputLabel>Doctors name</InputLabel>
                            <Field component={SelectList} name="doctorName" type="radio" id="doctorName" options={getFilteredDoctorsByOccupation(values.occupation)} handleReset={setFieldValue} />
                            {errors.doctorName && touched.doctorName
                                ? <AlertMessage message={errors.doctorName} />
                                : null}
                        </InputWrapper>

                        <InputWrapper>
                            <InputLabel>Reason for the visit</InputLabel>
                            <Field component={AuthTextInput} name="reason" id="reason"/>
                            {errors.reason && touched.reason
                                ? <AlertMessage message={errors.reason} />
                                : null}
                        </InputWrapper>

                        <InputWrapper>
                            <InputLabel>Note</InputLabel>
                            <Field component={AuthTextInput} name="note" id="note"/>
                        </InputWrapper>
                    </StageCreatingWrapper>

                    <StageCreatingWrapper>
                        <StageName icon={NumberTwoSvg} text="Choose a day for an appointment"/>
                        { values.doctorName && values.occupation
                            ? <Field name="date" id="date" availableDates={getAvailableTime(values.doctorName)} component={VisitCalendar} handleReset={setFieldValue}/>
                            : <AlertMessage message="Choose a doctor first"/>}
                    </StageCreatingWrapper>

                    <StageCreatingWrapper>
                        <StageName icon={NumberThreeSvg} text="Select an available timeslot"/>
                            <DatesList>
                                {values.doctorName && values.date && values.occupation
                                    ? getAvailableTime(values.doctorName)[values.date].map((time) => (
                                        <Field key={`time-${time}`} name="time" component={TimeInputRadio} timeValue={time} selectedTime={values.time}/>
                                    ))
                                    : <AlertMessage message="Select a date and doctor first"/>}
                            </DatesList>
                    </StageCreatingWrapper>

                    <ActionButton type="submit" textContent="Submit" itsUserView icon={null} />
                </CreateAppointmentForm>
            )}
        </Formik>
    )
};

AppointmentFormComponent.propTypes = {
    doctors: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
        doctors: state.doctors,
    })
};

export const AppointmentForm = connect(mapStateToProps, {})(AppointmentFormComponent);