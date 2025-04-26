import React from "react";
import "./Carreer.css";

import Amazon from "../../Images/Amazon.jpg";
import Frontend from "../../Images/front_end.jpg";
import DataEntry from "../../Images/data_entry.jpg";
import CustService from "../../Images/customer_service.jpg";
import { motion } from "framer-motion";
const Carreer = ({ data, addClass }) => {
  const backgroundPic = [Amazon, Frontend, CustService, DataEntry];

  return (
    <div className={`carreer-conatainer ${addClass}`}>
      <div className="carreer-text">
        <h1>Carreer Higlights</h1>
      </div>

      <div className="carreer-cards">
        {data[0].Work_experince.map((el, i) => {
          return (
            <Cards
              title={el.job_title}
              years={el.years}
              description={el.description}
              src={backgroundPic[i]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Cards = ({ title, years, description, src }) => {
  const carreerhighlight = {
    hide: {
      opacity: 0,
    },
    visible: {
      opacity: [0, 1],
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 5,
      },
    },
  };

  const children = {
    hide: {
      x: "100vh",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={carreerhighlight}
      initial="hide"
      whileInView="visible"
      className="cards-container"
    >
      <motion.div
        variants={children}
        initial="hide"
        whileInView="visible"
        viewport={{ once: true }}
        className="card-image"
      >
        <div className="img-box">
          <img src={src} alt="" />
        </div>
      </motion.div>

      <div className="card-details">
        <div className="card-title">
          <h2>
            {title} <span>{`${years} years of Experience`}</span>
          </h2>
        </div>
        <div className="cards-description">
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Carreer;
