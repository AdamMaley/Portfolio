import React from 'react'
import "./Footer.css";

import * as logo from "../../images/adam_logo.png";

function Footer() {
    return (
        <div className="footer-container">
         <div className="footer">
           <img className="logo" src={logo} alt="Adams Logo" />
            <ul className="footer-list">
                <li><a href="https://github.com/AdamMaley">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/adam-maley-8850ba199/">LinkedIn</a></li>
                <li><a href="#">Resume</a></li>
            </ul>
          <div className="footer-copyright">
            <p>Site by<a href="#top"> Adam Maley</a></p>
          </div>
         </div>
        </div>
    )
}

export default Footer;