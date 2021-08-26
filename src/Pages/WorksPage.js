import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useNavigationContext } from "../Context/navigation_context";
import { Footer } from "../Components/Navigation";
import { workDetails } from "../Utils/data";

// Animations:
import { motion } from "framer-motion";
import { varsWp, varsWpWorks } from "../Utils/helpers";

const WorksPage = () => {
  const { setColorLight } = useNavigationContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    setColorLight();
    const fetchData = async () => {
      await setData(workDetails);
    };
    fetchData();
  }, [data]);

  return (
    <>
      <motion.section
        className="section works-sect"
        initial="out"
        animate="in"
        exit="out"
        variants={varsWp}
        transition={{ duration: 0.4 }}
        key="WP"
      >
        <div className="works-title">
          <motion.h1
            initial={{ opacity: 0, x: "-50vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            key="workstitle"
          >
            Works
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            key="worksunderline"
            className="works-underline"
          ></motion.div>
        </div>

        {/* Pongo Filter? */}
        <motion.div
          initial="from"
          animate="to"
          variants={varsWpWorks}
          transition={{ duration: 0.4, delay: 0.3, staggerDirection: 1 }}
          key="wpContainer"
          className="single-works-container"
        >
          {data.map((proj) => {
            const { id, title, right, slug, workImg, shortStack } = proj;

            if (right === true) {
              return (
                <div className="single-work-1" key={id}>
                  <Link to={`/works/${slug}`}>
                    <div className="work-img-container">
                      <img src={workImg} alt="Tomas Padilla Work" />
                    </div>
                    <div className="single-work-title">
                      <h4>{title}</h4>
                      <div className="single-work-cta">{shortStack}</div>
                    </div>
                  </Link>
                </div>
              );
            } else {
              return (
                <div className="single-work-2" key={id}>
                  <Link to={`/works/${slug}`}>
                    <div className="work-img-container">
                      <img src={workImg} alt="Fincas Manolo Tomas Padilla" />
                    </div>
                    <div className="single-work-title">
                      <h4>{title}</h4>
                      <div className="single-work-cta">{shortStack}</div>
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </motion.div>
        <Footer></Footer>
      </motion.section>
    </>
  );
};

export default WorksPage;
