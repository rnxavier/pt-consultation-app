const Login = () => {
  return (
    <div className="login-page">
      <form>
        <h1>LOGIN</h1>
        {/* <img src="/maskable.png" alt="" /> */}
        <div className="txtb">
          <label>Email Address</label>
          <input type="text" name="email" />
        </div>

        <div className="txtb">
          <label>Password</label>
          <input type="password" name="password" />
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
