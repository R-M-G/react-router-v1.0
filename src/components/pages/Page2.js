import React, { Component } from 'react'

import {Link} from "react-router-dom";

class Page2 extends Component {
    render() {
        return (
            <div className="book-body">
                <p>Lucky kid!</p>
                <p>How many guys have a famous scientist for a father?  
                    Although your Dad works for the government, 
                    his pet project has remained a dark secret to 
                    everyone but you - his trusted son and assistant.  It's an honest-to-goodness 
                    time machine that he has been working on for over a decade. 
                </p>
                <Link to="/begin">
                <button className='btn-style'>Next</button>
          </Link>
                
            </div>
        )
    }
}

export default Page2
