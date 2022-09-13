const Register = () => {
  return (
    <div className="login-page">
      <form>
        <h1>REGISTRATION</h1>
        {/* <img src="/maskable.png" alt="" /> */}
        <div className="txtb">
          <label>Full Name</label>
          <input type="text" name="email" />
        </div>

        <div className="txtb">
          <label>Email Address</label>
          <input type="text" name="email" />
        </div>

        <div className="txtb">
          <label>Password</label>
          <input type="password" name="password" />
        </div>

        <div className="login-footer">
          <button className="login-page-btns login-btn">SIGN UP</button>

          <button className="login-page-btns forgot-btn">
            Back to Login Page
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
