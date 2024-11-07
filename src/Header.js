import React, { Component, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Header.css";
import Login from "./Login";

function Header() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <header>
        <div className="header-container">
          {" "}
          {/*Container for website name and login button*/}
          <h1 className="website-name">SANTAYO?</h1>
          <div className="nav-bar">
            <ul>
              {" "}
              {/*navigation bar*/}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/carinderias">Carinderias</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <button
              className="loginBtn"
              id="login"
              onClick={() => setButtonPopup(true)}
            >
              Login
            </button>
            <Login trigger={buttonPopup} setTrigger={setButtonPopup}></Login>
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
