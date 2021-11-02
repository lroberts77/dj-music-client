import React, {useState, useEffect} from 'react';
import "./Navbar.css";
// import vinyl from "../../assets/images/record.png"
// import fractal from "../../assets/images/fractal.png"
import { Divide as Hamburger } from 'hamburger-react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                {/* <img className="img" alt="logo" /> */}
                <h2 className="owner">FRACTAL</h2>
            </div>

            <div className="ham">
                <Hamburger className="hamburger" color="#4FD1C5" />
            </div>
        </nav>
    )
}

export default Navbar;

