import React, {useState, useEffect} from 'react';
import "./Herosection.css";
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons";

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
                            Award winning and world renowned artist FRACTAL specialising in Drum and Bass and last but by no means least FLAKING
                        </p>
                        <div className="social-container">
                        <div className="social-border">
                            <a href="" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                        <div className="social-border">
                            <a href="" className="youtube"><FontAwesomeIcon icon={faSoundcloud} /></a>
                        </div>
                        <div className="social-border">
                            <a href="" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}