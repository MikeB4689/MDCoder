import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import { Link } from "react-scroll";
import File from "../../Images/Resume.pdf";

const Navbar = ({
  setClass,
  addClass,
  index,
  setIndex,
  toggleHide,
  hideBg,
  isBghide,
}) => {
  const [activeBtn, setActive] = useState("active");
  const set_index = (id) => {
    setIndex(id);
  };

  const naVanimation = {
    hide: {
      left: "100%",
      opacity: 0,
    },
    visible: {
      left: 0,
      opacity: [0, 0.5, 1],
      transiton: {
        duration: 3,
        type: "spring",
        bounce: 0.5,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  const navList = {
    hide: {
      opacity: 0,
      y: 10,
    },
    visible: (i) => ({
      y: 0,
      opacity: [0, 0, 0.25, 1],
      transition: {
        type: "spring",
        delay: 0.3 * i,
        bounce: 0.5,
        duration: 1,
      },
    }),
  };
  return (
    <motion.nav
      variants={naVanimation}
      initial="hide"
      animate="visible"
      className={`n-container ${addClass}`}
    >
      <div className="n-right">
        <div
          className={`n-name ${addClass}`}
          onClick={(e) => {
            window.location.reload();
          }}
        >
          MD CODER PORTFOLIO
        </div>
        <div className={`toggle-button ${addClass}`}>
          <div
            onClick={() => {
              setClass(addClass === "light" ? "dark" : "light");
              isBghide(!hideBg);
              console.log(hideBg);
            }}
          ></div>
        </div>
      </div>
      <div className="n-left">
        <div className="n-list">
          <button>
            <a href={File} download={File}>
              Reusme
            </a>
          </button>

          <button>Video</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
