import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="project-card"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}>
        <div className="project-card_image--cont">
          <img className="project-card_image" src={image} alt="project_image" />

          <div onClick={() => window.open(source_code_link, "_blank")}>
            <img className="project-card_github--icon" src={github} alt="source code" />
          </div>
        </div>

        <div className="project-card_detail ">
          <h4>{name}</h4>
          <p className="project-card_detail--para">{description}</p>
          <div className="project-card_detail--hashtag">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`}>#{tag.name}</p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div className="flow-sm">
        <motion.div variants={textVariant()}>
          <p>MY WORK</p>
          <h2>Projects</h2>
        </motion.div>

        <div>
          <motion.p variants={fadeIn("", "", 0.1, 1)}>
            Following projects showcases my skills and experience through real-world examples of my work. Each project
            is briefly described with links to code repositories and live demos in it. It reflects my ability to solve
            complex problems, work with different technologies, and manage projects effectively.
          </motion.p>
        </div>
      </div>

      <div className="project-card_wrapper py-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
