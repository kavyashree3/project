import React from 'react';
import './LogBackdrop.css';
const LogBackdrop = props =>
{
    return(        
        <div className="backdrop" onClick={props.logbackdropHandler}/>
    )
}
export default LogBackdrop;
