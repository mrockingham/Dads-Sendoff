import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className= 'nav-container'>
                <div className= 'nav-list'>
                    <Link className="home-link" to='/'>Home</Link>
                    <Link className="gallery-link" to='/gallery'>Gallery</Link>
                    <Link className="memories-link" to='/memories'>Sharable</Link>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar
