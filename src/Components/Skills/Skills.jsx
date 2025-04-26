import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import "./Skills.css";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";

const Skills = ({ data, addClass, setIndex, index }) => {
  const percentRat = [];
  const skillsRate = data[0].Skills;
  const [rotate, isRotate] = useState(false);
  const Skills = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const staggerSkillsChild = {
    initial: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        bounce: 0.5,
      },
    },
  };

  return (
    <div className={`skills-conatianer ${addClass}`}>
      <div className="skill-text-container">
        <h1>Skill Rate</h1>
      </div>

      <motion.div
        variants={Skills}
        initial="initial"
        whileInView="visible"
        className="skills-arr"
      >
        {skillsRate.map((el, i) => {
          percentRat.push(el.rate);

          return (
            <motion.div
              variants={staggerSkillsChild}
              className="progress-container-outer"
            >
              <div className="div-progress">
                <ProgressBar
                  addClass={addClass}
                  key={i}
                  percentRat={percentRat}
                  dataRate={el.rate}
                  dataId={i}
                />
              </div>
              <div className="skill-description">
                <p>{el.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
