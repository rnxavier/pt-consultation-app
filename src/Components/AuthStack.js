import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Screens/Login";
import Register from "../Screens/Register";

const AuthStack = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AuthStack;
