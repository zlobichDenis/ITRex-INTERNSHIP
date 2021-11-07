import React from "react";

export const DoctorViewTabs = () => {
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