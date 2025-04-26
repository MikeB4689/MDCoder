import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import { useEffect, useRef, useState } from "react";
import constant from "./constant/Constant.js";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Videos from "./Components/Videos/Videos.jsx";
import Contact from "./Components/Contacts/Contact.jsx";
import Video from "../src/Images/video1.mp4";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
const App = () => {
  const data = constant;
  const [addClass, setClass] = useState("light");
  const [getoffSetWidth, setOffsetWidth] = useState();
  const [hideContact, isHide] = useState(false);
  const [index, setIndex] = useState(0);
  const toggleHide = () => {
    isHide(!hideContact);
  };

  const [hideBg, isBghide] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    window.onload = () => {
      setOffsetWidth(targetRef.current.offsetWidth);
    };
  }, [getoffSetWidth]);

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
  return (
    <div ref={targetRef} className={`main-container ${addClass}`}>
      <AnimatePresence>
        {hideBg && (
          <motion.div
            variants={staggerAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="VgB"
          >
            <video src={Video} autoPlay loop muted />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mobile-navbar">
        <Navbar
          setClass={setClass}
          addClass={addClass}
          index={index}
          setIndex={setIndex}
          toggleHide={toggleHide}
          isBghide={isBghide}
          hideBg={hideBg}
        />
      </div>

      <Navbar
        setClass={setClass}
        addClass={addClass}
        index={index}
        setIndex={setIndex}
        toggleHide={toggleHide}
        isBghide={isBghide}
        hideBg={hideBg}
      />
      <div className="left-main">
        <Home
          addClass={addClass}
          data={data}
          toggleHide={toggleHide}
          hideBg={hideBg}
        />
      </div>

      <div className="right-main">
        <Sticky id="Home" className="homeSection">
          <Home
            addClass={addClass}
            data={data}
            toggleHide={toggleHide}
            hideBg={hideBg}
          />
        </Sticky>
        <Sticky id="Personal">
          <PersonalInfo data={data} addClass={addClass} />
        </Sticky>
        <Sticky id="Skills">
          <Skills
            data={data}
            addClass={addClass}
            setIndex={setIndex}
            index={index}
          />
        </Sticky>
      </div>
      <Contact
        addClass={addClass}
        toggleHide={toggleHide}
        hideContact={hideContact}
      />
    </div>
  );
};

const Sticky = ({ children, id, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: targetRef,
    offset: ["end end ", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.25]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  return (
    <motion.section id={id} className={className} ref={targetRef}>
      <motion.div className="sticky-wrapper" style={{ opacity, scale }}>
        {children}
      </motion.div>
    </motion.section>
  );
};
export default App;
