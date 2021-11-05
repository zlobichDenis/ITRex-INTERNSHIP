import React from "react";

export const CabinetHeader = () => {
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