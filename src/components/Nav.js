import React from 'react';

import {Link} from "react-router-dom";



function Nav() {
    const linkStyle = {
        color: 'white'
    }
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link style={linkStyle} to="/"><li>Home</li></Link>
        <Link style={linkStyle} to="/about"><li>About</li> </Link>
        <Link style={linkStyle} to="/begin"><li>Begin</li></Link>
      </ul>
      </nav>
  );
}

export default Nav;