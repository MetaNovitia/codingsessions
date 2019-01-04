import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Navbar, Nav, NavItem, NavLink, Collapse, NavbarToggler} from 'reactstrap';

class Navigation extends Component {
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
      <Navbar className="" expand="md">
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="navlink" tag={Link} to="/codingsessions">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" tag={Link} to="/events">Topics</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" tag={Link} to="/Problems">Problems</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

