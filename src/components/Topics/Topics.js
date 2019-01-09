import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import NavBar from '../Navbar/Navbar';
import Topic from './Topic/Topic';
import Footer from '../Footer/Footer';
import './Topics.css';

export default class Topics extends Component {

    constructor(props){
        super(props);

        // x = window.innerWidth || 
        //     document.documentElement.clientWidth || 
        //     document.getElementsByTagName('body')[0].clientWidth;

        this.y = window.innerHeight || 
            document.documentElement.clientHeight || 
            document.getElementsByTagName('body')[0].clientHeight;
    }

    render() {
        return (
        <Container fluid className="black-b full center">
            <NavBar open="topics"></NavBar>
            <Row    className="title center"
                    style={{
                        marginTop: ((this.y-68-26)/2-120).toString() + "px"
                    }}
            >Session 1: Intro to Graphs</Row>
            <Row    className="subtitle center"
                    style={{
                        marginBottom: ((this.y-68-26)/2-30).toString() + "px"
                    }}
            >January 23, 2019</Row>

            <div><br/><br/></div>

            <Topic session="1" quarter="Winter 2019"></Topic>
            <div><br/><br/></div>
            <div><br/><br/></div>
            <Footer></Footer>
            

        </Container>
        );
    }
}