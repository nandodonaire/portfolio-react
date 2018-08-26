import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const NavBar = () => (
    <Navbar inverse collapseOnSelect fixedTop style={{fontFamily: "'Ubuntu', sans-serif"}} id='navbar'>
    <Navbar.Header>
        <Navbar.Brand style={{fontSize: '25px'}}>
        Fernando Donaire
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav pullRight>
        <NavItem eventKey={1} href="#about-me">
            About Me
        </NavItem>
        <NavItem eventKey={2} href="#skills">
            Skills
        </NavItem>
        <NavItem eventKey={3} href="#resume">
            Resume
        </NavItem>
        <NavItem eventKey={4} href="#projects">
            Projects
        </NavItem>
        <NavItem eventKey={5} href="#contact-me">
            Contact Me
        </NavItem>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
)

export default NavBar