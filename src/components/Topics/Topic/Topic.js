import React, { Component } from 'react';
import {Container} from 'reactstrap';
import './Topic.css';

export default class Topic extends Component {

    constructor(props){
        super(props);
        this.quarter = props.quarter;
        this.session = props.session;



    }

    render() {
        return (
        
        <Container fluid className="black-b full center">
            

            

        </Container>

        );
    }
}