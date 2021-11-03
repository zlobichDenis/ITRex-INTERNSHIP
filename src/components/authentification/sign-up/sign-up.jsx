import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from 'yup';
import { connect } from "react-redux";
import { AuthStages, AppScreens } from "../../../common/const";
import { Link } from 'react-router-dom';

const SignUpSchema = Yup.object().shape(({
    firstName: Yup.string()
        .min(2, 'Name must contain min 8 symbols!')
        .max(15, 'Too Long!')
        .required('This field is required!'),
    lastName: Yup.string()
        .min(2, 'Name must contain min 8 symbols!')
        .max(15, 'Too Long!')
        .required('This field is required!'),
    email: Yup.string()
        .email('Invalid email!')
        .required('This field is required!'),
    password: Yup.string()
        .min(8, 'Password must contain min 8 symbols!')
        .required('This field is required!'),
    passwordConfirm: Yup.string()
        .required('This field is required!'),
}));

const SignUpForm = () => {
    const [ isShowingPass, showPassToggle ] = useState(false);
    const [ isShowingPassConfirm, showPassConfirmToggle ] = useState(false);

    return (
        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirm: '',
            }}
            validationSchema={SignUpSchema}
            >
            {({ errors, touched, values, isSubmitting, validateForm, setSubmitting }) => (
                <Form className="feedback-form">
                    <p className="feedback-form__title">Sign Up</p>
                    <div className="feedback-field">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C8.06053 0.00368503 6.16393 0.571311 4.54128 1.63374C2.91862 2.69617 1.63994 4.20754 0.86099 5.98377C0.0820354 7.76 -0.163575 9.72442 0.154075 11.6378C0.471725 13.5511 1.33893 15.3308 2.65005 16.76C3.58647 17.775 4.72299 18.5851 5.98799 19.1392C7.25298 19.6933 8.61903 19.9793 10 19.9793C11.3811 19.9793 12.7471 19.6933 14.0121 19.1392C15.2771 18.5851 16.4136 17.775 17.35 16.76C18.6612 15.3308 19.5284 13.5511 19.846 11.6378C20.1637 9.72442 19.9181 7.76 19.1391 5.98377C18.3602 4.20754 17.0815 2.69617 15.4588 1.63374C13.8362 0.571311 11.9396 0.00368503 10 0ZM10 18C7.92851 17.9969 5.93896 17.1903 4.45005 15.75C4.90209 14.6495 5.67108 13.7083 6.6593 13.0459C7.64752 12.3835 8.81036 12.0298 10 12.0298C11.1897 12.0298 12.3526 12.3835 13.3408 13.0459C14.329 13.7083 15.098 14.6495 15.55 15.75C14.0611 17.1903 12.0716 17.9969 10 18ZM8.00005 8C8.00005 7.60444 8.11735 7.21776 8.33711 6.88886C8.55687 6.55996 8.86923 6.30362 9.23468 6.15224C9.60013 6.00087 10.0023 5.96126 10.3902 6.03843C10.7782 6.1156 11.1346 6.30608 11.4143 6.58579C11.694 6.86549 11.8844 7.22186 11.9616 7.60982C12.0388 7.99778 11.9992 8.39991 11.8478 8.76537C11.6964 9.13082 11.4401 9.44318 11.1112 9.66294C10.7823 9.8827 10.3956 10 10 10C9.46962 10 8.96091 9.78929 8.58584 9.41421C8.21076 9.03914 8.00005 8.53043 8.00005 8ZM16.91 14C16.0166 12.4718 14.6415 11.283 13 10.62C13.5092 10.0427 13.841 9.33066 13.9555 8.56944C14.0701 7.80822 13.9625 7.03011 13.6458 6.3285C13.3291 5.62688 12.8166 5.03156 12.17 4.61397C11.5233 4.19637 10.7698 3.97425 10 3.97425C9.23026 3.97425 8.47682 4.19637 7.83014 4.61397C7.18346 5.03156 6.67102 5.62688 6.3543 6.3285C6.03758 7.03011 5.93004 7.80822 6.04458 8.56944C6.15912 9.33066 6.49088 10.0427 7.00005 10.62C5.35865 11.283 3.98352 12.4718 3.09005 14C2.37799 12.7871 2.00177 11.4065 2.00005 10C2.00005 7.87827 2.8429 5.84344 4.34319 4.34315C5.84349 2.84285 7.87832 2 10 2C12.1218 2 14.1566 2.84285 15.6569 4.34315C17.1572 5.84344 18 7.87827 18 10C17.9983 11.4065 17.6221 12.7871 16.91 14Z" fill="#A1ABC9"/>
                        </svg>
                        <Field 
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            className="feedback-field__input"/>
                    </div>
                    {errors.firstName && touched.firstName 
                        ? ( <div className="feedback-message feedback-message_show feedback-message_password">
                                <p className="feedback-message_text">{errors.firstName}</p>
                            </div> ) 
                        : null}
                    <div className="feedback-field">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C8.06053 0.00368503 6.16393 0.571311 4.54128 1.63374C2.91862 2.69617 1.63994 4.20754 0.86099 5.98377C0.0820354 7.76 -0.163575 9.72442 0.154075 11.6378C0.471725 13.5511 1.33893 15.3308 2.65005 16.76C3.58647 17.775 4.72299 18.5851 5.98799 19.1392C7.25298 19.6933 8.61903 19.9793 10 19.9793C11.3811 19.9793 12.7471 19.6933 14.0121 19.1392C15.2771 18.5851 16.4136 17.775 17.35 16.76C18.6612 15.3308 19.5284 13.5511 19.846 11.6378C20.1637 9.72442 19.9181 7.76 19.1391 5.98377C18.3602 4.20754 17.0815 2.69617 15.4588 1.63374C13.8362 0.571311 11.9396 0.00368503 10 0ZM10 18C7.92851 17.9969 5.93896 17.1903 4.45005 15.75C4.90209 14.6495 5.67108 13.7083 6.6593 13.0459C7.64752 12.3835 8.81036 12.0298 10 12.0298C11.1897 12.0298 12.3526 12.3835 13.3408 13.0459C14.329 13.7083 15.098 14.6495 15.55 15.75C14.0611 17.1903 12.0716 17.9969 10 18ZM8.00005 8C8.00005 7.60444 8.11735 7.21776 8.33711 6.88886C8.55687 6.55996 8.86923 6.30362 9.23468 6.15224C9.60013 6.00087 10.0023 5.96126 10.3902 6.03843C10.7782 6.1156 11.1346 6.30608 11.4143 6.58579C11.694 6.86549 11.8844 7.22186 11.9616 7.60982C12.0388 7.99778 11.9992 8.39991 11.8478 8.76537C11.6964 9.13082 11.4401 9.44318 11.1112 9.66294C10.7823 9.8827 10.3956 10 10 10C9.46962 10 8.96091 9.78929 8.58584 9.41421C8.21076 9.03914 8.00005 8.53043 8.00005 8ZM16.91 14C16.0166 12.4718 14.6415 11.283 13 10.62C13.5092 10.0427 13.841 9.33066 13.9555 8.56944C14.0701 7.80822 13.9625 7.03011 13.6458 6.3285C13.3291 5.62688 12.8166 5.03156 12.17 4.61397C11.5233 4.19637 10.7698 3.97425 10 3.97425C9.23026 3.97425 8.47682 4.19637 7.83014 4.61397C7.18346 5.03156 6.67102 5.62688 6.3543 6.3285C6.03758 7.03011 5.93004 7.80822 6.04458 8.56944C6.15912 9.33066 6.49088 10.0427 7.00005 10.62C5.35865 11.283 3.98352 12.4718 3.09005 14C2.37799 12.7871 2.00177 11.4065 2.00005 10C2.00005 7.87827 2.8429 5.84344 4.34319 4.34315C5.84349 2.84285 7.87832 2 10 2C12.1218 2 14.1566 2.84285 15.6569 4.34315C17.1572 5.84344 18 7.87827 18 10C17.9983 11.4065 17.6221 12.7871 16.91 14Z" fill="#A1ABC9"/>
                        </svg>
                        <Field 
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            className="feedback-field__input" 
                        />
                    </div>
                    {errors.lastName && touched.lastName 
                        ? ( <div className="feedback-message feedback-message_show feedback-message_password">
                                <p className="feedback-message_text">{errors.lastName}</p>
                            </div> ) 
                        : null}
                    <div className="feedback-field">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z" fill="#A1ABC9"/>
                        </svg>     
                        <Field 
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="feedback-field__input"
                        />                          
                    </div>
                    {errors.email && touched.email
                        ? ( <div className="feedback-message feedback-message_show feedback-message_password">
                                <p className="feedback-message_text">{errors.email}</p>
                            </div> ) 
                        : null}
                    <div className="feedback-field">
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 11C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z" fill="#A1ABC9"/>
                        </svg>    
                        <Field 
                            name="password"
                            type={isShowingPass ? 'text' : 'password'}
                            placeholder="Password"
                            className="feedback-field__input feedback-field__input_password"
                        />                              
                        <div onClick={() => showPassToggle((prevState) => !prevState)} className={`feedback-field__icon ${isShowingPass ? 'feedback-field__icon_show' : ''} feedback-field__icon_password`}></div> 
                    </div> 
                    {errors.password && touched.password
                        ? ( <div className="feedback-message feedback-message_show feedback-message_password">
                                <p className="feedback-message_text">{errors.password}</p>
                            </div> ) 
                        : null}
                    <div className="feedback-message feedback-message_password">
                        <p className="feedback-message_text">Password must contain at least one digit</p>
                    </div>
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
                        <div onClick={() => showPassConfirmToggle((prevState) => !prevState)} className={`feedback-field__icon ${isShowingPassConfirm ? 'feedback-field__icon_show' : ''} feedback-field__icon_password-confirm`}></div>  
                    </div>
                    {(values.password !== values.passwordConfirm) && touched.passwordConfirm
                        ? ( <div className="feedback-message feedback-message_show feedback-message_password">
                                <p className="feedback-message_text">Passwords does not match!</p>
                            </div> ) 
                        : null}
                    <div className="feedback-submit">
                        <button  
                            type="submit" >
                            <Link className="feedback-submit__btn" to={AppScreens.DOCTOR_VIEW}>
                                <span>Sign up</span>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z" fill="white"/>
                                </svg>
                            </Link>
                        </button>
                    </div>
                </Form>
            )}
    </Formik>
    );
};

const SignUpComponent = () => {

    return (
        <div className="feedback-wrapper feedback-wrapper_sign-up">
            <SignUpForm />
            <div className="feedback-buttons">
                <div className="feedback-text">
                    <p className="feedback-text__quest">Already have an account?</p>
                    <Link to={`${AppScreens.AUTH}${AuthStages.SIGN_IN}`} className="feedback-text__link">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {});
};

const mapDispatchToProps = (disptach) => {
    return {};
};

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);