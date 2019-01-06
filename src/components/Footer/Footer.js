import React, { Component } from 'react';
import './Footer.css';
import { Row } from 'reactstrap';

class Footer extends Component {

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Row className="foot">
          Copyright © 2019 Meta Novitia. All Rights Reserved.
      </Row>
    );
  }
}

export default Footer;

