import React from "react";
import './userfeedtop.css';

export default function DoctorFeed(){
    return(
        <div className="userfeedtop">
            <div className="text">
                <span><a href="#" className="home">Home</a></span> / 
                <span><a href="#" className="user">Users</a></span> / 
                <a href="#" className="patient">Doctor</a>
            </div>
        </div>

    )
}