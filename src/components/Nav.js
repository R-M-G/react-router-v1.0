import React from 'react';

import {Link} from "react-router-dom";



function Nav() {
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link to="/">
            <li>Home</li>
        </Link>

        <Link to="/about">
        <li>About</li>
        </Link>

        <Link to="/begin">
        <li>Begin</li>
        </Link>
      </ul>
      </nav>
  );
}

export default Nav;