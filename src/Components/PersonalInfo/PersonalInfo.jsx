import React, { useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../../Images/profile.jpg";
import "./PersonalInfo.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaSkype } from "react-icons/fa";
import { FaMapLocationDot, FaPlugCirclePlus } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSignalMessenger } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { MdGroupWork } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";

const mainContainer = {
  hide: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const detailsCard = {
  hide: {
    opacity: 0,
    x: "100vh",
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      type: "spring",
      duration: 0.2,
      bounce: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const listDetails = {
  hide: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
    },
  },
};

const FaQ = {
  hide: {
    x: "100vh",
  },
  visible: {
    x: 0,
    transition: {
      ease: "easeIn",
      damping: 8,
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const FaQContainer = {
  hide: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: [0, 0.5, 1],
    transition: {
      bounce: 0.5,
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

const PersonalInfo = ({ data, addClass }) => {
  const [open, setOpen] = useState("close");
  const contact = data[0].Contact;
  const location = data[0].Location;
  const online_profile = data[0].online_profile;
  const [index, setIndex] = useState(0);
  const [isOpen, setOpenBtn] = useState(false);

  return (
    <motion.div
      className={`personal-conatainer ${addClass}`}
      variants={mainContainer}
      initial="hide"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="details-container">
        <motion.div variants={detailsCard} className="pname-container">
          <div className="outline-img-container">
            <div className="image-container">
              <img src={profilePic} alt="" />
            </div>
          </div>

          <h2>{`${data[0].Name.firstname} ${data[0].Name.midname} ${data[0].Name.lastname}`}</h2>
          <div className="personal-contact-container">
            <motion.ul>
              <motion.li variants={listDetails}>
                <span>
                  <FaWhatsapp />
                </span>
                <p>WhatsApp</p>
                <p> {contact.whatsApp}</p>
              </motion.li>
              <motion.li variants={listDetails}>
                <span>
                  <MdAttachEmail />
                </span>
                <p>email: </p>
                <p>{contact.gmail}</p>
              </motion.li>
              <motion.li variants={listDetails}>
                <span>
                  <FaSignalMessenger />
                </span>
                <p>dicourd: </p>
                <p> {contact.discourd}</p>
              </motion.li>
              <motion.li variants={listDetails}>
                <span>
                  <FaSkype />
                </span>
                <p>skype: </p>
                <p> {contact.skype}</p>
              </motion.li>
              <motion.li variants={listDetails}>
                <span>
                  <MdGroupWork />
                </span>
                <p>OnlineJobs:</p>
                <p>
                  <a href={`${online_profile.onlineJobs}`} target="_blank">
                    {online_profile.onlineJobs}
                  </a>
                </p>
              </motion.li>
              <motion.li variants={listDetails}>
                <span>
                  <FaSquareUpwork />
                </span>
                <p>Upwork: </p>
                <p>
                  <a href={`${online_profile.upwork}`} target="_blank">
                    {online_profile.upwork}
                  </a>
                </p>
              </motion.li>
              <motion.li variants={listDetails}>
                <span>
                  <IoLogoYoutube />
                </span>
                <p>Youtube: </p>
                <p>
                  <a href={`${online_profile.youtube}`}>
                    {online_profile.youtube}
                  </a>
                </p>
              </motion.li>
              <motion.li variants={listDetails}>
                <span>
                  <FaExternalLinkAlt />
                </span>
                <p>LinkdIn: </p>
                <p>
                  <a href={`${online_profile.linkdin}`} target="_blank">
                    {online_profile.linkdin}
                  </a>
                </p>
              </motion.li>
              <motion.li variants={listDetails}>
                <span>
                  <FaMapLocationDot />
                </span>
                <p>Location :</p>
                <p> {location.Country}</p>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>

        <div className="left-info-container">
          <div className="FAQ-container">
            <motion.h2 variants={FaQ}>FAQ</motion.h2>

            <motion.ul variants={FaQ}>
              {data[0].FaQ.map((el, i) => {
                return (
                  <motion.li
                    variants={FaQContainer}
                    className={index == i ? open : "close"}
                  >
                    <h2>
                      {el.title}
                      <span
                        onClick={(e) => {
                          setIndex(i);
                          setOpen(open === "close" ? "open" : "close");
                        }}
                      >
                        {open === "close" ? (
                          <FaPlusCircle />
                        ) : index === i ? (
                          <FaMinusCircle />
                        ) : (
                          <FaPlusCircle />
                        )}
                      </span>
                    </h2>

                    <p>{el.answer}</p>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
