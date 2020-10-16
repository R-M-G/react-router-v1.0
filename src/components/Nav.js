import React, { Component } from 'react';
import {Link} from "react-router-dom";

import timeMachine from './time_machine.png';


class Nav extends Component {
    
    render() {
        return (
        <nav>
        <img className='time-machine' src={timeMachine} alt="Logo" />
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

