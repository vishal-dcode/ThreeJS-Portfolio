import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>
      <motion.div className="overview-card_list" variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
        <div className="overview-card_item" option={{ max: 45, scale: 1, speed: 450 }}>
          <img src={icon} alt={title} />
          <h6>{title}</h6>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section className="flow-sm py-3">
      <motion.div variants={textVariant()}>
        <p>INTRODUCTION</p>
        <h2>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        <p>
          As a graphic designer and web developer, I possess a strong passion for creating visually stunning and
          user-friendly designs by utilizing my skills in different design software and programming languages. My
          primary objective is to surpass the expectations of my clients and add value to their business growth. I
          believe that a great design should not only look visually appealing, but also offer seamless functionality and
          intuitive user experience. I am constantly learning and staying updated on the latest design trends and
          technologies to ensure that my designs are modern, relevant, and effective.
        </p>
      </motion.p>
      <div className="overview-card_wrapper">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
