import React from "react";
import PropTypes from "prop-types";
import { Formik, Field } from "formik";
import { connect } from "react-redux";

import { NumberOneSvg, NumberTwoSvg, NumberThreeSvg } from "assets";
import { OrdinaryText } from "elements";
import { appointmentSchema } from "core";
import { CreateAppointmentForm,
        StageCreatingWrapper,
        StageName,
        InputWrapper,
        InputLabel,
        DatesList } from "./styles";
import { ActionButton, AlertMessage, AuthTextInput } from "components";
import { SelectList, TimeInputRadio, VisitCalendar } from "./components";

export const AppointmentFormComponent = ({ doctors }) => {

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

    const getFilteredDoctors = (doctorOccupation) => {
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

    const getAvailableTimes = (doctorsId) => {
        console.log(doctors.find(({ id }) => id === doctorsId).availableTime)
        return doctors.find(({ id }) => id === doctorsId).availableTime;
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
            >
            {({ values, errors, touched, handleSubmit }) => (
                console.log(values.date),
                <CreateAppointmentForm onSubmit={handleSubmit}>

                    <StageCreatingWrapper>
                        <StageName>
                            <img width="32" height="32" src={NumberOneSvg} alt="step-1" />
                            <OrdinaryText>Choose a day for an appointment</OrdinaryText>
                        </StageName>
                        <div className="calendar">
                            <Field name="date" id="date" component={VisitCalendar} />
                        </div>
                    </StageCreatingWrapper>

                    <StageCreatingWrapper>
                        <StageName>
                        <img width="32" height="32" src={NumberTwoSvg} alt="step-2" />
                            <OrdinaryText>Select an available timeslot</OrdinaryText>
                        </StageName>
                            <DatesList >
                                {values.doctorName 
                                 ? Object.keys(getAvailableTimes(values.doctorName)["14/09/2021"]).map((time) => (
                                       <Field key={`time-${time}`} name="time" component={TimeInputRadio} timeValue={time} />
                                 ))
                                : null}
                                <li className="date-list-item"></li>
                                <li className="date-list-item"></li>
                            </DatesList>
                    </StageCreatingWrapper>

                    <StageCreatingWrapper>
                        <StageName>
                        <img width="32" height="32" src={NumberThreeSvg} alt="step-2" />
                            <OrdinaryText>Select a doctor and define the reason of your visit</OrdinaryText>
                        </StageName>

                        <InputWrapper>
                            <InputLabel>Occupation</InputLabel>
                            <Field component={SelectList} name="occupation" id="occupation" options={occupations} />
                            {errors.occupation && touched.occupation
                                ? <AlertMessage message={errors.occupation} />
                                : null}
                        </InputWrapper>

                        <InputWrapper>
                            <InputLabel>Doctors name</InputLabel>
                            <Field component={SelectList} name="doctorName" id="doctorName" options={getFilteredDoctors(values.occupation)} />
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