import React from 'react';

import Nav from "./components/Nav";
import About from "./components/About";
import Begin from "./components/Begin";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Begin />
    </div>
  );
}

export default App;
