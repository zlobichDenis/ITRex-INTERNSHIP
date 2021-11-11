import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { Doctor } from "./components"
import { AppointmentsListWrapper, AppointmentsList } from "../styles";

const DoctorsListComponent = (props) => {
    const { doctors } = props;
    return (
        <AppointmentsListWrapper >
            <AppointmentsList>
                {doctors.map((doctor) => <Doctor key={`doctor-item-${doctor.id}`} doctor={doctor} />)}
            </AppointmentsList>
        </AppointmentsListWrapper>
    )
};

DoctorsListComponent.propTypes = {
    doctors: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
        doctors: state.doctors,
    });
};

export const DoctorsList = connect(mapStateToProps, {})(DoctorsListComponent);