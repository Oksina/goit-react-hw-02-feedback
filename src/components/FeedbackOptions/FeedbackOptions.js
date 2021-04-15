import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const optionsKeys = Object.keys(options);
    return (
        <ul className={s.list}>
            {optionsKeys.map(option => {
                return (
                    <li key={option} className={s.item}>
                        <button
                            type="button"
                            name={option}
                            onClick={() => onLeaveFeedback({ option })}
                            className={s.button}
                        >
                            {option}
                        </button>
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
