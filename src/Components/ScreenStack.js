import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";

const ScreenStack = () => {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default ScreenStack;
