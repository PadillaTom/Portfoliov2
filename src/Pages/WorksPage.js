import React, { useEffect } from 'react';

import { useNavigationContext } from '../Context/navigation_context';
import { Footer } from '../Components/Navigation';
import project1 from '../Assets/Images/project1.jpg';
import project2 from '../Assets/Images/project2.jpg';

const WorksPage = () => {
  const { setColorLight } = useNavigationContext();
  useEffect(() => {
    setColorLight();
  }, []);

  return (
    <section className='section works-sect'>
      <div className='works-title'>
        <h1>Works</h1>
        <div className='works-underline'></div>
      </div>

      {/* Pongo Filter? */}
      <div className='single-works-container'>
        {/* Kampai Boutique */}
        <div className='single-work-1'>
          <div className='work-img-container'>
            <img src={project1} alt='Kampai Boutique Tomas Padilla' />
          </div>
          <div className='single-work-title'>
            <h4>Kampai Boutique</h4>
            <div className='single-work-cta'>Details</div>
          </div>
        </div>

        {/* Fincas Manolo */}
        <div className='single-work-2'>
          <div className='work-img-container'>
            <img src={project2} alt='Fincas Manolo Tomas Padilla' />
          </div>
          <div className='single-work-title'>
            <h4>Fincas Manolo</h4>
            <div className='single-work-cta'>Details</div>
          </div>
        </div>

        {/* Project 3 */}
      </div>

      <Footer></Footer>
    </section>
  );
};

export default WorksPage;
