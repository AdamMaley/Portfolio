import React from 'react';
import "./Header.css";

import * as logo from "../../images/adam_logo.png";

function Header() {
    return (
      <div className="header-container">
       <section id="top" className="header">
         <img className="logo" src={logo} alt="Adams Logo" />
         <h1 className="heading-primary--main">Adam Maley</h1>
         <h2 className="heading-primary--sub">Front End Engineer</h2>
         <a href="#project-heading" className="btn">See Projects</a>
       </section>
      </div>
    )
}

export default Header;
