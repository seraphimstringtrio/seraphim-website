import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import './Music.css';
import Footer from  '../components/Footer';
import CoverPhoto from '../resources/Repertoire Photo.jpg'
import RepertoireAccordian from '../components/RepertoireAccordian';

const Music = () => {
  return (
    <section>
      <Navbar />
      {/* Cover photo, title and description */}
      <img src={CoverPhoto} 
        className="coverPhoto"
        alt="Close up of sheet music and a violin"
      />
      <div className="pageTitle">Music</div>
      <div className="pageDescription">
        The Seraphim Trio specialises in a multitude of genres including classical music, 
        film and pop. We're always adding new music to our repertoire. If there are any 
        pieces that are not on our list you would like us to play, there is a section 
        in the booking form, where you can request an arrangement. To ensure that we can 
        prepare your arrangements in time, please contact us well in advance 
        (approximately 4 weeks).
      </div>

      <div id="repertoireBody">
        {/* Repertoire list */}
        <div id="repertoireColumn">
          <div className="musicSubtitle">Repertoire</div>
          <RepertoireAccordian title="Classical (Common Practice)"/>
          <RepertoireAccordian title="Modern Classical"/>
          <RepertoireAccordian title="Film Music"/>
          
        </div>

        {/* Repertoire recordings */}
        <div id="recordingColumn">
          <div className="musicSubtitle">Recordings</div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Music;