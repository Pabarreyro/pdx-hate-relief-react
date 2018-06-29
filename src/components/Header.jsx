import React from "react";
import cccLogo from '../assets/images/ccc.png';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function Header(){
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={cccLogo}/>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Report
        </NavItem>
        <NavItem eventKey={2} href="#">
          Connect
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
