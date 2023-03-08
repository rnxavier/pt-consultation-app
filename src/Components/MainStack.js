import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientDetails from "../Screens/ClientDetails";
import Form from "./Form";
import { ClientContext } from "../Context/ClientContext";
import { useState } from "react";

const MainStack = () => {
  const [id, setId] = useState("");

  return (
    <ClientContext.Provider value={{ id, setId }}>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/clientDetails" element={<ClientDetails />} />
        </Routes>
      </Router>
    </ClientContext.Provider>
  );
};

export default MainStack;
