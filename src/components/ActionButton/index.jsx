import React from 'react';
import PropTypes from 'prop-types';

import { ButtonArrowSvg } from 'assets';
import { ButtonWrapper, Button } from './styles';

export const ActionButton = ({ textContent, icon, itsUserPatient = false, itsUserView = false }) => {
    return (
        <ButtonWrapper itsUserView itsUserPatient={itsUserPatient}>
            <Button>
                <span>{textContent}</span>
                {icon 
                    ? <img height="21" width="21" src={ButtonArrowSvg} alt="icon" />
                    : null}
            </Button>
        </ButtonWrapper>
    )
};

ActionButton.propTypes = {
    textContent: PropTypes.string,
    icon: PropTypes.string,
    itsUserPatient: PropTypes.bool,
    itsUserView: PropTypes.bool,
};