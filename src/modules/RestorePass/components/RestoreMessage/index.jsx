import React from "react";
import PropTypes from 'prop-types';

import { RestoreMessageText, RestoreMessageEmail } from "./styles";

export const RestoreMessage = ({ isConfirm }) => {
    return (
        <RestoreMessageText>
            <p>
                {isConfirm
                    ?   <><span>An email has been sent to</span>
                        <RestoreMessageEmail>example@exam.com</RestoreMessageEmail> 
                        .<span>Check your inbox, and click the reset link provided.</span></>

                    :   <span>Please use your email address, and we’ll send you the link to reset your password</span>}
                    </p>
        </RestoreMessageText>
    )
};

RestoreMessage.propTypes = {
    isConfirm: PropTypes.bool.isRequired,
};

