import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Formik, Field } from "formik";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { NumberOneSvg, NumberTwoSvg, NumberThreeSvg } from "assets";
import { getAllSpecializations } from "services";
import { appointmentSchema } from "core";
import { CreateAppointmentForm,
        StageCreatingWrapper,
        InputWrapper,
        InputLabel } from "./styles";
import { ActionButton, AlertMessage, AuthTextInput } from "components";
import { SelectList, VisitCalendar, StageName, TimeRadioList } from "./components";


const AppointmentFormComponent = ({ doctors }) => {
    const [ allSpecializations, setAllSpecializations ] = useState(null);

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
                onSubmit={( values ) => console.log(values)}
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

AppointmentFormComponent.propTypes = {
    doctors: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
        doctors: state.doctors,
    })
};

export const AppointmentForm = connect(mapStateToProps, {})(AppointmentFormComponent);