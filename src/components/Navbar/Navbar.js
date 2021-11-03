import React, {useState, useEffect} from 'react';
import "./Navbar.css";
// import vinyl from "../../assets/images/record.png"
import fractal from "../../assets/images/flake.jpg"
import { Divide as Hamburger } from 'hamburger-react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <img className="img" src={fractal} alt="logo" />
                <h2 className="owner">FRACTAL</h2>
            </div>

            <div className="hamburger-container">
                <Hamburger className="hamburger" color="#593392" />
            </div>
        </nav>
    )
}

export default Navbar;

