import React from 'react';
import {Link} from 'react-router-dom';
import LogDrawerToggleButton from '../LogSidedrawer/LogDrawerToggleButton';
import './LogToolbar.css';

const LogToolbar = props => {
    return(
        <header className="toolbar">
        <nav className="toolbar_navigation">
            <div><LogDrawerToggleButton logclicks={props.logdrawerClickHandler}/></div>
            <div className="toolbar_logo"><Link to="/">E-Kart</Link></div> {/* href reloads the page */}
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>         
                    <li><Link to="/" className="products">Products</Link></li>
                    <li><Link to="/cart">Cart</Link></li>        
                    <li><Link to="/" onClick={props.getback}>logout</Link></li>        
                </ul>
            </div>
        </nav>
        </header>
    )
}

export default LogToolbar;
