import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="tech-cont py-5">
      {technologies.map((technologies) => (
        <div key={technologies.name}>
          <BallCanvas icon={technologies.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
