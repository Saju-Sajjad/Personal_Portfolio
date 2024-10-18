import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdOutlineWorkHistory } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";
import "./workexp.css";

const Workexp = () => {
  return (
    <div className="work" id="6">
      <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />
        <VerticalTimeline lineColor="#138781">
          {/* Coding Experience during College */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F8F9FA", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid #F8F9FA" }}
            date="2021 - 2022"
            iconStyle={{ background: "#2196F3", color: "#1e1e2c" }}
            icon={<MdOutlineWorkHistory />}
          >
            <h3 className="vertical-timeline-element-title">
              Coding Learning Journey
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Self-Taught
            </h4>
            <p>
              During my college years, I dedicated my time to learning coding
              languages such as C++, HTML, and CSS on my Android device. This
              self-directed learning experience laid the foundation for my
              future studies and work in web development.
            </p>
          </VerticalTimelineElement>

          {/* Learning MERN Stack */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F8F9FA", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid #F8F9FA" }}
            date="March 2022 - September 2022"
            iconStyle={{ background: "#2196F3", color: "#1e1e2c" }}
            icon={<MdOutlineWorkHistory />}
          >
            <h3 className="vertical-timeline-element-title">
              MERN Stack Learning
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rinor, Skardu
            </h4>
            <p>
              During this period, I focused on mastering the MERN stack,
              gaining proficiency in MongoDB, Express.js, React.js, and
              Node.js, which laid a solid foundation for my future roles in
              web development.
            </p>
          </VerticalTimelineElement>

          {/* Frontend Developer at Rinor */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="September 2022 - March 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#1e1e2c" }}
            icon={<MdOutlineWorkHistory />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer (Remote)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rinor, Skardu
            </h4>
            <p>
              As a Frontend Developer, I contributed to the Rinor DMC
              project, focusing on building dynamic user interfaces and
              ensuring optimal performance through React.js.
            </p>
          </VerticalTimelineElement>

          {/* Full Stack Developer at Netbot */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="January 2024 - November 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#1e1e2c" }}
            icon={<MdOutlineWorkHistory />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Netbot
            </h4>
            <p>
              At Netbot, I worked as a Full Stack Developer, contributing
              to various projects and enhancing my skills in both
              frontend and backend technologies.
            </p>
          </VerticalTimelineElement>

          {/* Frontend & WordPress Developer at Genetech */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="November 2024 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#1e1e2c" }}
            icon={<MdOutlineWorkHistory />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend & WordPress Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Genetech
            </h4>
            <p>
              Currently, I am working at Genetech as a Frontend and
              WordPress Developer, focusing on building responsive and
              user-friendly web applications.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Workexp;
