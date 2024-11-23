import "./Login.css";
import {useState} from 'react'
import axios from 'axios'

export default function Login(props) {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:5000/", {email, password })
    .then(result => {console.log(result)
    })
    .catch(err => console.log(err))
  }



  return props.trigger ? (
    <>
      <div className="parent-container-login">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="closeLogin-cont"><p className="closeLoginForm" onClick={() => props.setTrigger(false)} >x</p></div>
            <h1>Login</h1>
            <div className="login-email-container">
              <input type="email" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="login-password-container">
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button className="loginSubmit" type="submit" onClick={() => props.setTrigger(false)}>
              Login
            </button>
            <p className="registerLink">Don't have an account? <span style={{textDecoration:"underline"}}>Register now</span></p>
          </form>
   
        {props.children}
      </div>
    </>
  ) : (
    ""
  );
}
