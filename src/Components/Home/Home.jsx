import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaDisplay } from "react-icons/fa6";
import { RiMessage3Fill } from "react-icons/ri";

import {
  AnimatePresence,
  easeIn,
  motion,
  useAnimation,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const Home = ({ addClass, data, toggleHide }) => {
  const [counter, setCount] = useState(0);
  const [motionClass, setMotion] = useState("active");

  //target ref
  const targetRef = useRef(null);
  const [offsetWidth, setoffset] = useState();
  useEffect(() => {
    window.onload = () => {
      setoffset(targetRef.current.offsetWidth);
    };

    setoffset(targetRef.current.offsetWidth);
    console.log(offsetWidth);
    const count = setInterval(() => {
      counter == 3 ? setCount(0) : setCount((pre) => pre + 1);
    }, 20000);

    return () => {
      clearInterval(count);
    };
  }, [counter, motionClass, offsetWidth]);

  const staggerAnimation = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
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
        type: "spring",
        damping: 8,
        stiffnes: 400,
        duration: 0.5,
        bounce: 0.5,
      },
    },
  };

  const animationVariant = {
    initial: {
      opacity: 0,

      transition: {
        duration: 0.5,
      },
    },
    animate: (counter) => ({
      opacity: 1,

      transition: {
        easeIn: "ease",
        duration: 0.2,
      },
    }),
    exit: { x: -90 },
  };

  const animateDate = {
    initial: {
      opacity: 0,
      x: offsetWidth,

      transition: {
        easeIn: "ease",
        duration: 1,
      },
    },
    animate: {
      opacity: [0, 0.25, 0.5, 1],
      x: 0,
      transition: {
        type: "spring",

        stiffnes: 400,
        duration: 0.5,
      },
    },
    exit: { x: -90 },
  };

  //animate date
  const animateDataTime = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        easeIn: "ease",
        delay: 0.5,
        duration: 0.4,
      },
    },
  };
  return (
    <motion.div
      variants={staggerAnimation}
      initial="initial"
      animate="animate"
      className={`home-container ${addClass}`}
    >
      <motion.div className="text-container">
        <motion.h1 variants={staggerChildren}>
          <span>Hi!</span>, Welcome to my Portfolio
        </motion.h1>
        <motion.h2 variants={staggerChildren}>
          My name is Michael Dean as <span>M.Dcoder</span>.
        </motion.h2>
        <div className="title-text-container">
          <motion.h2 variants={staggerChildren}>
            <div className={`span-wrapper ${motionClass}`}>
              <AnimationParagraph
                targetRef={targetRef}
                variants={animateDate}
                initial={`initial`}
                custom={counter}
                animate={`animate`}
                description={data[0].Work_experince[counter].job_title}
                className="paragrap"
              >
                {data[0].Work_experince[counter].job_title}
              </AnimationParagraph>
            </div>
          </motion.h2>
          <motion.div variants={staggerChildren} className="date">
            <AnimationParagraph
              targetRef={targetRef}
              variants={animateDataTime}
              initial={`initial`}
              custom={counter}
              animate={`animate`}
              description={data[0].Work_experince[counter].date}
              className="date-container"
            >
              {data[0].Work_experince[counter].date}
            </AnimationParagraph>
          </motion.div>
        </div>
        <AnimationParagraph
          targetRef={targetRef}
          variants={animationVariant}
          initial={`initial`}
          custom={counter}
          animate={`animate`}
          description={data[0].Work_experince[counter].job_title}
          className="paragrap"
        >
          {data[0].Work_experince[counter].description}
        </AnimationParagraph>

        <motion.div className="skills-idea">
          <motion.ul variants={staggerChildren}>
            {data[0].Work_experince[counter].tools.map((el, i) => {
              return (
                <motion.li variants={staggerChildren} key={el}>
                  {el}
                </motion.li>
              );
            })}
          </motion.ul>
          <motion.button
            className="button-container"
            onClick={toggleHide}
            variants={staggerChildren}
          >
            <p>Email me</p>
            <p>
              <RiMessage3Fill className="email-icon" />
            </p>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const AnimationParagraph = ({
  targetRef,
  children,
  description,
  variants,
  className,
  custom,
  animate,
  initial,
}) => {
  return (
    <motion.p
      ref={targetRef}
      initial={initial}
      variants={variants}
      animate={animate}
      custom={custom}
      key={description}
      className={className}
    >
      {children}
    </motion.p>
  );
};

export default Home;
