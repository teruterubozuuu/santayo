import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Header(){
    return(
        <>
        <nav class="navbar navbar-expand-lg overflow-auto" style={{backgroundColor: "#080808"}}>
            <div class="container-fluid "  style={{color: "white"}}>
                <Link to="/" class="navbar-brand text-white" style={{fontSize:"40px", fontFamily:"Alice, serif" , fontWeight:"600"}}>SANTAYO?</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#eb7311" }} />
                </button>
                <div class="collapse navbar-collapse  justify-content-end " id="navbarSupportedContent" >
                    <ul class="navbar-nav mb-2 mb-lg-0 d-flex">
                        <li class="nav-item" >
                            <Link to="/" class="nav-link active text-white" aria-current="page" style={{fontFamily:"Alice, serif", marginRight:"20px"}}>Home</Link>
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
                        <li class="nav-item">
                            <button class="btn"   style={{'--bs-btn-padding-x': '2rem',color:'white', backgroundColor: "#eb7311", borderRadius:'2px', fontFamily:'Alice, serif' }}>Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );

}

export default Header;