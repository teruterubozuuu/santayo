import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Login from "./Login";
import "./Header.css";

function Header() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <>
      <nav className="navbar navbar-expand-lg overflow-auto" style={{ width: "100vw", padding: "0 30px" }}>
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand text-white" id="custom-website-name"
                style={{
                  fontSize: "55px",
                  fontFamily: "Alice, serif",
                  fontWeight: "600",
                  textShadow: "4px 4px 4px rgb(0, 0, 0,25%)"
                }}>SANTAYO?</NavLink>
          <button className="navbar-toggler" type="button" onClick={toggleOffcanvas} style={{border:"none"}}>
            <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
          </button>
          
          {/* Offcanvas */}
          <div className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`} 
               tabIndex="-1" 
               style={{ visibility: showOffcanvas ? 'visible' : 'hidden' }}
               aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close" onClick={toggleOffcanvas}></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink to="/" exact className="nav-link text-white" activeClassName="active" onClick={toggleOffcanvas}
                        style={{ fontFamily: "Alice, serif", marginRight: "20px", textShadow: "4px 4px 4px rgb(0, 0, 0,25%)" }}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link text-white" activeClassName="active" onClick={toggleOffcanvas}
                        style={{ fontFamily: "Alice, serif", marginRight: "20px", textShadow: "4px 4px 4px rgb(0, 0, 0,25%)" }}>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/carinderias" className="nav-link text-white" activeClassName="active" onClick={toggleOffcanvas}
                        style={{ fontFamily: "Alice, serif", marginRight: "20px", textShadow: "4px 4px 4px rgb(0, 0, 0,25%)" }}>Carinderias</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link text-white" activeClassName="active" onClick={toggleOffcanvas}
                        style={{ fontFamily: "Alice, serif", marginRight: "20px", textShadow: "4px 4px 4px rgb(0, 0, 0,25%)" }}>Contact Us</NavLink>
                </li>
                <button className="loginBtn" id="login" onClick={() => setButtonPopup(true)} style={{ padding: "10px 50px" }}>
                Register
              </button>
              <Login trigger={buttonPopup} setTrigger={setButtonPopup} />
              </ul>
             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
