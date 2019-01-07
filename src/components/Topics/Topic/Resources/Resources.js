import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import './Resources.css';


export default class Resources extends Component {

    constructor(props){
        super(props);
        this.state = { collapse: false };
        this.data = props.resources;
        this.resources = []

        for(var i=0; i<this.data.length; i++){
            var buttons = []
            for(var j=1; j<this.data[i].length; j++){
                
                var x = 140;        // brightness
                var c = 20;         // saturation
                var y = 255-x-c;
                var color = [x,x,x];

                var change = Math.floor(Math.random()*3);
                var other = 2;

                if (change===1){
                    color[1]=x+20;
                    if(Math.random()<0.5){
                        color[0] = x+y;
                    }else{
                        color[2] = x+y;
                    }
                }else{
                    if (change===2){
                        other = 0;
                    }
                    color[other] = x+y;
                    color[change] = Math.floor(Math.random() * y) +x;
                }

                buttons.push(
                    <a href={this.data[i][j][1]} 
                            target="_blank"
                            rel="noopener noreferrer"
                            key={j}
                            style={{
                                backgroundColor:    "rgb("+
                                                    color[0].toString()+","+
                                                    color[1].toString()+","+
                                                    color[2].toString()+
                                                    ")"
                            }}
                            className="resource-btn">
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

    render() {
        return (
            this.resources
        );
    }
}