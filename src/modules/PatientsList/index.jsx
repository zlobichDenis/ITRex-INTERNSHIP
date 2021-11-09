import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { Patient } from "./components";
import { EmptyList } from "components";
import { AppointmentsListWrapper, AppointmentsList } from "./styles";

const PatientsListComponent = (props) => {
    const  { patients } = props;
    return (
        <AppointmentsListWrapper>
            <AppointmentsList>
                {patients.length > 0 
                    ? patients.map((patient) => <Patient key={`patient-${patient.id}`} patient={patient} />)
                    : <EmptyList />}
            </AppointmentsList>
        </AppointmentsListWrapper>
    )
};

PatientsListComponent.propTypes = {
    patients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
        patients: state.patients,
    });
;}

export const PatientsList = connect(mapStateToProps, {})(PatientsListComponent);