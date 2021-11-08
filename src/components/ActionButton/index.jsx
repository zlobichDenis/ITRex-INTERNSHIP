import React from 'react';
import PropTypes from 'prop-types';

import { ButtonArrowSvg } from '../../assets';

export const ActionButton = ({ textContent }) => {
    return (
        <div className="feedback-submit">
            <button 
                type="submit" >
                <div className="feedback-submit__btn">
                    <span>{textContent}</span>
                    <img height="21" width="21" src={ButtonArrowSvg} alt="icon" />
                </div>
            </button>
        </div>
    )
};

ActionButton.propTypes = {
    textContent: PropTypes.string,
};