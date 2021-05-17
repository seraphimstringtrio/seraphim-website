import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Footer from  '../components/Footer';
import CoverPhoto from '../resources/New Hall Rear Shot.jpg';
import ConcertCard from '../components/ConcertCard';
import BreakingTheAsymptote from '../resources/2021 Concert Cover Photo.png'
import { Redirect } from 'react-router';

const Concerts = () => {
  const [toAsymptote, setToAsymptote] = React.useState(false);

  if (toAsymptote) {
    return <Redirect to="/concerts/breakingtheasymptote"/>
  }

  return (
    <section>
      <Navbar />
      {/* Cover photo and description */}
      <img src={CoverPhoto} 
        className="coverPhoto"
        alt="Seraphim performs in the JV Hall"
      />
      <div className="pageTitle">Concerts</div>
      <div className="pageDescription">
        Periodically, Seraphim String Trio holds charity concerts exploring a 
        wider range of repertoire. Often we often have guest musicians so we’re 
        always open to collaborating with others! Check below for recordings of 
        our past concerts and bookings for future concerts.
      </div>

      {/* Concert 'cards' */}
      <ConcertCard title="Breaking the Asymptote"
        subtitle="Sales end 14/3/2021"
        buttonText="View recordings"
        buttonOnClick={() => setToAsymptote(true)}
        img={BreakingTheAsymptote}
      >
        Seraphim String Trio's charity concert, with guest pianist Eric Rong. 
        Repertoire includes Brahms, Ravel and debut composition by Alex Lau.
      </ConcertCard>
      Keep an eye out here for future concerts!
      <Footer />
    </section>
  );
}

export default Concerts;