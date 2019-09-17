import React from 'react';
import './LogDrawerToggleButton.css';

const LogDrawerToggleButton=props=>(
    <button className="toggle-button" onClick={props.logclicks}>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line"/>
    </button>
);
export default LogDrawerToggleButton;
