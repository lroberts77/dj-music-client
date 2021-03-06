import React, {useState, useEffect} from 'react';
import "./Herosection.css";
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram, faSoundcloud, faSpotify } from "@fortawesome/free-brands-svg-icons";
import ReactPlayer from 'react-player'

export default Herosection => {
    return (
        <div className="hero-container">
            <div className="section1">
                {/* <div className="banner-bg"> */}
                    <div className="about-container">
                        <h1 className="artist-name">
                            FRACTAL
                        </h1>
                        <p className="artist-about">
                            Award winning and world renowned artist FRACTAL specialising in Drum and Bass and last but by no means least FLAKING
                        </p>
                        <div className="social-container">
                        <div className="social-border">
                            <a href="https://instagram.com/1803djr" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                        <div className="social-border">
                            <a href="https://soundcloud.com/i_am_fractal" className="youtube"><FontAwesomeIcon icon={faSoundcloud} /></a>
                        </div>
                        <div className="social-border">
                            <a href="" className="youtube"><FontAwesomeIcon icon={faSpotify} /></a>
                        </div>
                        <div className="social-border">
                            <a href="" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                        </div>
                    </div>

                {/* </div> */}
            </div>
            <div className="section2">
                <div className="music-container">
                    <div className="music-title">
                        Listen and enjoy a flake
                    </div>
                    <div className="song1">
                        <ReactPlayer className="music-player" sc-button="background-color" height="200px" width="calc(100vw - 40px)" url='https://soundcloud.com/i_am_fractal/wonder-1?si=98147bc693d840b3aa8795eea2fcfec1' />
                    </div>
                    <div className="song2">
                        <ReactPlayer className="music-player" height="200px" width="calc(100vw - 40px)" url='https://soundcloud.com/i_am_fractal/witness-the-fitness-remix?si=673e3b8d8b1c4108a62443decac991a3' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}