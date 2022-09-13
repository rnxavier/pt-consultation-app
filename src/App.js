import "./App.css";

import SyncLoader from "react-spinners/SyncLoader";
import { useState } from "react";
import Form from "./Components/Form";

import AuthStack from "./Components/AuthStack";
import { useUserContext } from "./Context/UserContext";

function App() {
  const { loading, error, user } = useUserContext();
  const [colour, setColour] = useState("#1b4079");

  return (
    <>
      {error && (
        <div className="error-div">
          <p className="error">{error}</p>
        </div>
      )}
      {loading ? (
        <div className="loading-div">
          <SyncLoader loading={loading} color={colour} size={50} />
        </div>
      ) : (
        <> {user ? <Form /> : <AuthStack />} </>
      )}
    </>

    // <Register />
  );
}

export default App;
