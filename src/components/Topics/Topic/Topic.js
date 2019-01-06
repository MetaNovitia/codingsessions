import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import $ from 'jquery';
import Slides from './Slides/Slides';
import Code from './Code/Code';
import s_head from './slides.png';
import c_head from './code.png';
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
        this.codes = null;
        this.link = "https://raw.githubusercontent.com/MetaNovitia/codingsessions/master/public/topics/" +
                    this.quarter.split(" ")[0] + "%20" +
                    this.quarter.split(" ")[1] + "/" +
                    this.session + ".csv";

        this.clink =    "https://raw.githubusercontent.com/MetaNovitia/codingsessions/master/public/topics/" +
                        this.quarter.split(" ")[0] + "%20" +
                        this.quarter.split(" ")[1] + "/" +
                        this.session + "_code.csv";
        
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    componentDidMount() {
        $.ajax({
            url: this.link,
            context: document.body
        }).done(this.processData);
        $.ajax({
            url: this.clink,
            context: document.body
        }).done(this.processCode);
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
        this.slides = <Tabs items={slides} topics={topics}></Tabs>;
        this.toggle();

    }

    processCode(data){
        var lines = data.split(/\r\n|\n/);
        var codes = [];
        var topics = [];
        for (var i=1; i<lines.length; i++) {
            var code = lines[i].split(",");
            topics.push(code[0]);
            codes.push( "https://github.com/MetaNovitia/codingsessions/blob/master/public/topics/" +
                        this.quarter.split(" ")[0] + "%20" +
                        this.quarter.split(" ")[1] + "/" +
                        code[1]);
            codes[i] = <Code code={codes[i]}></Code>
        }

        this.codes = <Tabs items = {codes} topics={topics}></Tabs>
        this.toggle();

    }

    render() {
        return (
            <Container>
                <Row>
                    <img src={s_head} alt="S L I D E S" className = "head"/>
                    {this.slides}
                </Row>
                <Row><br/><br/><br/><br/><br/><br/></Row>
                <Row>
                    {this.codes}
                    <img src={c_head} alt="C O D E" className = "head"/>
                </Row>
            </Container>
        );
    }
}