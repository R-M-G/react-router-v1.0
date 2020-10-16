import React, { Component } from 'react'
import {Link} from "react-router-dom";

import bookCover from './motp_book_cover.png';

console.log(bookCover);

export class Home extends Component {
    render() {
        return (
            <div>
                <img className='book-cover' src={bookCover} alt="Book Cover" />
                <Link to="/begin">
                    <button className='btn-style'>Next</button>
                    </Link>
            </div>
        )
    }
}

export default Home;

