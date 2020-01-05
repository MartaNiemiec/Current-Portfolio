import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import * as classes from './Navbar.module.scss';
import logo from '../../assets/images/favicon.png';

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
        <Navbar  dark fixed="top" expand="md" className={`${classes.Navbar} shadow pt-1 pb-1`}>
          <NavbarBrand href="/" className="p-0">
            <img style={{height:"3.5rem"}} src={logo} alt="logo"/>
            </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar >
              <NavItem>
                <NavLink active className={classes.Navbar__link} href="#header">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classes.Navbar__link} href="#ownProjects">OWN PROJECTS</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink className={classes.Navbar__link} href="#couresProjects">COURSES PROJECTS</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className={classes.Navbar__link} href="#footer">CONTACT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}