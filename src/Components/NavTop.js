import React from 'react';
import styled from 'styled-components';
// Data:
import { navContact } from '../Data/constants';

const NavTop = () => {
  const { tel, mail } = navContact[0];
  console.log(navContact);
  return (
    <>
      <NavtopContainer>
        <div className='data-container'>
          <p>{tel}</p>
          <p>{mail}</p>
        </div>
      </NavtopContainer>
    </>
  );
};
const NavtopContainer = styled.nav`
  width: 100vw;
  background: white;
  .data-container {
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.2rem;
    p {
      margin-left: 1rem;
      color: black;
      font-size: 0.8rem;
      letter-spacing: 1.2px;
    }
  }
`;

export default NavTop;
