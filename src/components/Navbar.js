import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <nav>
            <a class="hamburger" href="#"></a>
            <ul>
                <li><Link to={'/'}>About</Link></li>
            </ul>
	    </nav>
    )
}


export default Navbar