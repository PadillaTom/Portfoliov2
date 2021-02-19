import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigationContext } from '../Context/navigation_context';
import { Footer } from '../Components/Navigation';
import { workDetails } from '../Utils/data';

// Animations:
import { motion } from 'framer-motion';
import { pageTrans, pageVars } from '../Utils/helpers';

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
        className='section works-sect'
        initial='out'
        animate='in'
        exit='out'
        variants={pageVars}
        transition={pageTrans}
        key='WP'
      >
        <div className='works-title'>
          <h1>Works</h1>
          <div className='works-underline'></div>
        </div>

        {/* Pongo Filter? */}
        <div className='single-works-container'>
          {/* Kampai Boutique */}

          {data.map((proj) => {
            const { id, title, right, slug, workImg } = proj;
            if (right === true) {
              return (
                <div className='single-work-1' key={id}>
                  <Link to={`/works/${slug}`}>
                    <div className='work-img-container'>
                      <img src={workImg} alt='Tomas Padilla Work' />
                    </div>
                    <div className='single-work-title'>
                      <h4>{title}</h4>
                      <div className='single-work-cta'>Details</div>
                    </div>
                  </Link>
                </div>
              );
            } else {
              return (
                <div className='single-work-2' key={id}>
                  <Link to={`/works/${slug}`}>
                    <div className='work-img-container'>
                      <img src={workImg} alt='Fincas Manolo Tomas Padilla' />
                    </div>
                    <div className='single-work-title'>
                      <h4>{title}</h4>
                      <div className='single-work-cta'>Details</div>
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
        <Footer></Footer>
      </motion.section>
    </>
  );
};

export default WorksPage;
