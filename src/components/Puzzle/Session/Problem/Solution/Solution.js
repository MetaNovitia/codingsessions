import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import './Solution.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import $ from 'jquery';
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
            modal: false,
            collapse: false
        };
        this.toggle = this.toggle.bind(this);
        this.setCode = this.setCode.bind(this);
        this.type = (props.link.split("."));
        this.type = this.type[this.type.length-1];
        this.link = props.link;
        this.txt = props.txt;

        this.solLink =   "https://raw.githubusercontent.com/MetaNovitia/codingsessions/master/public/solutions/" +
                            props.quarter.split(' ')[0] + "%20" + 
                            props.quarter.split(' ')[1] + "/" + 
                            props.session +"/"+props.link;
        
    }

    componentDidMount() {
        $.ajax({
            url: this.solLink,
            context: document.body
        }).done(this.setCode);
    }

    setCode(data){
        if(this.type==='py'){
            this.code = Python(data);
        }else{
            this.code = Cpp(data);
        }
        this.togglevis();
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    togglevis() {
        this.setState({ collapse: !this.state.collapse });
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