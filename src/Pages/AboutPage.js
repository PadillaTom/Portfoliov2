import React from 'react';
import styled from 'styled-components';

const AboutPage = () => {
  return (
    <Wrapper>
      <h1>Quienes Somos?</h1>
    </Wrapper>
  );
};

// ::: CSS :::
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  h1 {
    color: red;
  }
`;

export default AboutPage;
