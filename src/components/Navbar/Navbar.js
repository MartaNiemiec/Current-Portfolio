import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar  dark fixed="top" expand="md" className="shadow" style={{backgroundImage: "linear-gradient(to top, rgba(0, 4, 40,.3), rgba(0, 78, 146,.3))"}}>
          <NavbarBrand href="/" style={{
            fontFamily: "Condiment, cursive", 
            fontWeight: "bolder",
            letterSpacing: ".2rem",
            fontSize: "1.5rem"}}>Marta Niemiec</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar >
              <NavItem>
                <NavLink href="/about/">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/own-projects/">OWN PROJECTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/courses-projects/">COURSES PROJECTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/">CONTACT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}