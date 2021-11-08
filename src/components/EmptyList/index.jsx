import React from "react"

import { EmptyListSvg } from "assets"

export const EmptyList = () => {
    return (
        <div className="doctor-cabinet__info doctor-cabinet__info_empty-list">
        <div className="doctor-cabinet__control-panel">
            <h3>My Patients</h3>
        </div>
        <div className="doctor-cabinet__patients-list-wrapper">
            <div className="doctor-cabinet__patients-list-empty">
                <img src={EmptyListSvg} alt="icon"/>
                <p className="doctor-cabinet__patients-list-empty-message">
                    You have no patients yet.<br /> To create a patient profile, please contact your administrator.
                </p>                                    
            </div>
        </div>
    </div>
    )
}