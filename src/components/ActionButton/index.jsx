import React from 'react';
import PropTypes from 'prop-types';

import { ButtonArrowSvg } from 'assets';
import { ButtonWrapper, Button } from './styles';

export const ActionButton = ({ textContent, icon, type, itsUserPatient = false, itsUserView = false,  }) => {
    return (
        <ButtonWrapper itsUserView={itsUserView} itsUserPatient={itsUserPatient}>
            <Button type={type}>
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
    type: PropTypes.string,
};