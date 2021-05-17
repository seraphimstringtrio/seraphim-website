import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../App.css';
import './ConcertSubpage.css'
import ConcertRecording from '../../components/ConcertRecording';
import ConcertPic1 from '../../resources/Concert 2021 pic1.jpg'
import ConcertPic2 from '../../resources/Concert 2021 pic2.jpg'
import ConcertPic3 from '../../resources/Concert 2021 pic3.jpg'

const BreakingTheAsymptote = () => {
  return (
    <section>
      <Navbar />
      {/* Title and description */}
      <div className="pageTitle">Breaking the Asymptote</div>
      <div className="concertSubtitle">14th March 2021</div>
      <div className="pageDescription">
        Breaking the Asymptote was Seraphim Trio's first charity concert. It 
        was done in collaboration with guest pianist Eric Rong and involved an 
        original composition by Australian composer Alexander Lau. Below are 
        the live recordings of the concert.
      </div>

      {/* Videos */}
      <ConcertRecording title="Breaking the Asymptote (Lau)"
        link="https://www.youtube.com/watch?v=m69P-qX_D0U&ab_channel=AlexanderLau"/>
      <ConcertRecording title="Piano Trio in G Major - III. Andante Espressivo (Debussy)"
        link="https://www.youtube.com/watch?v=T3rUo_xcHy0&ab_channel=AlexanderLau"/>

      <div>
        We're currently doing post production edits on the remaining videos... 
        We'll post them as soon as they're ready!
      </div>
      
      {/* Photo Gallery */}
      <div className="concertHeading">Photo Gallery</div>
      <div className="concertPhotos">
        <div className="photoColumn1">
          <img src={ConcertPic3}
            alt="Seraphim concert long shot"
          />
        </div>
        <div className="photoColumn2">
          <img src={ConcertPic1}
            alt="Seraphim trio and Eric around the piano"
          />
          <img src={ConcertPic2}
            alt="Seraphim playing D'Indy's piano quartet"  
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default BreakingTheAsymptote;