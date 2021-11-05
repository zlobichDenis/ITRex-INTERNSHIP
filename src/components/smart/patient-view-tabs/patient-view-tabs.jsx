import React from "react";

export const PatientViewTabs = () => {
    return (
        <ul className="patient-cabinet__tabs">
            <li>
                <button className="patient-cabinet__tab">
                    <span>Profile</span>
                </button>
            </li>
            <li>
                <button className="patient-cabinet__tab patient-cabinet__tab_active">
                    <span>Appointments</span>
                </button>
            </li>
        </ul>       
    )
};