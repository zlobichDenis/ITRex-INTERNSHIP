import React from "react";
import { DoctorsList } from "../../containers/doctors-list/doctors-list";
import { CabinetHeader } from "../../components/ordinary/cabinet-header/cabinet-header";
import { PatientViewTabs } from "../../components/smart/patient-view-tabs/patient-view-tabs";
import { PatientViewControlPanel } from "../../components/smart/patient-view-control-panel/patient-view-control-panel";

export const PatientViewContainer = () => {
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
