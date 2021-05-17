import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from './PrimaryButton';
import './ConcertCard.css';

const ConcertCard = (props) => {
  return (
    <div className="concertCard">
      <div>
        <img src={props.img} 
          alt="Concert cover shot preview" 
          className="concertCardPhoto"
        />     
      </div>
      <div>
        <div className="concertCardTitle">{props.title}</div>
        <div>{props.subtitle}</div>
        <div className="concertCardBody">{props.children}</div>
        <div className="concertCardBtn">
          <PrimaryButton onClick={props.buttonOnClick}>
            {props.buttonText}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

ConcertCard.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonOnClick: PropTypes.func,
  img: PropTypes.string
}

export default ConcertCard;