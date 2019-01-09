import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

document.body.style.backgroundColor = "rgb(48, 47, 47)";

ReactDOM.render(
<HashRouter>
  <App />
</HashRouter>, document.getElementById('root'));
