import React from "react";

import { CabinetHeader } from "../../components";
import { DoctorsList, PatientViewTabs, PatientViewControlPanel } from "../../modules";

export const PatientView = () => {
    return (
        <section className="patient-view">
            <div className="patient-cabinet">
                <CabinetHeader  />
                <div className="patient-cabinet__wrapper">
                    <PatientViewTabs />
                    <div className="patient-cabinet__info">
                        <PatientViewControlPanel />
                        <DoctorsList />
                    </div>
                </div>
            </div>
        </section>
    )
};
