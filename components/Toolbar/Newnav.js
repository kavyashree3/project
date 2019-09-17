import React from 'react';
import './Newnav.css';

const Newnav = props => {
    return(
        <header className="newnav">
        <nav className="newnav_navigation">            
            <div className="newnav_logo"><a href="/">E-Kart</a></div>
            <div className="spacer"/>
            <div className="newnav_navigation-items">
                <ul>
                    <li className="welcome">Welcome To Online Shopping!!</li>                
                </ul>
            </div>
        </nav>
        </header>
    )
}

export default Newnav;