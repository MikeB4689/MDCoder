import React, { useState } from "react";
import "./Videos.css";
import { motion } from "framer-motion";
const Videos = () => {
  const [openCircle, isOpen] = useState(false);

  const toggleBtn = () => {
    isOpen(!openCircle);
    console.log(openCircle);
  };
  const animation = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
      },

      close: {
        clipPath: "circle(50px at 50px 50px)",
        transition: {
          type: "spring",
          duration: 5,
        },
      },
    },
  };

  return (
    <motion.div
      initial="close"
      animate={openCircle ? "close" : "open"}
      className="clipPatContainer"
    >
      <motion.div className="cirlcePath" variants={animation}></motion.div>

      <button className="clipBtn" onClick={toggleBtn}>
        Video
      </button>
    </motion.div>
  );
};

export default Videos;
