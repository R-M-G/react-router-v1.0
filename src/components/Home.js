import React, { Component } from 'react'
import {Link} from "react-router-dom";

import timeMachine from './time_machine.png';


export class Home extends Component {
    render() {
        return (
            <div>
                <h1>MAKE IT HAPPEN</h1>
                <h2>THE CHOICE IS YOURS</h2>
                <img className='time-machine' src={timeMachine} alt="Logo" /> 
                <h2>MASTER OF THE PAST</h2>
                <h3>Created from A Book By Steven Otfinoski</h3>
                <Link to="/begin">
                    <button className='btn-style'>Begin</button>
                    </Link>
            </div>
        )
    }
}

export default Home;

