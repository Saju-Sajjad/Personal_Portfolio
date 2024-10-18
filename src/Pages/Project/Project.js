import React from "react";
import c from "../../Assist/Image/3.jpg";
import D from "../../Assist/Image/flight.jpg";
import E from "../../Assist/Image/5.jpg";
import "./Project.css";
const Project = () => {
  return (
    <>
      <div className="continer project" id="5">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          My Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          {" "}
          👉 Hire are my top three recent projects
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded border-0">
              <div className="card-image position-relative overflow-hidden">
                <img
                  src={c}
                  alt="Room Management System"
                  className="img-fluid"
                />
                <div className="card-image-overlay m-auto mt-3" style={{display:'flex',justifyContent:'space-evenly',flexDirection:'row'}}>
                  <span className="card-detail-badge text-white bg-secondary">
                    React.js
                  </span>
                  <span className="card-detail-badge text-white bg-primary">
                    Node.js
                  </span>
                  <span className="card-detail-badge text-white bg-success">
                    Express.js
                  </span>
                  <span className="card-detail-badge  text-white bg-info">
                    MongoDB
                  </span>
                </div>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase text-dark">
                    Room Management System
                  </h5>
                </div>
                <a
                  className="ad-btn btn btn-outline-primary"
                  href="https://github.com/Saju-Sajjad/MERN-PRO-ROOMS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded border-0">
              <div className="card-image position-relative overflow-hidden">
                <img
                  src={D}
                  alt="Flight Booking Management"
                  className="img-fluid"
                />
                <div className="card-image-overlay m-auto mt-3" style={{display:'flex',justifyContent:'space-evenly',flexDirection:'row'}}>
                  <span className="card-detail-badge  text-white bg-success">
                 MERN
                  </span>
                  <span className="card-detail-badge  text-white bg-info">
                    MUI
                  </span>
                </div>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase text-dark">
                    Flight Management System
                  </h5>
                </div>
                <a
                  className="ad-btn btn btn-outline-success"
                  href="https://github.com/Saju-Sajjad/flight-booking-system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded border-0">
              <div className="card-image position-relative overflow-hidden">
                <img src={E} alt="Job Portal" className="img-fluid" />
                <div className="card-image-overlay m-auto mt-3" style={{display:'flex',justifyContent:'space-evenly',flexDirection:'row'}}>
                  <span className="card-detail-badge text-white bg-success">MongoDB</span>
                  <span className="card-detail-badge bg-danger text-white">
                    Express.js
                  </span>
                  <span className="card-detail-badge text-white bg-primary">React</span>
                  <span className="card-detail-badge text-white">Node.js</span>
                </div>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase text-dark">F-Y-P Management System</h5>
                </div>
                <a
                  className="ad-btn btn btn-outline-success"
                  href="https://github.com/Saju-Sajjad/Fyp-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
