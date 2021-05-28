import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Footer from  '../components/Footer';
import CoverPhoto from '../resources/Concert 2021 pic1.jpg'
import PMPhoto from '../resources/Prime Minister.jpg';
import ConcertPhoto from '../resources/Concert 2021 pic2.jpg';
import HighlightBox from '../components/HighlightBox';
import ReactPlayer from 'react-player';
import ProfileRow from '../components/ProfileRow';
import AlexProfile from '../resources/Alex Profile.jpg';
import YilanProfile from '../resources/Yilan Profile.png';
import LukeProfile from '../resources/Luke Profile.jpeg';
import ConcertRecording from '../components/ConcertRecording';

const AboutUs = () => {
  return (
    <section id="aboutUs">
      <Navbar />
      <img src={CoverPhoto} 
        className="coverPhoto" 
        alt="Seraphim trio and guest pianist Eric Rong"
      />
      <div className="pageTitle">About Us</div>
      <br />
      <div className="pageDescription">
        <ConcertRecording link="https://youtu.be/o2C8Y0l0tgw"/>
      </div>
      
      <br />
      <div className="highlightRow">
        <img 
          src={ConcertPhoto}
          className="highlightsPhoto"
          alt="Seraphim trio and Eric Rong playing D'Indy Piano Quartet"
        />
        <HighlightBox button="" title="Seraphim String Trio">
          <p>
            We're all university students who love performing and composing. Each 
            musician in the trio has studied music for more than fifteen years and 
            has been awarded an \"Associate of Music Australia\" (AMusA).
          </p>
        </HighlightBox>
      </div>
      <div className="highlightRow">
        <HighlightBox button="" title="">
          <p>
            Seraphim Trio is constantly aiming to tailor fine music for your special 
            occasion. Our music is perfect for weddings, functions, birthday parties 
            and adds an extra level of sophistication to your event.
          </p>
        </HighlightBox>
        <img
          src={PMPhoto}
          className="highlightsPhoto"
          alt="Seraphim trio with then-prime-minister Malcolm Turnbull"
        />
      </div>
      <hr />
      <div className="pageTitle" align="left">Our Team</div>
      <ProfileRow imageAlign={"artistRowLeft"} 
        instrument={"Violin"} 
        photo={AlexProfile} 
        name={"Alexander Lau"} 
        bio={"I've been performing orchestral, chamber and solo music for over a decade and I'm " + 
            "always looking forward to putting my musical expertise to work at any event. I handle " + 
            "most of the correspondence and I'm always happy to help! I'll also make your job easier " + 
            "by organising as much as possible, suggesting suitable music and by tailoring our services " + 
            "to your event."} 
      />
      <ProfileRow imageAlign={"artistRowRight"} 
        instrument={"Violin"} 
        photo={YilanProfile} 
        name={"Yilan Yu"} 
        bio={"I was a member of the Sydney Youth Orchestra (2008-2013) and I was an active participant in " + 
        "several formal and informal music ensembles at Sydney Grammar along with the other members of the " + 
        "team. Also, a composing-enthusiast."} 
      />
      <ProfileRow imageAlign={"artistRowLeft"} 
        instrument={"Cello"} 
        photo={LukeProfile} 
        name={"Luke Poier"} 
        bio={"After 11 years of studying cello, I've played in orchestras at Sydney Grammar School for " + 
            "over a decade and at national music festivals. My personal interests are in music history " + 
            "and musicology. Along with Alex, I've helped form a number of chamber ensembles in addition " + 
            "to this trio, including a piano quintet and a cello choir. And of course I love playing all " + 
            "the amazing repertoire there is for solo cello!"} 
      />
      <Footer />
    </section>
  );
}

export default AboutUs;