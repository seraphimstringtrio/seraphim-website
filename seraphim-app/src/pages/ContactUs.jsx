import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Footer from  '../components/Footer';
import CoverPhoto from '../resources/ContactUsPreview.png';
import './ContactUs.css';
import Facebook from '../resources/FacebookLogo.jpeg';

const ContactUs = () => {
  return (
    <section>
      <Navbar />
      <img src={CoverPhoto} 
        className="coverPhoto"
        alt="Man tapping on smart phone"
      />
      <div className="pageTitle">Contact</div>

      {/* Email us section */}
      <div id="contactUsBody">
        <div className="contactUsSection">
          <h3>Email us</h3>
          <div className="contactUsSubtitle">seraphimstringtrio@gmail.com</div>
          <br />
          <p>
            If you’d like to subscribe to our mailing list, simply email is ‘SUBSCRIBE’ and we’ll add
            you. We’ll keep you up to date on our latest events and concerts. We promise not to spam
            you and you can unsubscribe any time.
          </p>
        </div>

        {/* Call us section */}
        <div className="contactUsSection">
          <h3>Call us</h3>
          <div className="contactUsSubtitle">0435 047 585</div>
        </div>

        {/* Facebook section */}
        <div className="contactUsSection">
          <h3>Follow us on Facebook</h3>
          <div>
            <img src={Facebook}
              id="facebookLogo"
              alt="Facebook logo"
            />
            <a href="https://www.facebook.com/seraphimstringtrio/"
              target="_blank"
              rel="noreferrer"
            >
              Seraphim String Trio
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ContactUs;