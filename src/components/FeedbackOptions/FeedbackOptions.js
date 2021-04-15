import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const optionsKeys = Object.keys(options);
    return (
        <ul>
            {optionsKeys.map(option => {
                return (
                    <li key={option}>
                        <button
                            type="button"
                            name={option}
                            onClick={() => onLeaveFeedback({ option })}
                        ></button>
                    </li>
                );
            })}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
