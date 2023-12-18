import React from "react";
import './NotiFeed.css';

export default function NotiFeed(){
    return(
        <div className="notifeed">
            <div className="text">
                <span><a href="#" className="home">Home</a></span> / 
                <a href="#" className="notifi">Notifications</a>
            </div>
        </div>

    )
}