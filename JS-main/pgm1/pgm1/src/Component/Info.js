
import React from "react";
import "./Info.css"


function Info(props)
{
    return(
        
        <div className="personal">
            <div className="name">{props.name}</div>
            <div className="email">{props.email}</div>
            <div className="phno">{props.phno}</div>
            <hr></hr>
        </div>
        
    );
}

export default Info;