import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="landing-section">
      <main className="landing-section_cont pt-8">
        <div className="landing-section_line"></div>
        <div className="landing-section_text flow">
          <h1>
            Hi, I'm <span className="custom-text">Vishal</span>{" "}
          </h1>
          <p className="ch-medium">
            As a graphic designer & web developer, I strive to create visually appealing & user-friendly designs using
            my expertise in various design software & programming languages. My goal is to exceed client expectations &
            contribute to their business growth.
          </p>
        </div>
      </main>
      <ComputersCanvas />

      <div className="scroll-down">
        <a href="#about">
          <div className="scroll-down_cont">
            <motion.dev
              className="scroll-down_inner"
              animate={{ y: [0, 25, 0] }}
              transition={{
                ease: "easeIn",
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
