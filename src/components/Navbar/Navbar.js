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

    this.home = "navlink";
    this.topics = "navlink";
    this.problems = "navlink";

    if(props.open === "home"){
      this.home = "open";
    }else if(props.open === "topics"){
      this.topics = "open";
    }else if(props.open === "problems"){
      this.problems = "open";
    }

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
              <NavLink className={this.home} tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={this.topics} tag={Link} to="/Topics">Topics</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={this.problems} tag={Link} to="/Problems">Problems</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

