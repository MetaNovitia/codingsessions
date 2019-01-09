import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Home.css';
import './backcolors.css';

export default class Home extends Component {

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
            <Container 
                    fluid 
                    className="black-b center"
                    style={{
                        height: this.y.toString() + "px"
                    }}
            >
                <NavBar open="home"></NavBar>
                <Row    className="title center"
                        style={{
                            marginTop: ((this.y-68-26)/2-120).toString() + "px"
                        }}
                >Coding Session</Row>
                <Row    className="subtitle center"
                        style={{
                            marginBottom: ((this.y-68-26)/2-30).toString() + "px"
                        }}
                >by ACM@UCI</Row>
                <Footer></Footer>
            </Container>
        );
    }
}