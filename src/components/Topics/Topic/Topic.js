import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import $ from 'jquery';
import Slides from './Slides/Slides';
import Code from './Code/Code';
import Resources from './Resources/Resources';
import s_head from './slides.png';
import c_head from './code.png';
import r_head from './resources.png';
import Tabs from './Tabs/Tabs';
import './Topic.css';

export default class Topic extends Component {

    constructor(props){
        super(props);
        this.processData = this.processData.bind(this);
        this.processCode = this.processCode.bind(this);
        this.processResources = this.processResources.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
        this.quarter = props.quarter;
        this.session = props.session;
        this.slides = null;
        this.codes = null;
        this.resources = null;
        this.slink =    "https://raw.githubusercontent.com/MetaNovitia/codingsessions/master/public/topics/" +
                        this.quarter.split(" ")[0] + "%20" +
                        this.quarter.split(" ")[1] + "/" +
                        this.session + "_slides.csv";

        this.clink =    "https://raw.githubusercontent.com/MetaNovitia/codingsessions/master/public/topics/" +
                        this.quarter.split(" ")[0] + "%20" +
                        this.quarter.split(" ")[1] + "/" +
                        this.session + "_code.csv";

        this.rlink =    "https://raw.githubusercontent.com/MetaNovitia/codingsessions/master/public/topics/" +
                        this.quarter.split(" ")[0] + "%20" +
                        this.quarter.split(" ")[1] + "/" +
                        this.session + "_resources.csv";
        
    }

    toggle() {
        this.setState({ collapse: this.state.collapse });
    }

    componentDidMount() {
        $.ajax({
            url: this.slink,
            context: document.body
        }).done(this.processData);
        $.ajax({
            url: this.clink,
            context: document.body
        }).done(this.processCode);
        $.ajax({
            url: this.rlink,
            context: document.body
        }).done(this.processResources);
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
            codes.push( "https://raw.githubusercontent.com/MetaNovitia/codingsessions/master/public/topics/" +
                        this.quarter.split(" ")[0] + "%20" +
                        this.quarter.split(" ")[1] + "/" +
                        code[1]);
            codes[i-1] = <Code code={codes[i-1]}></Code>
        }
        this.codes = <Tabs items = {codes} topics={topics}></Tabs>
        this.toggle();

    }

    processResources(data){
        var lines = data.split(/\r\n|\n/);
        var resources = [];
        for (var i=1; i<lines.length; i++) {
            var resource = lines[i].split(",");
            if (resource[0][0]===resource[2][0]){
                resources.push([]);
            }
            resources[resources.length-1].push(resource);
        }
        this.resources = <Resources resources={resources}></Resources>;
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
                <Row><br/><br/><br/><br/><br/><br/></Row>
                <Row>
                    <img src={r_head} alt="R E S O U R C E S" className = "head"/>
                    {this.resources}
                </Row>
            </Container>
        );
    }
}