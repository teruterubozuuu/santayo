import React from 'react'
import "./Register.css"
import {useState} from 'react'
import axios from 'axios'
import { NavLink } from "react-router-dom";

export default function Register() {
  const [email,setEmail] = useState("")
  const [username,setUsername] =useState("")
  const [password,setPassword] = useState("")

  
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:5000/", {email, password,username })
    .then(result => {console.log(result)
    })
    .catch(err => console.log(err))
  }

    return(
        <>
            <div className="parent-container-register">
                <form onSubmit={handleSubmit} className="register-form-container">
                    <div className="closeRegister-cont">
                    <NavLink to="/" style={{textDecoration:"none"}}>
                        <p className="closeRegisterForm">x</p>
                    </NavLink>
                    </div>
                    <h1>Register</h1>
                    <div className="register-username-container">
                    <   input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className="register-email-container">
                        <input type="email" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className="register-password-container">
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button className="registerSubmit" type="submit">
                        Sign up
                    </button>
                    <p className="loginLink">Already have an account?
                        <span> <NavLink to="/login" className="login-nav-link">Login now</NavLink></span>
                    </p>
                </form>
            </div>
        </>
    )
}
