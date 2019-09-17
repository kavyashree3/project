import React from 'react';
import {Link} from 'react-router-dom';
import DrawerToggleButton from '../Sidedrawer/DrawerToggleButton';
import './Toolbar.css';

const Toolbar = props => {
    return(
        <header className="toolbar">
        <nav className="toolbar_navigation">
            <div><DrawerToggleButton clicks={props.drawerClickHandler}/></div>
            <div className="toolbar_logo"><a href="/">E-Kart</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>                
                    <li><Link to="/" className="products">Products</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/signup" className="logSign" onClick={props.signLog}>Login/SignUp</Link></li>
                </ul>
            </div>
        </nav>
        </header>
    )
}

export default Toolbar;