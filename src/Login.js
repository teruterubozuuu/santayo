import "./Login.css";

export default function Login(props) {
  return props.trigger ? (
    <>
      <div className="parent-container-login">

        <div className="form-container">
          <div className="closeLogin-cont"><button className="closeLoginForm" onClick={() => props.setTrigger(false)}>x</button></div>
          <h1>Login</h1>
          <div className="login-email-container">
            <input type="email" placeholder="E-Mail"></input>
          </div>
          <div className="login-password-container">
            <input type="password" placeholder="Password"></input>
          </div>
          <button className="loginSubmit" type="submit" onClick={() => props.setTrigger(false)}>
            Login
          </button>
          <p className="registerLink">Don't have an account? Register now</p>
        </div>
        {props.children}
      </div>
    </>
  ) : (
    ""
  );
}
