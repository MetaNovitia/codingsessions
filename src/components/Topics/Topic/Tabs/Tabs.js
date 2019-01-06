import React, {Component} from 'react';
import { Button, Col, TabContent, TabPane} from 'reactstrap';

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.topics = props.topics;
    this.slides = props.slides;
    this.state = {
      activeTab: '1'
    };

    for(var i=0; i<this.topics.length; i++){
        this.topics[i]=
        <Button key = {(i+1).toString()}
                id = {(i+1).toString()}
                onClick = {this.toggle}
                className="topicbtn">
        {this.topics[i]}
        </Button>;
    }

    this.tabPanes = [];
    for(i=0; i<this.topics.length; i++){
        this.tabPanes.push(
            <TabPane key={(i+1).toString()} tabId={(i+1).toString()}>
                {this.slides[i]}
            </TabPane>
        );
    }
    

  }

  toggle(e) {
    var tab = e.target.id;
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Col className="slides">
        {this.topics}
        <TabContent activeTab={this.state.activeTab}>
            {this.tabPanes}
        </TabContent>
      </Col>
    );
  }
}