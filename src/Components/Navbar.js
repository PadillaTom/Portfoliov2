import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// DATA:
import { links } from '../Data/constants';
import NavTop from './NavTop';

const Navbar = () => {
  return (
    <>
      <NavTop></NavTop>
      <NavContainer>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <h4>Transportes Sin Limites</h4>
            </Link>
          </div>
          <ul className='nav-links'>
            {links.map((item) => {
              const { id, text, url } = item;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </NavContainer>
    </>
  );
};

// ::: CSS :::
const NavContainer = styled.nav`
  height: 5rem;
  background: violet;

  .nav-center {
    width: 90vw;
    height: 100%;
    margin: 0 auto;
    max-width: var(--MaxWidth);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    letter-spacing: 2px;
    font-size: 1.2rem;
  }
  .nav-links {
    display: flex;
    justify-content: space-around;
    li {
      margin-left: 1rem;
      border-bottom: 3px solid violet;
    }
    li:hover {
      border-bottom: 3px solid white;
    }
    a {
      color: white;
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: 1.5px;
      padding: 0.5rem 0.75rem;
    }
  }
`;

export default Navbar;
