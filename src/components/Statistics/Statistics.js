import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={s.list}>
            <li key="good">
                <p>Good: {good}</p>
            </li>
            <li key="neutral">
                <p>Neutral: {neutral}</p>
            </li>
            <li key="bad">
                <p>Bad: {bad}</p>
            </li>
            <li key="total">
                <p>Total: {total}</p>
            </li>
            <li key="positive">
                <p>Positive feedback: {positivePercentage} %</p>
            </li>
        </ul>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
