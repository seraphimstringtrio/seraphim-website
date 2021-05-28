import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import './AboutUs.css';
import Footer from  '../components/Footer';
import CoverPhoto from '../resources/Concert 2021 pic1.jpg'
import PMPhoto from '../resources/Prime Minister.jpg';
import ConcertPhoto from '../resources/Concert 2021 pic2.jpg';
import HighlightBox from '../components/HighlightBox';
import ReactPlayer from 'react-player';
import ProfileRow from '../components/ProfileRow';

const AboutUs = () => {

  const introBody = "We're all university students who love performing and composing. Each musician in the trio has studied music for more than fifteen years and has been awarded an \"Associate of Music Australia\" (AMusA).";

  const braggingBody = "Seraphim Trio is constantly aiming to tailor fine music for your special occasion. Our music is perfect for weddings, functions, birthday parties and adds an extra level of sophistication to your event.";


  return (
    <section>
      <Navbar />
      <img src={CoverPhoto} className="coverPhoto"></img>
      <div className="pageTitle">About Us</div>
      <br />
      <div className="pageDescription">
        <ReactPlayer url='https://youtu.be/o2C8Y0l0tgw' />
      </div>
      
      <br />
      <div className="highlightRow">
        <img 
          src={ConcertPhoto}
          className="highlightsPhoto"
        />
        <HighlightBox button="" title="Seraphim String Trio">
          <p>{introBody}</p>
        </HighlightBox>
      </div>
      <div className="highlightRow">
        <HighlightBox button="" title="">
          <p>{braggingBody}</p>
        </HighlightBox>
        <img
          src={PMPhoto}
          className="highlightsPhoto"
        />
      </div>
      <hr />
      <div className="pageTitle" align="left">Our Team</div>
      <ProfileRow imageAlign={"artistRowLeft"} instrument={"Violin"} photo={PMPhoto} name={"Alexander Lau"} bio={"I've been performing orchestral, chamber and solo music for over a decade and I'm always looking forward to putting my musical expertise to work at any event. I handle most of the correspondence and I'm always happy to help! I'll also make your job easier by organising as much as possible, suggesting suitable music and by tailoring our services to your event."} />
      <ProfileRow imageAlign={"artistRowRight"} instrument={"Cello"} photo={PMPhoto} name={"Luke Poier"} bio={"After 11 years of studying cello, I've played in orchestras at Sydney Grammar School for over a decade and at national music festivals. My personal interests are in music history and musicology. Along with Alex, I've helped form a number of chamber ensembles in addition to this trio, including a piano quintet and a cello choir. And of course I love playing all the amazing repertoire there is for solo cello!"} />
      <ProfileRow imageAlign={"artistRowLeft"} instrument={"Violin"} photo={PMPhoto} name={"Yilan Yu"} bio={"I was a member of the Sydney Youth Orchestra (2008-2013) and I was an active participant in several formal and informal music ensembles at Sydney Grammar along with the other members of the team. Also, a composing-enthusiast."} />
      <Footer />
    </section>
  );
}

export default AboutUs;