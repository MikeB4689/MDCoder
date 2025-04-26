import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
import { motion } from "framer-motion";

const ProgressBar = ({ percentRat, dataRate, dataId, addClass }) => {
  const data = [...percentRat];

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      counter == dataRate ? clearInterval() : setCounter(counter + 1);
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);
  const strokeOffset = [];
  data.map((el) => {
    return strokeOffset.push(380 - 380 * (el / 100));
  });

  const anim = {
    initial: {
      strokeDasharray: 320,
      strokeDashoffset: 320,
    },

    visible: {
      strokeDasharray: 250,
      strokeDashoffset: strokeOffset[dataId],
      transition: {
        duration: 4,
      },
    },
  };
  return (
    <motion.div className="progress-container">
      <div className={`outer ${addClass}`}>
        <div className="inner">
          <h2>{`${counter}%`}</h2>
        </div>
      </div>
      <motion.svg width="150px" height="150px">
        <defs>
          <linearGradient id="linearGradient">
            <stop offset="0%" stopColor="yellowgreen" />
            <stop offset="100%" stopColor="green" />
          </linearGradient>
        </defs>
        <motion.circle
          variants={anim}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          cx="75"
          cy="75"
          r="59"
        />
      </motion.svg>
    </motion.div>
  );
};

export default ProgressBar;
