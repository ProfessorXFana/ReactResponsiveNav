import React, { useState } from "react";
import "./navbarStyle.css";
import mainlogo from "../img/main-logo.png"
import {GiHamburgerMenu} from "react-icons/gi"


function Navbar(){
 const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <div className="main-nav">
            <div className="logo">
                <img src={mainlogo} alt="" />
            </div>
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
            <div className="hamburger-menu">
                <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu/></a>
            </div>

        </div>
    ); 
}

export default Navbar;
