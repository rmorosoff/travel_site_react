import React, { Component } from 'react';
import './Navigation.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      // use React-Bootstrap Navigation Bar
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">My Travel Site</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">Stuff</NavItem>
            <NavItem eventKey={3} href="#">Contact Us</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;