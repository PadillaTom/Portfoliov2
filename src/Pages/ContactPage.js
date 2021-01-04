import React from 'react';
import styled from 'styled-components';

const ContactPage = () => {
  return (
    <Wrapper>
      <h1>Contacto</h1>
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

export default ContactPage;
