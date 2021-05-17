import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from './PrimaryButton';
import './HighlightBox.css';

const HighlightBox = (props) => {
  return (
    <div className="highlightBox">
      <div className="highlightTitle">{props.title}</div>
      <div>{props.children}</div>
      {
        props.button !== '' && 
        <PrimaryButton className="highlightBtn"
          onClick={props.buttonOnClick}>
          {props.button}
        </PrimaryButton>
      }
    </div>
  );
}

HighlightBox.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  // If button text is specified, a button is shown. Else it is hidden
  button: PropTypes.string,
  buttonOnClick: PropTypes.func
}

export default HighlightBox;