import "./App.css";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Form from "./Components/Form";

import AuthStack from "./Components/AuthStack";
import ScreenStack from "./Components/ScreenStack";

function App() {
  return (
    // <Modal />
    // <Form />
    // <Login />
    <AuthStack />
    // <Register />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<ClientInfo />} />
    //     <Route path="/goals" element={<Goals />} />
    //     <Route path="/health" element={<Health />} />
    //     <Route path="/agreement" element={<Agreement />} />
    //     <Route path="/measurements" element={<Measurements />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
