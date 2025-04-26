import React from "react";
import { motion, stagger } from "framer-motion";

const Stagger = () => {
  const staggerAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const staggerChildren = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn",
      },
    },
  };
  return (
    <div>
      <motion.ul
        variants={staggerAnimation}
        initial="initial"
        animate="animate"
        style={{ display: "flex", gap: "2rem" }}
      >
        <motion.li variants={staggerChildren}>Home</motion.li>
        <motion.li variants={staggerChildren}>Home</motion.li>
        <motion.li variants={staggerChildren}>Home</motion.li>
        <motion.li variants={staggerChildren}>Home</motion.li>
        <motion.li variants={staggerChildren}>Home</motion.li>
        <motion.li variants={staggerChildren}>Home</motion.li>
        <motion.li variants={staggerChildren}>Home</motion.li>
      </motion.ul>
    </div>
  );
};

export default Stagger;
