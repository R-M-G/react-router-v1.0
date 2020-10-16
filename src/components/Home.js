import React, { Component } from 'react'
import {Link} from "react-router-dom";




export class Home extends Component {
    render() {
        return (
            <div>
                <h1>MAKE IT HAPPEN</h1>
                <h2>THE CHOICE IS YOURS</h2>
                <br></br> 
                <h2>MASTER OF THE PAST</h2>
                <h3>Created from A Book By Steven Otfinoski</h3>
                <Link to="/begin">
                    <button className='btn-style'>Next</button>
                    </Link>
            </div>
        )
    }
}

export default Home;

