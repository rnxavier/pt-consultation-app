import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "./bizLogo.PNG";

const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(faEyeSlash);
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  const { registerUser } = useUserContext();

  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handlePasswordToggle = () => {
    if (passwordType === "password") {
      setIcon(faEye);
      setPasswordType("text");
    } else {
      setIcon(faEyeSlash);
      setPasswordType("password");
    }
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(faEye);
      setType("text");
    } else {
      setIcon(faEyeSlash);
      setType("password");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (email && password && name && confirmPassword === password) {
      registerUser(email, password, name);
    } else if (!email || !password || !name || !confirmPassword) {
      alert("Registration form incomplete");
    } else if (confirmPassword !== password) {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={onSubmit}>
        <div className="login-logo">
          <img src={logo} alt="logo" />
        </div>
        <h1>REGISTER</h1>

        <div className="txtb">
          <label>Full Name</label>
          <input type="text" name="email" ref={nameRef} />
        </div>

        <div className="txtb">
          <label>Email Address</label>
          <input type="text" name="email" ref={emailRef} />
        </div>

        <div className="txtb ">
          <label>Password</label>
          <div className="login-password">
            <input type={passwordType} name="password" ref={passwordRef} />
            <span className="password-toggle" onClick={handlePasswordToggle}>
              <FontAwesomeIcon icon={icon} />
            </span>
          </div>
        </div>

        <div className="txtb ">
          <label>Confirm Password</label>
          <div className="login-password">
            <input
              type={type}
              name="confirmPassword"
              ref={confirmPasswordRef}
            />
            <span className="password-toggle" onClick={handleToggle}>
              <FontAwesomeIcon icon={icon} />
            </span>
          </div>
        </div>

        <div className="login-footer">
          <button type="submit" className="login-page-btns login-btn">
            SIGN UP
          </button>

          <button className="login-page-btns forgot-btn" onClick={routeChange}>
            Back to Login Page
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
