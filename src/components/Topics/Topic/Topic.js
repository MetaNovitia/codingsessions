import React, { Component } from 'react';
import {Container} from 'reactstrap';
import './Topic.css';

export default class Topic extends Component {

    constructor(props){
        super(props);
        this.quarter = props.quarter;
        this.session = props.session;

        this.link = "https://raw.githubusercontent.com/MetaNovitia/codingsessions/master/src/topics/" +
                    this.quarter.split(" ")[0] + "%20" +
                    this.quarter.split(" ")[1] + "/" +
                    this.session + ".csv";

        

    }

    render() {
        return (
        
        <Container fluid className="black-b full center">
            

            

        </Container>

        );
    }
}