import React from "react";
import PropTypes from 'prop-types';

import { Patient } from "./components";
import { EmptyList } from "../../components";
import { connect } from "react-redux";

const PatientsListComponent = (props) => {
    const  { patients } = props;
    return (
        <div className="doctor-cabinet__patients-list-wrapper">
            <ul className="doctor-cabinet__patients-list">
                {patients.length > 0 
                    ? patients.map((patient) => <Patient key={`patient-${patient.id}`} patient={patient} />)
                    : <EmptyList />}
            </ul>
        </div>
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

const mapDispatchToProps = () => {
    return {};
};

export const PatientsList = connect(mapStateToProps, mapDispatchToProps)(PatientsListComponent);