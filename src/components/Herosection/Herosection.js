import React, {useState, useEffect} from 'react';
import "./Herosection.css";
import Footer from '../Footer/Footer';

export default Herosection => {
    return (
        <div className="hero-container">
            <div className="section1">
                <div className="banner-bg">
                    <div className="about-container">
                        <h1 className="artist-name">
                            FRACTAL
                        </h1>
                        <p className="artist-about">
                            Award winning and world renowned artist FRACTAL specialising in Drum and Bass and FLAKING
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}