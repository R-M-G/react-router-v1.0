import React from 'react';

import './App.css';

import Nav from "./components/Nav";
import About from "./components/About";
import Begin from "./components/Begin";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
     <Route path="/about" component={About} />
     <Route path="/begin" component={Begin} />
    </div>
    </Router>
  );
}

export default App;
