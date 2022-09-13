import "./App.css";

import Form from "./Components/Form";

import AuthStack from "./Components/AuthStack";
import { useUserContext } from "./Context/UserContext";

function App() {
  const { loading, error, user } = useUserContext();

  return (
    <>
      {" "}
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Form /> : <AuthStack />} </>}
    </>

    // <Register />
  );
}

export default App;
