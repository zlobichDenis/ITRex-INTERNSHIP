import React from "react";
import { CabinetHeader } from "../../components";
import { PatientsList, DoctorViewTabs, DoctorViewControlPanel } from "../../modules";

export const DoctorView = () => {
    return (
         <section className="doctor-view">
            <div className="doctor-cabinet">
                <CabinetHeader  />
                <div className="doctor-cabinet__wrapper">
                    <DoctorViewTabs />
                    <div className="doctor-cabinet__info">
                        <DoctorViewControlPanel />
                             <PatientsList />
                    </div>
                </div>
            </div>
        </section>
    )
};