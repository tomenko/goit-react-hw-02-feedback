import React from 'react';
import PropTypes from "prop-types";

const onLeaveFeedback = ({ options, onLeaveFeedback }) => (
    options.map(option => (<button key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>))
);

onLeaveFeedback.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};

export default onLeaveFeedback;
