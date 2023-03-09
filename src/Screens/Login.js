import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "./bizLogo.PNG";

const Login = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(faEyeSlash);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(faEye);
      setType("text");
    } else {
      setIcon(faEyeSlash);
      setType("password");
    }
  };

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
          <img src={logo} alt="" />
        </div>
        <h1>LOGIN</h1>

        <div className="txtb">
          <label>Email Address</label>
          <input type="email" name="email" ref={emailRef} />
        </div>

        <div className="txtb ">
          <label>Password</label>
          <div className="login-password">
            <input type={type} name="password" ref={passwordRef} />
            <span className="password-toggle" onClick={handleToggle}>
              <FontAwesomeIcon icon={icon} />
            </span>
          </div>
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
