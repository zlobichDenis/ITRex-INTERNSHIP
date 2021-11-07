import React, { useState } from "react";
import { Field } from "formik";

export const PasswordConfirm = () => {
    const [ isShowingPassConfirm, setVisiblePassConfirm ] = useState(false);
    const showPassConfirmToggle = () => {
        setVisiblePassConfirm((isShowingPassConfirm) => !isShowingPassConfirm);
    };
    
    return (
        <div className="feedback-field">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7099 1.2101C14.617 1.11638 14.5064 1.04198 14.3845 0.991213C14.2627 0.940445 14.132 0.914307 13.9999 0.914307C13.8679 0.914307 13.7372 0.940445 13.6154 0.991213C13.4935 1.04198 13.3829 1.11638 13.29 1.2101L5.83995 8.6701L2.70995 5.5301C2.61343 5.43687 2.49949 5.36355 2.37463 5.31435C2.24978 5.26514 2.11645 5.24101 1.98227 5.24334C1.84809 5.24566 1.71568 5.27438 1.5926 5.32788C1.46953 5.38137 1.35819 5.45858 1.26495 5.55511C1.17171 5.65163 1.0984 5.76557 1.04919 5.89042C0.999989 6.01528 0.975859 6.1486 0.97818 6.28278C0.980502 6.41696 1.00923 6.54937 1.06272 6.67245C1.11622 6.79553 1.19343 6.90687 1.28995 7.0001L5.12995 10.8401C5.22291 10.9338 5.33351 11.0082 5.45537 11.059C5.57723 11.1098 5.70794 11.1359 5.83995 11.1359C5.97196 11.1359 6.10267 11.1098 6.22453 11.059C6.34639 11.0082 6.45699 10.9338 6.54995 10.8401L14.7099 2.68011C14.8115 2.58646 14.8925 2.47281 14.9479 2.34631C15.0033 2.21981 15.0319 2.08321 15.0319 1.94511C15.0319 1.807 15.0033 1.6704 14.9479 1.5439C14.8925 1.4174 14.8115 1.30375 14.7099 1.2101Z" fill="#A1ABC9"/>
            </svg>
            <Field 
                name="passwordConfirm"
                type={isShowingPassConfirm ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="feedback-field__input feedback-field__input_password"
            />                                 
            <div onClick={showPassConfirmToggle} className={`feedback-field__icon ${isShowingPassConfirm ? 'feedback-field__icon_show' : ''} feedback-field__icon_password-confirm`}></div>  
        </div>
    )
};