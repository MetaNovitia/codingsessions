import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import './Solution.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles/hljs';

var Python = (codeString) => {
  return <SyntaxHighlighter language='python' style={tomorrowNight}>{codeString}</SyntaxHighlighter>;  
}

var Cpp = (codeString) => {
    return <SyntaxHighlighter language='cpp' style={tomorrowNight}>{codeString}</SyntaxHighlighter>;  
}


export default class Solution extends Component {

    constructor(props) {
        super(props);
        this.show = props.sol;
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
        this.type = (props.link.split("."));
        this.type = this.type[this.type.length-1];
        this.link = props.link;
        this.txt = props.txt;

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "solutions/"+props.quarter+"/"+props.session+"/"+props.link, false);
        xhr.send();
        if(this.type==='py'){
            this.code = Python(xhr.responseText);
        }else{
            this.code = Cpp(xhr.responseText);
        }
        
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    

    render() {
        return (
            <div>
            <Button className = "btnsolu" onClick={this.toggle}>{this.txt}</Button>
            <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>{this.link}</ModalHeader>
                <ModalBody>{this.code}</ModalBody>
            </Modal>
            </div>
        );
  }
}