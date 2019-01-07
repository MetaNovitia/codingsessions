import React, { Component } from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container} from 'reactstrap';
import $ from 'jquery';
import './Resources.css';


export default class Resources extends Component {

    constructor(props){
        super(props);
        this.state = { collapse: false };
        this.data = props.resources;
        this.resources = []

        for(var i=0; i<this.data.length; i++){
            this.resources.push(
                <Card>
                    
                </Card>
            )
        }
        
    }

    render() {
        return (
            <Container>
                <Card>

                </Card>
            </Container>
        );
    }
}