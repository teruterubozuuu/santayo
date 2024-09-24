import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header(){
    return(
        <>
            <header>
                <div className="header-container"> {/*Container for website name and login button*/}
                    <h1 className="website-name">SANTAYO?</h1>
                    <div className="nav-bar">
                        <ul> {/*navigation bar*/}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/carinderias">Carinderias</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <button className="loginBtn">Login</button>
                        <i class="fa fa-bars"></i>
                    </div> 
                </div> 
            </header>
        </>
    );
}

export default Header;