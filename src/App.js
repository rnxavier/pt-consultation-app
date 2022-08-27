import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientInfo from "./Screens/ClientInfo";
import Goals from "./Screens/Goals";
import Health from "./Screens/Health";
import Agreement from "./Screens/Agreement";
import Measurements from "./Screens/Measurements";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ClientInfo />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/health" element={<Health />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/measurements" element={<Measurements />} />
        </Routes>
      </Router>

      {/* 
        
          
          
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
