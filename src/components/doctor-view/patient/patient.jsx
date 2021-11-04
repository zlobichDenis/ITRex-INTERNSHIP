import React from "react"
import PropTypes from 'prop-types';
import { patients } from "../../../core/mock/patients";

export const Patient = (props) => {
    const { patient } = props;
    const { firstName, lastName, photo, date, appointment, isConfirmAppointment } = patient;
    
    return (
        <li className="doctor-cabinet__patient-item">
        <div className="doctor-cabinet__patient-header">
            <div className="doctor-cabinet__patient-info">
                <img width='48' height="48" src={photo} alt="Patient Photo" />
                <div className="doctor-cabinet__patient-desc">
                    <span className="doctor-cabinet__patient-name">{`${firstName} ${lastName}`}.</span>
                    <div className="doctor-cabinet__patient-status">
                        <svg className={`doctor-cabinet__patient-status-color ${isConfirmAppointment ? "doctor-cabinet__patient-status-color_active" : ""}`} width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="3.95637" cy="4" rx="3.95637" ry="4"/>
                        </svg>
                        <span>{`Appointment is ${isConfirmAppointment ? 'confirmed' : 'canceled'}`}</span>
                    </div>
                </div>
            </div>
            <button className="doctor-cabinet__patient-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#DCE0EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#DCE0EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#DCE0EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
        <div className="doctor-cabinet__divider"></div>
        <div className="doctor-cabinet__patient-details">
            <div className="doctor-cabinet__patient-date">
                <div className="doctor-cabinet__patient-date-icon">
                    <svg width="21" height="21" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.358 9V9.5H11.858H13.8362C13.9641 9.5 14.088 9.55133 14.1801 9.6445C14.2725 9.73786 14.3253 9.86563 14.3253 10C14.3253 10.1344 14.2725 10.2621 14.1801 10.3555C14.088 10.4487 13.9641 10.5 13.8362 10.5H10.8689C10.741 10.5 10.6172 10.4487 10.525 10.3555C10.4327 10.2621 10.3799 10.1344 10.3799 10V5C10.3799 4.86563 10.4327 4.73786 10.525 4.6445C10.6172 4.55133 10.741 4.5 10.8689 4.5C10.9969 4.5 11.1207 4.55133 11.2128 4.6445C11.3052 4.73786 11.358 4.86563 11.358 5V9ZM5.65374 2.09962C7.19793 1.05645 9.01282 0.5 10.8689 0.5C12.1014 0.5 13.3219 0.745423 14.4609 1.2224C15.5999 1.69937 16.6351 2.39864 17.5074 3.28054C18.3797 4.16245 19.0719 5.20973 19.5443 6.36272C20.0167 7.51572 20.2598 8.75168 20.2598 10C20.2598 11.8801 19.7084 13.7176 18.6758 15.28C17.6433 16.8424 16.1762 18.0592 14.4609 18.7776C12.7456 19.4959 10.8585 19.6838 9.0379 19.3177C7.2173 18.9515 5.5442 18.0476 4.2305 16.7195C2.91674 15.3912 2.02144 13.6982 1.65868 11.8544C1.29591 10.0105 1.48214 8.0993 2.19361 6.36272C2.90505 4.62619 4.10948 3.14284 5.65374 2.09962ZM6.19297 17.0661C7.57657 18.0008 9.20383 18.5 10.8689 18.5C13.1019 18.5 15.2423 17.6031 16.8196 16.0085C18.3966 14.414 19.2817 12.2526 19.2817 10C19.2817 8.32007 18.789 6.67743 17.8653 5.27976C16.9415 3.88203 15.628 2.79179 14.0901 2.14777C12.5522 1.50373 10.8597 1.33513 9.22667 1.66353C7.5937 1.99193 6.09449 2.80238 4.91831 3.99154C3.74219 5.18063 2.94185 6.69496 2.61766 8.34275C2.29347 9.99052 2.45981 11.6985 3.09586 13.251C3.73193 14.8036 4.80944 16.1314 6.19297 17.0661Z" fill="white" stroke="#DCE0EC"/>
                    </svg>  
                </div>                                              
                <span>{date}</span>
            </div>
            <div className="doctor-cabinet__patient-message">
                <div className="doctor-cabinet__patient-message-icon">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3256 2V2.5H12.8256H13.8147C14.4673 2.5 15.0943 2.76204 15.5574 3.23029C16.0207 3.69872 16.282 4.3352 16.282 5V17C16.282 17.6648 16.0207 18.3013 15.5574 18.7697C15.0943 19.238 14.4673 19.5 13.8147 19.5H3.92382C3.27123 19.5 2.64426 19.238 2.18112 18.7697C1.7178 18.3013 1.45654 17.6648 1.45654 17V5C1.45654 4.3352 1.7178 3.69872 2.18112 3.23029C2.64426 2.76204 3.27124 2.5 3.92382 2.5H4.91291H5.41291V2C5.41291 1.60042 5.56996 1.21829 5.84779 0.937395C6.12544 0.656687 6.50083 0.5 6.89109 0.5H10.8475C11.2377 0.5 11.6131 0.656687 11.8908 0.937395C12.1686 1.21829 12.3256 1.60042 12.3256 2ZM6.89109 1.5H6.39109V2V4V4.5H6.89109H10.8475H11.3475V4V3V2V1.5H10.8475H6.89109ZM5.41291 4V3.5H4.91291H3.92382C3.5271 3.5 3.14776 3.65938 2.86894 3.94128C2.59029 4.223 2.43472 4.60393 2.43472 5V17C2.43472 17.3961 2.59029 17.777 2.86894 18.0587C3.14776 18.3406 3.5271 18.5 3.92382 18.5H13.8147C14.2114 18.5 14.5908 18.3406 14.8696 18.0587C15.1482 17.777 15.3038 17.3961 15.3038 17V5C15.3038 4.60394 15.1482 4.223 14.8696 3.94128C14.5908 3.65938 14.2114 3.5 13.8147 3.5H12.8256H12.3256V4C12.3256 4.39958 12.1686 4.78171 11.8908 5.0626C11.6131 5.34331 11.2377 5.5 10.8475 5.5H6.89109C6.50083 5.5 6.12544 5.34331 5.84779 5.0626C5.56996 4.78171 5.41291 4.39958 5.41291 4Z" fill="white" stroke="#DCE0EC"/>
                    </svg>   
                </div>                         
                <span>{appointment}</span>
            </div>
        </div>
    </li>
    )
};

Patient.propTypes = {
    patient: PropTypes.object.isRequired,
}