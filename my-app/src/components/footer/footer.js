import React from 'react'
import "./footer.css";

import * as logo from "../../images/adam_logo.png";

function Footer() {
    return (
        <div className="footer-container">
         <div className="footer">
          <div className="footer_logo-box">
           <img className="logo" src={logo} alt="Adams Logo" />
          </div>
          <div className="footer-navigation">
            <ul className="footer-list">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Resume</a></li>
            </ul>
          <div className="footer-copyright">
            <p>Site by<a href="#"> Adam Maley</a></p>
          </div>
          </div>
         </div>
        </div>
    )
}

export default Footer;