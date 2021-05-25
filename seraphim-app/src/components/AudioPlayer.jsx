import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import './AudioPlayer.css';

const AudioPlayer = (props) => {
  return (
    <div className="audioPlayer">
      {/* Audio player header */}
      <div className="audioTitle">
        {props.title}
      </div>
      <div className="audioComposer">
        {props.composer}
      </div>
      
      {/* Audio player */}
      <ReactPlayer
        url={props.audio}
        width="400px"
        height="50px"
        playing={false}
        controls={true}
      />
    </div>
  );
}

AudioPlayer.propTypes = {
  title: PropTypes.string,
  composer: PropTypes.string,
  audio: PropTypes.string
}

export default AudioPlayer;