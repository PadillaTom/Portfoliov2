import React from 'react';

const WelcomeScreen = () => {
  return (
    <>
      <div className='preloader'>
        <div className='preloader__content'>
          {/* Name */}
          <div className='preloader-texts'>
            <h2>
              Tomas <br /> Padilla
            </h2>
            <p>Web Developer</p>
          </div>
          {/* END Name */}

          {/* Counter */}
          <div className='preloader__counter'>
            <span>0</span>
            <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
            <span>100</span>
          </div>
          {/* END Counter */}

          {/*  Circle */}
          <div className='preloader__circle'></div>
          {/* END Circle */}
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
