import React from 'react';
import styled from 'styled-components';
import Burguer from './burguer';

const Nav = styled.nav`
    z-index:9999;
    @media (min-width: 600px) {
      display:none;
    }
`

const Navbar = () => {
  return (
    <Nav>
      <Burguer />
    </Nav>
  )
}

export default Navbar