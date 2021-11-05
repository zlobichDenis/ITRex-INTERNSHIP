import React from "react";
import { PatientsList } from "../../containers/patients-list/patients-list";
import { DoctorViewControlPanel } from "../../components/smart/doctor-view-control-panel/doctor-view-control-panel";
import { DoctorViewTabs } from "../../components/smart/doctor-view-tabs/doctor-view-tabs";
import { CabinetHeader } from "../../components/ordinary/cabinet-header/cabinet-header";

export const DoctorViewContainer = () => {

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
