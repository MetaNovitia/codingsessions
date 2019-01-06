import React, { Component } from 'react';
import {Row} from 'reactstrap';
import $ from 'jquery';
import Slides from './Slides/Slides';
import s_head from './slides.png';
import Tabs from './Tabs/Tabs';
import './Topic.css';

export default class Topic extends Component {

    constructor(props){
        super(props);
        this.processData = this.processData.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
        this.quarter = props.quarter;
        this.session = props.session;
        this.slides = null;
        this.link = "https://raw.githubusercontent.com/MetaNovitia/codingsessions/master/public/topics/" +
                    this.quarter.split(" ")[0] + "%20" +
                    this.quarter.split(" ")[1] + "/" +
                    this.session + ".csv";

        
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
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
        var topics = [];
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
            topics.push(slides[i][0][1]);
            for (var j=0; j<slides[i].length; j++){
                slides[i][j] = {
                    src:    "https://github.com/MetaNovitia/codingsessions/blob/master/public/topics/" +
                            this.quarter.split(" ")[0] + "%20" +
                            this.quarter.split(" ")[1] + "/" +
                            slides[i][j][0] + "?raw=true",
                    altText: slides[i][j][0],
                    caption: ""
                }
            }

            slides[i] = <Slides items={slides[i]}></Slides>
        }
        this.slides = <Tabs slides={slides} topics={topics}></Tabs>;
        this.toggle();

    }

    render() {
        return (
            <Row>
                <img src={s_head} alt="S L I D E S" className = "head"/>
                {this.slides}
            </Row>
        );
    }
}