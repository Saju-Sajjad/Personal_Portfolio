import React from "react";
import "./About.css";
import image from "../../Assist/Image/2.jpg";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about row">
        <div className="col-md-6 about-img-container">
          <img src={image} alt="About" className="about-img img-fluid rounded" />
        </div>
        <div className="col-md-6 about-content">
          <h1>About Me</h1>
          <p className="lead">
            Welcome! I'm <strong>Sajjad HUSSAIN</strong>, a creative Full Stack
            Web Developer with over 2 years of experience. I specialize in
            crafting immersive digital experiences, combining creativity with
            technical expertise across various aspects of full-stack web
            development, particularly the MERN stack.
          </p>

          <h2>What Makes My Approach Unique:</h2>
          <p className="lead">
            In my journey as a Full Stack Developer, I take pride in my ability
            to create dynamic single-page applications. My work not only
            involves secure and responsive designs but also incorporates
            captivating animations. I excel in rapid development, seamlessly
            integrating real-time features like notifications and chat
            functionalities.
          </p>

          <h3>Technical Landscape:</h3>
          <ul>
            <li>
              <b>Frontend:</b> HTML, SASS/CSS, JavaScript/ES6, Next.js, React
              (Hooks), Redux.
            </li>
            <li>
              <b>Backend:</b> Node.js, Express.js, API integrations, custom API development.
            </li>
            <li>
              <b>Database:</b> MongoDB, MySQL.
            </li>
          </ul>
          <p className="lead">
            I'm also proficient with tools like Firebase, Socket.io, Git, and
            data visualization libraries such as Highcharts and D3.js. I've
            deployed projects on cloud platforms like AWS, Digital Ocean, and Kubernetes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
