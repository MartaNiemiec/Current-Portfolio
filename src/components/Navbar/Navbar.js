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
import logo from '../../assets/images/logo.svg';
import { NavLink as RRNavLink } from 'react-router-dom';

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
          <NavbarBrand tag={RRNavLink} to="/" className="p-0">
            <img style={{height:"3.5rem"}} src={logo} alt="logo"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar >
              <NavItem>
                <NavLink activeClassName={classes.active} tag={RRNavLink} className={classes.Navbar__link} to="/" exact>ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName={classes.active} tag={RRNavLink} className={classes.Navbar__link} to="/projects">PROJECTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName={classes.active} tag={RRNavLink} className={classes.Navbar__link} to="/graphics">GRAPHICS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName={classes.active} tag={RRNavLink} className={classes.Navbar__link} to="/contact">CONTACT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}