import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Doctor } from "../../components/ordinary/doctor/doctor"

const DoctorsListComponent = (props) => {
    const { doctors } = props;
    return (
        <div className="patient-cabinet__doctors-list-wrapper">
            <ul className="patient-cabinet__doctors-list">
                {doctors.map((doctor) => <Doctor key={`doctor-item-${doctor.id}`} doctor={doctor} />)}
            </ul>
        </div>
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

const mapDispatchToProps = (dispatch) => {
    return {}
};

export const DoctorsList = connect(mapStateToProps, mapDispatchToProps)(DoctorsListComponent);