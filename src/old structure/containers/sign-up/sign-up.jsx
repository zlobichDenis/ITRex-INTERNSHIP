import React from "react";
import { connect } from "react-redux";
import { AuthStages, AppScreens } from "../../routes/routes";
import { Link } from 'react-router-dom';
import { SignUpForm } from "../../../modules/SignUp/components/SignUpForm";


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