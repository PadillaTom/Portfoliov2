import React from "react";
import { useParams, Link } from "react-router-dom";

import { workDetails } from "../Utils/data";

// Animations:
import { motion } from "framer-motion";
import { pageTrans, pageVars } from "../Utils/helpers";

// Icons:
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

const WorkDetails = () => {
  // Find Work
  const { slug } = useParams();
  const myWork = workDetails.find((work) => work.slug === slug);
  const {
    title,
    workImg,
    client,
    location,
    launch,
    live,
    liveInsta,
    code,
    desc,
    stack,
    nextWork,
    nextWorkUrl,
    moreLinks,
    id,
  } = myWork;
  return (
    <>
      <motion.div
        className="section wd-sect"
        initial="out"
        animate="in"
        exit="exit"
        variants={pageVars}
        transition={pageTrans}
        key={id}
      >
        {/* Title */}
        <div className="wd-title">
          <motion.h2
            initial={{ opacity: 0, y: "-2rem" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            key="wdTitle"
          >
            {title}
          </motion.h2>
          <div className="wd-underline"></div>
        </div>
        {/* Image */}
        <div className="wd-img-container">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
            key="wdTmainImg"
            src={workImg}
            alt="Tomas Padilla Kampai Boutique"
          />
        </div>
        {/* Specs */}
        <div className="wd-specs">
          <div className="wd-specs-center">
            <div className="single-spec">
              <h4>Client</h4>
              <p>{client}</p>
            </div>
            <div className="single-spec">
              <h4>Location</h4>
              <p>{location}</p>
            </div>
            <div className="single-spec">
              <h4>Launch</h4>
              <p>{launch}</p>
            </div>
            <div className="single-spec">
              <h4>Website</h4>
              <a href={live} target="_blank" rel="noreferrer">
                View Live
              </a>
              <br />
              {liveInsta != null && (
                <a
                  href={liveInsta}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "1.7rem" }}
                >
                  <AiOutlineInstagram></AiOutlineInstagram>
                </a>
              )}

              {code != null && (
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "1.7rem" }}
                >
                  <AiOutlineGithub></AiOutlineGithub>
                </a>
              )}
            </div>
          </div>
        </div>
        {/* Desc */}
        <div className="wd-desc">
          <div className="wd-division"></div>
          <h2>About</h2>
          <p>{desc}</p>
          <br />
          <span>{stack}</span>
          <br />
          <div className="moreLinks-container">
            {moreLinks.length > 0 &&
              moreLinks.map((link) => {
                const { id, name, url, icon } = link;
                return (
                  <div className="moreLinks-single" key={id}>
                    <a href={url} target="_blank" rel="noreferrer">
                      <span>{icon}</span>
                      <h4>{name}</h4>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
        {/* Next Project  */}
        <div className="wd-nextWork">
          <Link to={nextWorkUrl} className="wd-nextWork-text">
            <p>Next Work</p>
            <span>{nextWork}</span>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default WorkDetails;
