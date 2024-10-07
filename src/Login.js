import "./Login.css";

export default function Login(props) {
  return props.trigger ? (
    <>
      <div className="parent-container-login">
        <h1>Login</h1>
        <div className="login-email-container">
          <input type="email" placeholder="E-Mail"></input>
        </div>
        <div className="login-password-container">
          <input type="password" placeholder="Password"></input>
        </div>
        <button type="submit" onClick={() => props.setTrigger(false)}>
          Login
        </button>
        {props.children}
      </div>
    </>
  ) : (
    ""
  );
}
