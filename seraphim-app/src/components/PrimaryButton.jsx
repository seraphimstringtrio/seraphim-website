import React from 'react';
import PropTypes from 'prop-types';
import './PrimaryButton.css';

const PrimaryButton = (props) => {
  return (
    <button className={`primaryBtn ${props.className}`}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default PrimaryButton;