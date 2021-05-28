import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { StoreContext } from '../utils/store';
import './ConcertRecording.css'

const ConcertRecording = (props) => {
  const context = React.useContext(StoreContext);
  const windowWidth = context.windowWidth[0];
  const [videoWidth, setVideoWidth] = React.useState(undefined);
  const [videoHeight, setVideoHeight] = React.useState(undefined);

  React.useEffect(() => {
    if (windowWidth > 900) {
      setVideoWidth(650);
      setVideoHeight(400);
    } else {
      setVideoWidth(windowWidth * 0.5);
      setVideoHeight(windowWidth * 0.3)
    }
  }, [windowWidth])

  return (
    <div className="concertRecording">
      <div>{props.title}</div>
      <div className="playerContainer">
       <ReactPlayer url={props.link} 
        controls={true} 
        width={videoWidth}
        height={videoHeight}
      />
      </div>
    </div>
  );
}

ConcertRecording.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string 
}

export default ConcertRecording;