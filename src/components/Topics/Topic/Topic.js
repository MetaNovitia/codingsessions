import React, { Component } from 'react';
import {Container} from 'reactstrap';
import $ from 'jquery';
import './Topic.css';

export default class Topic extends Component {

    constructor(props){
        super(props);
        this.processData = this.processData.bind(this);
        this.quarter = props.quarter;
        this.session = props.session;

        this.link = "https://raw.githubusercontent.com/MetaNovitia/codingsessions/master/src/topics/" +
                    this.quarter.split(" ")[0] + "%20" +
                    this.quarter.split(" ")[1] + "/" +
                    this.session + ".csv";

        
    }

    componentDidMount() {
        $.ajax({
            url: this.link,
            context: document.body
        }).done(this.processData);
    }

    processData(data){
        var lines = data.split(/\r\n|\n/);
        var slides = [[]];
        if(lines.length>0){
            slides[0].push(lines[1].split(","));
        }
        for (var i=2; i<lines.length; i++) {
            var slide = lines[i].split(",");
            if (slide[1]!==slides[slides.length-1][0][1]){
                slides.push([]);
            }
            slides[slides.length-1].push(slide);
        }

        for (i=0; i<slides.length; i++){
            for (var j=0; j<slides[i].length; j++){
                slides[i][j] = {
                    src: 's',
                    altText: 'Slide 1',
                    caption: 'Slide 1'
                }
            }
        }
    }

    render() {
        return (
        
        <Container fluid className="black-b full center">
            

            

        </Container>

        );
    }
}