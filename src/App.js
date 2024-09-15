import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import About from "./About";
import Carinderias from "./Carinderias";
import "./Header.css";

function App() {
  return (
    <Router>
      <header>
        <div className="header-container">
          <h1 className="website-name">SANTAYO?</h1>
          <div className="nav-bar">
            <ul>
              <li><Link to="/" className="link">Home</Link></li>
              <li><Link to="/about" className="link">About</Link></li>
              <li><Link to="/carinderias" className="link">Carinderias</Link></li>
            </ul>
            <button className="loginBtn">Login</button>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/carinderias" element={<Carinderias/>}/>
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
