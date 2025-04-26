import React from "react";
import "./Contact.css";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { MdCancel } from "react-icons/md";
import { TbLabel } from "react-icons/tb";

const Contact = ({ addClass, toggleHide, hideContact }) => {
  const [result, setResult] = React.useState("");
  const controls = useAnimationControls();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b3a9d99e-a699-490d-9724-1ecdb022daab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const ToggleShow = {
    hide: {
      opacity: 0,
    },
    visible: {
      opacity: [0, 0.25, 1],
      transition: {
        type: "spring",
        damping: 8,

        when: "beforeChildern",
        staggerChildren: 0.5,
      },
      exit: {
        opacity: 0,
        transition: {
          ease: "easeOut",
          when: "afterChildren",
          staggerChildren: 0.5,
        },
      },
    },
  };

  const childreShow = {
    hide: {
      borderRadius: "50%",
      scale: 0,
    },
    visible: {
      borderRadius: ["50%", "50%", "0%"],
      scale: [0, 1],
      transition: {
        duration: 1,
        ease: "easeIn",
        times: [0, 0.2, 0.8, 1],
      },
    },
    exit: {
      borderRadius: "50%",
      scale: 0,
      opacity: [1, 1, 0],
      transition: {
        ease: "backInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {hideContact && (
        <motion.div
          variants={ToggleShow}
          initial="hide"
          animate="visible"
          exit="exit"
          className={`contact-container ${addClass}`}
        >
          <motion.div variants={childreShow} className="contact-wrapper">
            <motion.p
              className="cancel-btn"
              onClick={() => {
                toggleHide();
              }}
            >
              <MdCancel />
            </motion.p>
            <h2>Send me message</h2>

            <div className="cont-details">
              <form action="submit" className="email" onSubmit={onSubmit}>
                <input type="text" name="name" required />
                <input type="email" name="email" required />
                <textarea name="message" required></textarea>

                <button type="submit">Submit Form</button>

                <span>{}</span>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
