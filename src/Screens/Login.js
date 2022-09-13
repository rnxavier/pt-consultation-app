import { useRef } from "react";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  // const onSubmit = (e) => {
  //     e.preventDefault();
  //     const email = emailRef.current.value;
  //     const password = psdRef.current.value;
  //     if (email && password) signInUser(email, password);
  //   };

  return (
    <div className="login-page">
      <form onSubmit={onSubmit}>
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
          <button className="login-page-btns login-btn">LOGIN</button>
          <button className="login-page-btns register-btn">REGISTER</button>
          <button className="login-page-btns forgot-btn">
            Forgot Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
