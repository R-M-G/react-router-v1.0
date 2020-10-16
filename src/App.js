import React, { Component } from 'react';

import './App.css';

import Nav from "./components/Nav";
import About from "./components/About";
import Begin from "./components/Begin";
import Home from './components/Home';

import Page2 from "./components/pages/Page2";

import {BrowserRouter as Router, Route} from 'react-router-dom';

 class App extends Component {
  render() {
    return (
      <div>
        <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/begin" component={Begin} />
      <Route path="/page2" component={Page2} />
    </div>
    </Router>
      </div>
    )
  }
}

export default App;


