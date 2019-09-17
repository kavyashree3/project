import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton=props=>(
    <button className="toggle-button" onClick={props.clicks}>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line"/>
    </button>
);
export default DrawerToggleButton;
