import React, { Component, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Navigate } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Login from "./Login";


function Header(){
  const [buttonPopup, setButtonPopup] = useState(false);

    return(
      
        <>
        <nav class="navbar navbar-expand-lg overflow-auto" style={{backgroundColor: "#080808", width:"100vw"} }>
            <div class="container-fluid "  style={{color: "white"}}>
                <Link to="/" class="navbar-brand text-white" style={{fontSize:"55px", fontFamily:"Alice, serif" , fontWeight:"600", color:"#eb7311"}}>SANTAYO?</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#eb7311" }} />
                </button>
                <div class="collapse navbar-collapse  justify-content-end " id="navbarSupportedContent" >
                  <div>
                    <ul class="navbar-nav mb-2 mb-lg-0 d-flex nav-underline">
                          <li class="nav-item" >
                              <Link to="/" class="nav-link text-white" aria-current="page" style={{fontFamily:"Alice, serif", marginRight:"20px"}}>Home</Link>
                          </li>
                          <li class="nav-item">
                              <Link to="/about" class="nav-link text-white" style={{fontFamily:"Alice, serif" , marginRight:"20px"}}>About</Link>
                          </li>
                          <li class="nav-item">
                              <Link to="/carinderias" class="nav-link text-white " style={{fontFamily:"Alice, serif" , marginRight:"20px"}}>Carinderias</Link>
                          </li>
                          <li class="nav-item">
                              <Link to="/contact" class="nav-link text-white " style={{fontFamily:"Alice, serif", marginRight:"20px"}}>Contact Us</Link>
                          </li>
                          
                      </ul>
                  </div>
                   <div>
                      <button
                    className="loginBtn"
                    id="login"
                    onClick={() => setButtonPopup(true)}
                    style={{padding:"10px 50px"}}
                  >
                    Login
                  </button>

                   </div>
                   <Login trigger={buttonPopup} setTrigger={setButtonPopup}></Login>
                  <i class="fa fa-bars"></i>

                </div>
            </div>
        </nav>
        </>
    );

}

export default Header;