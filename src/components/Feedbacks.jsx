import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div className="testimonial_card" variants={fadeIn("", "spring", index * 0.5, 0.75)}>
    <p className="testimonial--icon">&quot;</p>

    <div className="testimonial_card--detail">
      <p className="testimonial--para">{testimonial}</p>

      <div className="testimonial_cont--footer">
        <div>
          <p className="testimonial--name">
            <span>&#64;</span> {name}
          </p>
          <p className="testimonial--position">
            {designation} of {company}
          </p>
        </div>

        <img className="testimonial--image" src={image} alt={`feedback_by-${name}`} />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div>
      <div>
        <motion.div className="flow-sm" variants={textVariant()}>
          <p>WHAT PEOPLE SAY</p>
          <h2>Testimonials</h2>
        </motion.div>
      </div>
      <div className="testimonial_cont pt-2 pb-3">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
