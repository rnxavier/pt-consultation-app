import "./App.css";

import Form from "./Components/Form";

import AuthStack from "./Components/AuthStack";
import { useUserContext } from "./Context/UserContext";

function App() {
  const { loading, error, user } = useUserContext();

  return (
    <>
      {" "}
      {error && (
        <div className="error-div">
          <p className="error">{error}</p>
        </div>
      )}
      {loading ? <h2>Loading...</h2> : <> {user ? <Form /> : <AuthStack />} </>}
    </>

    // <Register />
  );
}

export default App;
