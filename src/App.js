import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientInfo from "./Screens/ClientInfo";
import Goals from "./Screens/Goals";
import Health from "./Screens/Health";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ClientInfo />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/health" element={<Health />} />
        </Routes>
      </Router>

      {/* 
        
          
          
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
