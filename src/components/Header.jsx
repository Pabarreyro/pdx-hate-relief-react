import React from 'react';
import cccLogo from '../assets/images/ccc.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function Header(){
  return (
    <Navbar style={{padding:'0.5rem 1rem'}} inverse collapseOnSelect>
      <Navbar.Header>
        <Link to='/'>
          <Navbar.Brand>
            <img src={cccLogo}/>
          </Navbar.Brand>
        </Link>
      </Navbar.Header>
      <Nav>
        <NavItem>
          <Link to='/report'>Report</Link>
        </NavItem>
        <NavItem>
          <Link to='/connect'>Connect</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
