import React, { useState } from "react";
import "./navbarStyle.css";
import { TfiYoutube,TfiLinkedin,TfiFacebook } from "react-icons/tfi";
import {GiHamburgerMenu} from "react-icons/gi"


function Navbar(){
 const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <div className="main-nav">
            <div className="logo">
                <h2><span>T</span>he
                <span>O</span>notion</h2>
            </div>
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div className="social-media">
            <ul className="social-media-desktop">
            <li><a href="#"></a><TfiFacebook className="facebook"/></li>
            <li><a href="#"></a><TfiLinkedin className="instagram"/></li>
            <li><a href="#"></a><TfiYoutube className="youtube"/></li>
            </ul>
            <div className="hamburger-menu">
                <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu/></a>
            </div>
        </div>

        </div>
    ); 
}

export default Navbar;
