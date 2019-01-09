import React, { Component } from 'react';
import { Col, Card, CardBody, CardTitle} from 'reactstrap';
import './Problem.css';
import Solution from './Solution/Solution';

export default class Problem extends Component {

  constructor(props) {
    super(props);
    this.con = props.con;
    // this.solution=null;
    // if( props.slink !== ""){
    //       this.solution = <Solution 
    //                         txt = {props.txt} 
    //                         link={props.slink} 
    //                         quarter = {props.quarter}
    //                         session = {props.session}
    //                       ></Solution>
    // }

    this.solution = <Solution 
                      txt = {props.txt} 
                      link={props.slink} 
                      quarter = {props.quarter}
                      session = {props.session}
                    ></Solution>
                    
    this.link = props.link
    this.obj =  <a  className= {"plink word "+this.props.diff} 
                    href={this.link} 
                    target="_blank"
                    rel="noopener noreferrer">
                    <CardTitle>{props.name}</CardTitle>
                </a>
    
  }

  render() {
    return (
      <Card className={this.props.diff+" pright"}>
        <CardBody>
            <Col>
                {this.obj}
                {this.solution}
            </Col>
        </CardBody>
      </Card>
    );
  }
}