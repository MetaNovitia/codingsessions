import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import NavBar from '../Navbar/Navbar';
import './Home.css';

export default class Home extends Component {

    render() {
        return (
            <Container fluid className="black-b full center">
                <NavBar></NavBar>
                <Row className="title center">Coding Session</Row>
                <Row className="subtitle center">by ACM@UCI</Row>
            </Container>
        );
    }
}