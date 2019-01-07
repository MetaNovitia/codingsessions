import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Home.css';
import './backcolors.css';

export default class Home extends Component {

    render() {
        return (
            <Container fluid className="black-b full center">
                <NavBar open="home"></NavBar>
                <Row className="title center">Coding Session</Row>
                <Row className="subtitle center">by ACM@UCI</Row>
                <Footer></Footer>
            </Container>
        );
    }
}