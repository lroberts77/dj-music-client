import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="quick-links">
                    <ul className="footer-ul">
                        <li className="footer-list">
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Songs</a>
                            <a href="">Email me</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <a className="copyright" href="https://lroberts77.github.io/">&copy; L.Roberts designs 2021</a>
            </div>
        </div>
    )
}

export default Footer