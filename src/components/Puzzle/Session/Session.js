import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import Problem from './Problem/Problem';
import Announcement from './Announcement/Announcement';
import $ from 'jquery';
import './Session.css';

export default class Session extends Component {
    constructor(props) {
        super(props);
        this.state = { collapse: false };
        this.processData = this.processData.bind(this);
        this.quarter = props.quarter;
        this.session = props.session;
        this.rows = [[]];
        this.end = props.end;
        this.link = "https://raw.githubusercontent.com/MetaNovitia/codingsessions/master/public/" +
                    this.quarter.split(" ")[0] + "%20" + 
                    this.quarter.split(" ")[1] + "/" +
                    this.session + ".csv" ;

    }

    componentDidMount() {
        $.ajax({
            url: this.link,
            context: document.body
        }).done(this.processData);
    }

    processData(allText) {
        var allTextLines = allText.split(/\r\n|\n/);
        var problems = [[]];
        this.announcements = []
        
        for (var i=1; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            var t = "Solution";
            if(problems[problems.length-1].length===3){
                problems.push([]);
            }

            if(!this.end){
                t = "Help";
                data[3] = '';
            }

            if(data[2]==="announcement"){
                this.announcements.push(
                    <Announcement
                        key = {data[0]}
                        name = {data[0]}
                        desc = {data[1]}
                    >
                    </Announcement>
                )
            }else{
                problems[problems.length-1].push(
                    <Col md='4' className="height">
                        <Problem    
                            name = {data[0]}
                            link = {data[1]}
                            diff = {data[2]}
                            slink =  {data[3]}
                            quarter = {this.quarter}
                            session = {this.session}
                            txt = {t}
                        >
                        </Problem>
                    </Col>
                );
            }
            
            
        }

        if(problems.length>0){
            if(problems[problems.length-1].length===0){
                problems.pop();
            }
            if(problems.length>0){
                while(problems[problems.length-1].length<3){
                    problems[problems.length-1].push(null);
                }
            }
        }

        for (var j=0; j<problems.length; j++){
            this.rows.push(
                <Row className="center r" key={j}>
                    {problems[j][0]}
                    {problems[j][1]}
                    {problems[j][2]}
                </Row>
            );
        }

        this.rows = <div>{this.rows}</div>;
        this.toggle();

    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <Row className="topmar">
                <div className="back" >
                    {this.announcements}
                    {this.rows}
                </div>
            </Row>
            
        );
    }
}