import React from "react";
import './messagefeed.css';

export default function Messagefeed(){
    return(
        <div className="messagefeed">
            <div className="text">
                <span><a href="#" className="home">Home</a></span> / 
                <a href="#" className="message">Messages</a>
            </div>
        </div>

    )
}