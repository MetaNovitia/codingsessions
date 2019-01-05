import React, { Component } from 'react';
import Home from './components/Home/Home';
import Puzzle from './components/Puzzle/Puzzle'
import Topics from './components/Topics/Topics'
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Problems' component={Puzzle} />
          <Route path='/Topics' component={Topics} />
        </Switch>
    );
  }
}

export default App;
