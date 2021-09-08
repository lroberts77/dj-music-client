import React, {useState, useEffect} from 'react';
import "./Navbar.css";
import vinyl from "../../assets/images/record.png"
import fractal from "../../assets/images/fractal.png"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                {/* <img className="img" src={fractal} alt="logo" /> */}
                <h2 className="owner">FRACTAL</h2>
            </div>

            <label>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </nav>
    )
}

export default Navbar;

