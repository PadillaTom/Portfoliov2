import React from 'react';
import styled from 'styled-components';
// Background:
import BGimg from '../Assets/Trans1.jpg';

const Hero = () => {
  return (
    <Wrapper>
      <div className='bg-img-overlay'></div>
      <img src={BGimg} alt='Background' className='bg-img' />
      <div className='hero-text'>
        <h2>
          TRANSPORTES SIN LIMITES es una empresa de capitales propios
          constituida en la zona norte de buenos aires, que desde hace años se
          dedica al transporte de personas con discapacidad.
        </h2>
      </div>
    </Wrapper>
  );
};

// ::: CSS :::
const Wrapper = styled.section`
  min-height: 75vh;
  display: grid;
  place-items: center;
  position: relative;
  .bg-img-overlay {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.6;
  }
  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .hero-text {
    z-index: 2;
    width: 90%;
    margin: 0 auto;
    h2 {
      width: 45%;
      text-align: left;
      font-size: 1.3rem;
      color: white;
      letter-spacing: 1.5px;
      line-height: 1.3;
    }
  }
`;

export default Hero;
