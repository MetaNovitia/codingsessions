
import React, { Component } from 'react';
import {Alert, Container, Row} from 'reactstrap';
import NavBar from '../Navbar/Navbar';
import Session from './Session/Session';
import Footer from '../Footer/Footer';
import './Puzzle.css';

export default class Puzzle extends Component {

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
            <NavBar open="problems"></NavBar>
            <Row    className="title center"
                    style={{
                        marginTop: ((this.y-68-26)/2-120).toString() + "px"
                    }}
            >Session 1</Row>
            <Row    className="subtitle center"
                    style={{
                        marginBottom: ((this.y-68-26)/2).toString() + "px"
                    }}
            >January 9, 2019</Row>
            <div className='center'>
                <Row className="center">
                    <Alert className="graphtraversal m">
                        Graph Traversal
                    </Alert>
                    <Alert className="mst m">
                        MST
                    </Alert>
                </Row>
            </div>

            <div><br/><br/></div>
            
            <Session end = {true} quarter="Winter 2019" session='1'></Session>
            <Footer></Footer>
        </Container>
        );
    }
}