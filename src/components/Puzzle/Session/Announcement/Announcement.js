import React, { Component } from 'react';
import {Alert} from 'reactstrap';
import './Announcement.css';


export default class Announcement extends Component {

  constructor(props){
    super(props);
    this.name = props.name;
    this.desc = props.desc;
  }

  render() {
    return (
      <div>
        <Alert color="dark" fade={false}>
          {this.name}: {this.desc}
        </Alert>
      </div>
    );
  }
}