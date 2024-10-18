import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className="education" id="3">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Educational Background
        </h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#333" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="Nursery - Grade 10"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Educational Foundation at City Public School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Journey from Nursery to Grade 10
            </h4>
            <p>
              My formative years at City Public School, from nursery to grade
              10, laid the bedrock of my educational journey. Here, I not only
              acquired academic knowledge but also cultivated essential life
              skills. The school's nurturing environment fostered a passion for
              learning, setting the stage for my subsequent educational
              endeavors.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#333" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="2018-2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Successfully Completed Matriculation - Graduation Year: 2020
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Federal Board of Intermediate and Secondary Education (FBISE)
            </h4>
            <p>
              During this period, I navigated the academic challenges at FBISE,
              culminating in my graduation in 2020. The journey not only
              strengthened my foundation but also instilled a passion for
              continuous learning and growth.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#333" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="2020-2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Pursued BS in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Degree College Skardu
            </h4>
            <p>
              Embarked on a transformative academic journey from 2020 to 2024 at
              Degree College Skardu, where I pursued a Bachelor's degree in
              Computer Science. The program not only honed my technical skills
              but also provided invaluable insights into the dynamic field of
              computer science.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
