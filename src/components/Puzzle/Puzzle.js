
import React, { Component } from 'react';
import {Alert, Row} from 'reactstrap';
import NavBar from '../Navbar/Navbar';
import Session from './Session/Session';
import './Puzzle.css';

class Puzzle extends Component {

    render() {
        return (
        <div className = "center">
            <NavBar></NavBar>
            <Row className="title center">Session 1</Row>
            <Row className="subtitle center">January 9, 2019</Row>
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

        </div>
        );
    }
}

export default Puzzle;