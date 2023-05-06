import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentArrowStyle={{ borderRight: "7px solid hsl(0, 0%, 30%)" }}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div>
        <img src={experience.icon} alt={experience.company_name} />
      </div>
    }>
    <div>
      <h3 className="experience_title">{experience.title}</h3>
      <div className="experience_subtitle">
        <p>{experience.company_name}</p>
        <p>{experience.date}</p>
      </div>
    </div>
    <ul className="experience_detail">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <section className="pt-3">
      <motion.div className="flow-sm" variants={textVariant()}>
        <p>WHAT I HAVE DONE SO FAR</p>
        <h2>Work Experience</h2>
      </motion.div>
      <section className="py-3">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </section>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
