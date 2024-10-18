import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from "../../Assist/Docs/sath.pdf";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="1">
        <div className="container home-content">
          <h2>Sajjad Hussain</h2>
          <h1>
          <Typewriter
  options={{
    strings: [
      "MERN STACK DEVELOPER", 
      "FULL STACK DEVELOPER", 
      "REACT DEVELOPER", 
      "WORDPRESS DEVELOPER"
    ],
    autoStart: true,
    loop: true,
  }}
/>

          </h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=923400582358"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a className="btn btn-cv" href={Resume} download="My Resume">
              Click My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
