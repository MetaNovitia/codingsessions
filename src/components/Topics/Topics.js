import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import NavBar from '../Navbar/Navbar';
import Topic from './Topic/Topic';
import './Topics.css';

export default class Topics extends Component {

    render() {
        return (
        <Container fluid className="black-b full center">
            <NavBar open="topics"></NavBar>
            <Row className="title center">Session 1: Intro to Graphs</Row>
            <Row className="subtitle center">January 9, 2019</Row>

            <div><br/><br/></div>

            <Row className="subtitle center">-------- Slides --------</Row>

            <Topic session="1" quarter="Winter 2019"></Topic>
            

        </Container>
        );
    }
}