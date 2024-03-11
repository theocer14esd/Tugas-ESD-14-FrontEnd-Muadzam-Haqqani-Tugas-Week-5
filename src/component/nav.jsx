import React from "react"
import {link} from "react-router-dom"

export default function Nav(){
    return(
        <div>
            <a><Link to="/contact">Contact</Link></a>
            <a><Link to="/aboutus">About Us</Link></a>
        </div>
        
    )
}