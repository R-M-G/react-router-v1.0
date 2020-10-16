import React, { Component } from 'react';

import {Link} from "react-router-dom";


class Nav extends Component {
    
    render() {
        return (
        <nav>
        <h1>Logo</h1>
            <ul className="nav-links">
                <Link className='link-style' to="/"><li>Home</li></Link>
                <Link className='link-style' to="/begin"><li>Begin</li></Link>
                <Link className='link-style' to="/about"><li>About</li> </Link>
                
            </ul>
      </nav>
        )
    }
}

export default Nav;

