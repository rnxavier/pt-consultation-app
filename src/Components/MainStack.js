import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientDetails from "../Screens/ClientDetails";
import Form from "./Form";

const MainStack = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/clientDetails" element={<ClientDetails />} />
      </Routes>
    </Router>
  );
};

export default MainStack;
