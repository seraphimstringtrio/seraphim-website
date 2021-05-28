import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import './Music.css';
import Footer from  '../components/Footer';
import CoverPhoto from '../resources/Repertoire Photo.jpg'
import RepertoireAccordian from '../components/RepertoireAccordian';
import music from '../resources/Repertoire.json';
import GameOfThrones from '../resources/Game of Thrones.mp3'
import Brandenburg from '../resources/Brandenburg Concerto No.3.mp3'
import Canon from '../resources/Canon in D.mp3'
import EineKleine from '../resources/Eine Kleine Nachtmusik Mvmt 1.mp3'
import Libertango from '../resources/Libertango.mp3'
import WeddingMarch from '../resources/Wedding March Wagner.mp3'
import AudioPlayer from '../components/AudioPlayer';

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
          <RepertoireAccordian title="Classical (Common Practice)"
            data={music.Classical}
          />
          <RepertoireAccordian title="Modern Classical, Film & Pop"
            data={music.Contemporary}
          />
        </div>

        {/* Repertoire recordings */}
        <div id="recordingColumn">
          <div className="musicSubtitle">Recordings</div>
          <AudioPlayer title="Game of Thrones"
            composer="R. Djawadi"
            audio={GameOfThrones}
          />
          <AudioPlayer title="Wedding March 'Here Comes the Bride'"
            composer="R. Wagner"
            audio={WeddingMarch}
          />
          <AudioPlayer title="Libertango"
            composer="A. Piazzolla"
            audio={Libertango}
          />
          <AudioPlayer title="Canon in D"
            composer="J. Pachelbel"
            audio={Canon}
          />
          <AudioPlayer title="Brandenburg Concerto No.3'"
            composer="J.S. Bach"
            audio={Brandenburg}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Music;