import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import heroBg from "../Assets/Images/heroBg.jpg";
import { useNavigationContext } from "../Context/navigation_context";

// Animations:
import { motion } from "framer-motion";
import {
  pageVars,
  transHome,
  varsHomeBg,
  varsHomeName,
  varsHomeCta,
} from "../Utils/helpers";

const Homepage = () => {
  const { setColorDark } = useNavigationContext();

  useEffect(() => {
    setColorDark();
  }, []);

  return (
    <>
      <motion.section
        className="home-sect"
        initial="out"
        animate="in"
        exit="out"
        variants={pageVars}
        transition={transHome}
        key="Home"
      >
        <div className="home-bg">
          <motion.img
            src={heroBg}
            alt="Tomas Padilla Homepage"
            initial="from"
            animate="to"
            variants={varsHomeBg}
            transition={{ duration: 2.2, ease: "easeIn" }}
            key="HomeBG"
          />
          <div className="home-bg-overlay"></div>
          <div className="home-bg-circle"></div>
        </div>
        <motion.div
          initial="from"
          animate="to"
          variants={varsHomeName}
          transition={{ duration: 0.5, ease: "circIn", delay: 0.8 }}
          key="homeName"
          className="homepage-container"
        >
          <h6>Tomas Padilla</h6>
          <h2>Web Developer</h2>
        </motion.div>
        <Link to="/works" className="homeCTA">
          <motion.button
            type="button"
            initial="from"
            animate="to"
            variants={varsHomeCta}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            key="HomeCTA"
          >
            Works
          </motion.button>
        </Link>
      </motion.section>
    </>
  );
};

export default Homepage;
