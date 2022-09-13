import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";

const Login = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/register");
  };

  const { signInUser, forgotPassword } = useUserContext();

  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="login-page">
      <form onSubmit={onSubmit}>
        <div className="login-logo">
          Bizzie💪🏾<span>Trainer</span>
        </div>
        <h1>LOGIN</h1>

        <div className="txtb">
          <label>Email Address</label>
          <input type="text" name="email" ref={emailRef} />
        </div>

        <div className="txtb">
          <label>Password</label>
          <input type="password" name="password" ref={passwordRef} />
        </div>

        <div className="login-footer">
          <button type="submit" className="login-page-btns login-btn">
            LOGIN
          </button>
          <button
            className="login-page-btns register-btn"
            onClick={routeChange}
          >
            REGISTER
          </button>
          <button
            onClick={forgotPasswordHandler}
            className="login-page-btns forgot-btn"
          >
            Forgot Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
