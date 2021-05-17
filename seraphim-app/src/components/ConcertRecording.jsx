import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const ConcertRecording = (props) => {
  const style = {
    marginTop: '10px',
    marginBottom: '10px',
    fontSize: '18pt'
  }

  return (
    <div className="concertRecording" style={style}>
      <div style={style}>{props.title}</div>
      <ReactPlayer url={props.link} controls={true}/>
    </div>
  );
}

ConcertRecording.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string 
}

export default ConcertRecording;