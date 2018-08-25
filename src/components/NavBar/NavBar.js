import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const NavBar = () => (
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
        <a href="#home">Fernando Donaire</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav pullRight>
        <NavItem eventKey={1} href="#">
            About Me
        </NavItem>
        <NavItem eventKey={2} href="#">
            Skills
        </NavItem>
        <NavItem eventKey={3} href="#">
            Resume
        </NavItem>
        <NavItem eventKey={4} href="#">
            Projects
        </NavItem>
        <NavItem eventKey={5} href="#">
            Contact Me
        </NavItem>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
)

export default NavBar