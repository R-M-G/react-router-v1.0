import React, { Component } from 'react'

import {Link} from "react-router-dom";

class Begin extends Component {
    render() {
        return (
            <div>
      <h1>Warning</h1>
      <h2>Go no further before reading this page!</h2>
      <div className="body-style">
      <h6>You are about to begin a fantastic journey in time. 
          Your fabulous time machine can take you back to the American Revolution, the Wild West, 
          or your own personal past. Each journey into yesteryear is fraught with unseen dangers and challenges. </h6>
        <h6>But don't worry. </h6>
          <h6>In this story you and you alone will make it happen. At every twist and turn of the plot you will be given two or more choices
            of what to do next.  Make your choice carefully and follow the instructions. But be on your guard. Once choice could be your downfall.
            Another could make you Master of the Past.
            </h6>
          <h6>What happens next is all up to you. . . .</h6>
          </div>
          <Link to="/begin">
          <button className='btn-style'>Next</button>
          </Link>
          </div>
        )
    }
}

export default Begin;
