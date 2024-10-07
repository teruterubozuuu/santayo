import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Modal from "react-modal";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sign: false,
      login: false,
    };
  }

  onOpenModal = () => {
    this.setState({ sign: true });
  };

  onOpenModalLogin = () => {
    this.setState({ login: true });
  };

  closeModal = () => {
    this.setState({ sign: false });
  };

  closeModalLogin = () => {
    this.setState({ login: false });
  };
}

function Header() {
  const { login, sign } = this.state;
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
              onClick={this.onOpenModalLogin}
            >
              Login
            </button>
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </header>

      <Modal open={login} onClose={this.closeModalLogin}>
        <div className="login">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="E-mail"
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="pass"
                placeholder="Password"
              ></input>
            </div>
            <button className="btnLogin" type="button" value="Login"></button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default Header;
