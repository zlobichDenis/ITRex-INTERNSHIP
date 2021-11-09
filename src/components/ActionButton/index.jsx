import React from 'react';
import PropTypes from 'prop-types';

import { ButtonArrowSvg } from 'assets';
import { ButtonWrapper, Button } from './styles';

export const ActionButton = ({ textContent }) => {
    return (
        <ButtonWrapper>
            <Button >
                <span>{textContent}</span>
                <img height="21" width="21" src={ButtonArrowSvg} alt="icon" />
            </Button>
        </ButtonWrapper>
    )
};

ActionButton.propTypes = {
    textContent: PropTypes.string,
};