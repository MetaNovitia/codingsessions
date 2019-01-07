import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import './Resources.css';
import $ from "jquery";


export default class Resources extends Component {

    constructor(props){
        super(props);
        this.state = { collapse: false };
        this.data = props.resources;
        this.resources = []
        var colors = ["blue","purple","red","pink","darkblue","green","yellow","orange"];

        for(var i=0; i<this.data.length; i++){
            var buttons = []
            for(var j=1; j<this.data[i].length; j++){
                buttons.push(
                    <a href={this.data[i][j][1]} 
                            target="_blank"
                            rel="noopener noreferrer"
                            key={j}
                            className={colors[Math.floor(Math.random() * colors.length)]+" resource-btn"}>
                        {this.data[i][j][0]}
                    </a>
                )
            }

            this.resources.push(
                <Card key={i} className="resource">
                    <a className="resource-link" href={this.data[i][0][1]} target="_blank" rel="noopener noreferrer">
                        <CardTitle className="resource-title">{this.data[i][0][0]}</CardTitle>
                    </a>
                    <CardSubtitle className="resource-text">
                        {this.data[i][0][3]}
                    </CardSubtitle>
                    <CardBody>
                        {buttons}
                    </CardBody>
                </Card>
            )
        }
        
    }

    // componentDidMount(){
    //     $.ajax({
    //         url: this.,
    //         context: document.body
    //     }).done(this.setCode);
    // }

    render() {
        return (
            this.resources
        );
    }
}