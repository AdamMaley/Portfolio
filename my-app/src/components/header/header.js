import React from 'react';
import "./header.css";

import * as logo from "../../images/adam_logo.png";

function Header() {
    return (
      <div className="header-container">
       <section className="header">
         <img className="logo" src={logo} alt="Adams Logo" />
         <h1 className="heading-primary--main">Adam Maley</h1>
         <h2 className="heading-primary--sub">Front End Engineer</h2>
         <a href="#projects" class="btn">See Projects</a>
       </section>
      </div>
    )
}

export default Header;
