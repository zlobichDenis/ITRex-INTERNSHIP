import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { EmptyPatientsList } from "../patients-list-empty/patients-list-empty";
import { PatientsList } from "../patients-list/patients-list";

const DoctorViewHeader = () => {
    return (
        <div className="doctor-cabinet__header">
            <img src="./img/logo.png" alt="" />
            <div className="doctor-cabinet__doctor">
                <p>
                    <span className="doctor-cabinet__doctor-name">Miranda Nelson</span>
                    <span className="doctor-cabinet__doctor-specialty">Doctor</span>
                </p>
                <img src="img/doctor-photo-1.png" alt="Doctor's photo" />
            </div>
        </div>
    );
}

const DoctorViewTabs = () => {
    return (
        <ul className="doctor-cabinet__tabs">
            <li>
                <button className="doctor-cabinet__tab doctor-cabinet__tab_active">
                    <span>Patients</span>
                </button>
            </li>
            <li>
                <button className="doctor-cabinet__tab">
                    <span>Resolutions</span>
                </button>
            </li>
        </ul>
    );
}

const DoctorViewControlPanel = () => {
    return (
        <div className="doctor-cabinet__control-panel">
        <h3>My Patients</h3>
        <div className="doctor-cabinet__search-form">
            <div className="doctor-cabinet__input doctor-cabinet__input_search">
                <label className="doctor-cabinet__search-btn" htmlFor="doctor-cabinet__search-toggle">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7099 19.29L16.9999 15.61C18.44 13.8144 19.1374 11.5353 18.9487 9.24133C18.76 6.94733 17.6996 4.81281 15.9854 3.27667C14.2713 1.74053 12.0337 0.919537 9.73283 0.982497C7.43194 1.04546 5.24263 1.98759 3.61505 3.61517C1.98747 5.24275 1.04534 7.43207 0.982375 9.73295C0.919414 12.0338 1.74041 14.2714 3.27655 15.9855C4.81269 17.6997 6.94721 18.7601 9.2412 18.9488C11.5352 19.1375 13.8143 18.4401 15.6099 17L19.2899 20.68C19.3829 20.7738 19.4935 20.8482 19.6153 20.8989C19.7372 20.9497 19.8679 20.9758 19.9999 20.9758C20.1319 20.9758 20.2626 20.9497 20.3845 20.8989C20.5063 20.8482 20.6169 20.7738 20.7099 20.68C20.8901 20.4936 20.9909 20.2444 20.9909 19.985C20.9909 19.7257 20.8901 19.4765 20.7099 19.29ZM9.9999 17C8.61544 17 7.26206 16.5895 6.11091 15.8203C4.95977 15.0511 4.06256 13.9579 3.53275 12.6788C3.00293 11.3997 2.86431 9.99226 3.13441 8.63439C3.4045 7.27653 4.07119 6.02925 5.05016 5.05028C6.02912 4.07131 7.27641 3.40463 8.63427 3.13453C9.99214 2.86443 11.3996 3.00306 12.6787 3.53287C13.9578 4.06268 15.051 4.95989 15.8202 6.11103C16.5894 7.26218 16.9999 8.61556 16.9999 10C16.9999 11.8565 16.2624 13.637 14.9497 14.9498C13.6369 16.2625 11.8564 17 9.9999 17Z" fill="#A1ABC9"/>
                    </svg>
                </label>  
                <input type="checkbox" className="doctor-cabinet__search-toggle" />                                     
                <input placeholder="Search" id="doctor-cabinet__search-field" className="doctor-cabinet__search-field" type="search" />
            </div>
            <div className="doctor-cabinet__input doctor-cabinet__input_sort">
                    <label className="doctor-cabinet__sort-btn" htmlFor="doctor-cabinet__sort-type-toggle">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9999 6.18V1C17.9999 0.734784 17.8946 0.48043 17.707 0.292893C17.5195 0.105357 17.2651 0 16.9999 0C16.7347 0 16.4803 0.105357 16.2928 0.292893C16.1053 0.48043 15.9999 0.734784 15.9999 1V6.18C15.4208 6.3902 14.9204 6.77363 14.5668 7.27816C14.2131 7.7827 14.0234 8.38388 14.0234 9C14.0234 9.61612 14.2131 10.2173 14.5668 10.7218C14.9204 11.2264 15.4208 11.6098 15.9999 11.82V19C15.9999 19.2652 16.1053 19.5196 16.2928 19.7071C16.4803 19.8946 16.7347 20 16.9999 20C17.2651 20 17.5195 19.8946 17.707 19.7071C17.8946 19.5196 17.9999 19.2652 17.9999 19V11.82C18.5791 11.6098 19.0795 11.2264 19.4331 10.7218C19.7867 10.2173 19.9764 9.61612 19.9764 9C19.9764 8.38388 19.7867 7.7827 19.4331 7.27816C19.0795 6.77363 18.5791 6.3902 17.9999 6.18ZM16.9999 10C16.8021 10 16.6088 9.94135 16.4443 9.83147C16.2799 9.72159 16.1517 9.56541 16.076 9.38268C16.0003 9.19996 15.9805 8.99889 16.0191 8.80491C16.0577 8.61093 16.153 8.43275 16.2928 8.29289C16.4327 8.15304 16.6108 8.0578 16.8048 8.01921C16.9988 7.98063 17.1999 8.00043 17.3826 8.07612C17.5653 8.15181 17.7215 8.27998 17.8314 8.44443C17.9413 8.60888 17.9999 8.80222 17.9999 9C17.9999 9.26522 17.8946 9.51957 17.707 9.70711C17.5195 9.89464 17.2651 10 16.9999 10ZM10.9999 12.18V1C10.9999 0.734784 10.8946 0.48043 10.707 0.292893C10.5195 0.105357 10.2651 0 9.99991 0C9.7347 0 9.48034 0.105357 9.29281 0.292893C9.10527 0.48043 8.99991 0.734784 8.99991 1V12.18C8.42076 12.3902 7.92037 12.7736 7.56676 13.2782C7.21314 13.7827 7.02344 14.3839 7.02344 15C7.02344 15.6161 7.21314 16.2173 7.56676 16.7218C7.92037 17.2264 8.42076 17.6098 8.99991 17.82V19C8.99991 19.2652 9.10527 19.5196 9.29281 19.7071C9.48034 19.8946 9.7347 20 9.99991 20C10.2651 20 10.5195 19.8946 10.707 19.7071C10.8946 19.5196 10.9999 19.2652 10.9999 19V17.82C11.5791 17.6098 12.0795 17.2264 12.4331 16.7218C12.7867 16.2173 12.9764 15.6161 12.9764 15C12.9764 14.3839 12.7867 13.7827 12.4331 13.2782C12.0795 12.7736 11.5791 12.3902 10.9999 12.18ZM9.99991 16C9.80213 16 9.60879 15.9414 9.44434 15.8315C9.27989 15.7216 9.15172 15.5654 9.07603 15.3827C9.00035 15.2 8.98054 14.9989 9.01913 14.8049C9.05771 14.6109 9.15296 14.4327 9.29281 14.2929C9.43266 14.153 9.61084 14.0578 9.80482 14.0192C9.99881 13.9806 10.1999 14.0004 10.3826 14.0761C10.5653 14.1518 10.7215 14.28 10.8314 14.4444C10.9413 14.6089 10.9999 14.8022 10.9999 15C10.9999 15.2652 10.8946 15.5196 10.707 15.7071C10.5195 15.8946 10.2651 16 9.99991 16ZM3.99991 4.18V1C3.99991 0.734784 3.89456 0.48043 3.70702 0.292893C3.51948 0.105357 3.26513 0 2.99991 0C2.7347 0 2.48034 0.105357 2.29281 0.292893C2.10527 0.48043 1.99991 0.734784 1.99991 1V4.18C1.42076 4.3902 0.920374 4.77363 0.566756 5.27817C0.213137 5.7827 0.0234375 6.38388 0.0234375 7C0.0234375 7.61612 0.213137 8.2173 0.566756 8.72184C0.920374 9.22637 1.42076 9.6098 1.99991 9.82V19C1.99991 19.2652 2.10527 19.5196 2.29281 19.7071C2.48034 19.8946 2.7347 20 2.99991 20C3.26513 20 3.51948 19.8946 3.70702 19.7071C3.89456 19.5196 3.99991 19.2652 3.99991 19V9.82C4.57907 9.6098 5.07945 9.22637 5.43307 8.72184C5.78669 8.2173 5.97639 7.61612 5.97639 7C5.97639 6.38388 5.78669 5.7827 5.43307 5.27817C5.07945 4.77363 4.57907 4.3902 3.99991 4.18ZM2.99991 8C2.80213 8 2.60879 7.94135 2.44434 7.83147C2.27989 7.72159 2.15172 7.56541 2.07603 7.38268C2.00035 7.19996 1.98054 6.99889 2.01913 6.80491C2.05771 6.61093 2.15296 6.43275 2.29281 6.29289C2.43266 6.15304 2.61084 6.0578 2.80482 6.01921C2.9988 5.98063 3.19987 6.00043 3.3826 6.07612C3.56532 6.15181 3.7215 6.27998 3.83138 6.44443C3.94127 6.60888 3.99991 6.80222 3.99991 7C3.99991 7.26522 3.89456 7.51957 3.70702 7.70711C3.51948 7.89464 3.26513 8 2.99991 8Z" fill="#A1ABC9"/>
                        </svg>
                    </label>
                    <input type="checkbox" className="doctor-cabinet__sort-type-toggle" id="doctor-cabinet__sort-type-toggle" />
                    <ul className="doctor-cabinet__sort-types-list">
                        <li className="doctor-cabinet__sort-types-list-option doctor-cabinet__sort-types-list-option_active">by name</li>
                        <li className="doctor-cabinet__sort-types-list-option">by date</li>
                    </ul>
            </div>
        </div>
    </div>
    )
}

const DoctorViewContainerComponent = (props) => {
    const { patients } = props;

    return (
         <section className="doctor-view">
            <div className="doctor-cabinet">
                <DoctorViewHeader />
                <div className="doctor-cabinet__wrapper">
                    <DoctorViewTabs />
                    <div className="doctor-cabinet__info">
                        <DoctorViewControlPanel />
                        <div className="doctor-cabinet__patients-list-wrapper">
                            {patients.length === 0 
                             ? <EmptyPatientsList /> 
                             : <PatientsList patients={patients} />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

DoctorViewContainerComponent.propTypes = {
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

export const DoctorViewContainer = connect(mapStateToProps, mapDispatchToProps)(DoctorViewContainerComponent);