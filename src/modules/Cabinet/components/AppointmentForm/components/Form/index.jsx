import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Loader from "react-loader-spinner";

import { NumberOneSvg, NumberTwoSvg, NumberThreeSvg } from "assets";
import { AppScreens, PatientScreens } from "routes";
import { getAllSpecializations } from "services";
import { appointmentSchema } from "core";
import { CreateAppointmentForm,
        StageCreatingWrapper,
        InputWrapper,
        InputLabel } from "../../styles";
import { ActionButton, AlertMessage, AuthTextInput } from "components";
import { SelectList, VisitCalendar, StageName, TimeRadioList } from "..";
import { postNewAppointment } from "../../redux";

export const AppointmentForm = () => {
    const [ allSpecializations, setAllSpecializations ] = useState(null);
    const dispatch = useDispatch();
    let history = useHistory()

    useEffect(() => {
        getAllSpecializations()
            .then((responce) => setAllSpecializations(responce.data))
    }, []);

    const getSpezialisationsOptions = () => {
        return allSpecializations.map(({ id, specialization_name }) => (
            { 
                value: id, 
                label: specialization_name,
            }
        ))};
    
    return allSpecializations 
            ?  (
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
                    occupation: 'Select a doctor and define the reason of your visit',
                }}
                validationSchema={appointmentSchema}
                validateOnBlur={false}
                onSubmit={( values ) => { 
                    const { occupation, date: visitDate, doctorName: doctorID, time: date, ...rest } = values
                    const appointmentData = { ...rest, doctorID, date }
                    dispatch(postNewAppointment(appointmentData));
                    history.push(`${AppScreens.PATIENT_VIEW}${PatientScreens.CABINET}`)
                    }}
                >
                {({ values, errors, touched, handleSubmit, setFieldValue, isValid }) => (
                    <CreateAppointmentForm onSubmit={handleSubmit}>
    
                    <StageCreatingWrapper>
                            <StageName icon={NumberOneSvg} text="Select a doctor and define the reason of your visit"/>
    
                            <InputWrapper>
                                <InputLabel>Occupation</InputLabel>
                                <Field component={SelectList} name="occupation" id="occupation" options={getSpezialisationsOptions()} handleReset={setFieldValue}/>
                                {errors.occupation && touched.occupation
                                    ? <AlertMessage message={errors.occupation} />
                                    : null}
                            </InputWrapper>
    
                            <InputWrapper>
                                <InputLabel>Doctors name</InputLabel>
                                <Field component={SelectList} name="doctorName" type="radio" id="doctorName"  handleReset={setFieldValue} />
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
                                ? <Field name="date" id="date" component={VisitCalendar} handleReset={setFieldValue}/>
                                : <AlertMessage message="Choose a doctor first"/>}
                        </StageCreatingWrapper>
    
                        <StageCreatingWrapper>
                            <StageName icon={NumberThreeSvg} text="Select an available timeslot"/>
                                {(values.doctorName && values.occupation && values.date)
                                    ? <TimeRadioList />
                                    : <AlertMessage message="Select a date and doctor first" />
                                }
                        </StageCreatingWrapper>
    
                        <ActionButton isDisabled={isValid} type="submit" textContent="Submit" itsUserView icon={null} />
                    </CreateAppointmentForm>
                )}
            </Formik>
        ) : (
            <Loader 
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />
        )
};