import React, { Component } from 'react';
import {Container} from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import $ from 'jquery';
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles/hljs';
import './Code.css';


var Python = (codeString) => {
    return <SyntaxHighlighter language='python' style={tomorrowNight}>{codeString}</SyntaxHighlighter>;  
  }

export default class Topic extends Component {

    constructor(props){
        super(props);
        this.setCode = this.setCode.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
        this.solLink = props.code;
        this.code = null;
        
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    componentDidMount() {
        $.ajax({
            url: this.solLink,
            context: document.body
        }).done(this.setCode);
    }

    setCode(data){
        this.code = Python(data);
        this.toggle();
    }

    render() {
        return (
            <Container className="codes">
                {this.code}
            </Container>
        );
    }
}