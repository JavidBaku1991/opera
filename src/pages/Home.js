import React from 'react';
import herovideo from './video1.mp4';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Afish from '../components/Afish.js';
import HeroButton from '../components/HeroButton.js';
import Email from '../components/Email.js';
import Media from '../components/Media.js';
import ParticipantComponent from '../components/ParticipantComponent.js';





const Home = () => {
  return (

    <div className='home-container'>
      <Navbar />
     <section   className='hero-video-container ' >
          <div>
                <video autoPlay loop muted>
                <source src={herovideo} type="video/mp4" />
              </video>
              
         
          </div>
     
    
    <HeroButton/>
    
      </section>
  

    <Afish />
    <Media />
     <ParticipantComponent />
     <Email />
     
    <Footer />
    </div>

   
  );
};

export default Home;
