import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper>
      <h1 className='hero-title'>Main Hero Component Inside HOMEPAGE</h1>
    </Wrapper>
  );
};

// ::: CSS :::
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .hero-title {
    color: red;
  }
`;

export default Hero;
