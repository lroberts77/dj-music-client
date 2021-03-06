import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="quick-links">
                    <ul className="footer-ul">
                        <li className="footer-list">
                            <a href=""><pre>Home   |  </pre></a>
                            <a href=""><pre>About  |  </pre></a>
                            <a href=""><pre>Songs  |  </pre></a>
                            <a href="mailto:djrconsultancyltd@gmail.com"><pre>Email me</pre></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright-container">
                <a className="copyright" href="https://lroberts77.github.io/">&copy; L.Roberts designs 2021</a>
            </div>
        </div>
    )
}

export default Footer