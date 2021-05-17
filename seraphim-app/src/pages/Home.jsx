import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import './Home.css'
import Footer from '../components/Footer';
import CoverPhoto from '../resources/Home.png';
import ConcertPhoto from '../resources/Concert Cover Photo Compressed.png';
import PrimeMinister from '../resources/Prime Minister.jpg';
import Contact from '../resources/ContactUsPreview.png';
import HighlightBox from '../components/HighlightBox';
import { Redirect } from 'react-router';

const Home = () => {
  const [toConcerts, setToConcerts] = React.useState(false);
  const [toAboutUs, setToAboutUs] = React.useState(false);
  const [toContactUs, setToContactUs] = React.useState(false);

  // Redirection on button clicks
  if (toConcerts) {
    return <Redirect to="/concerts" />
  } else if (toAboutUs) {
    return <Redirect to="/aboutus" />
  } else if (toContactUs) {
    return <Redirect to="/contactus" />
  }

  return (
    <section id="home">
      {/* Cover photo and nav bar */}
      <Navbar />
      <img src={CoverPhoto} 
        className="coverPhoto"
        alt="Seraphim performs outside"
      />
      <div id="title">Seraphim String Trio</div>

      {/* Home page description */}
      <div className="pageDescription">
        Seraphim String Trio is an ensemble based in Chatswood that specialises in 
        fine classical music for weddings, parties, festivals and corporate functions. 
        We offer a large range of repertoire as well as exceptional customer service to 
        help make organising your event easier at an affordable price. Contact us for 
        bookings. We also periodically hold concerts for charity to showcase a much 
        wider variety of repertoire.
      </div>   

      {/* Home page highlights grid */}
      <div>
        {/* Row 1 */}
        <div className="highlightRow">
          <img src={ConcertPhoto}
            className="highlightsPhoto"
            alt="Breaking the Asymptote - 2021 Concert"
          />
          <HighlightBox button="Concerts"
            title="Debut Concert - Breaking the Asymptote"
            buttonOnClick={() => setToConcerts(true)}
          > 
            Check out our past and future concerts!
          </HighlightBox>
        </div>
      
        {/* Row 2 */}
        <div className="highlightRow">
            <HighlightBox button="About Us"
              title="Playing for the Prime Minister of Australia"
              buttonOnClick={() => setToAboutUs(true)}
            >
              A special highlight of our time together. Find out more on our  About Us page. 
            </HighlightBox>
            <img src={PrimeMinister}
              className="highlightsPhoto"
              alt="Seraphim Trio with Malcom Turnbull"
            />
        </div>

        {/* Row 3 */}
        <div className="highlightRow">
          <img src={Contact}
            className="highlightsPhoto"
            alt="Man tapping an smart phone"
          />
          <HighlightBox button="Contact"
            title="Got Questions?"
            buttonOnClick={() => setToContactUs(true)}
          > 
            Contact us if you have queries about bookings or concerts.
          </HighlightBox>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Home;