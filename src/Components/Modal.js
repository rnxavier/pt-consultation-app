import { db } from "../Firebase";
import { useState, useEffect } from "react";

const Modal = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    db.collection("clients").onSnapshot((snapshot) => {
      setClients(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  console.log(clients);
  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <button>X</button>

          <div className="modal-title">
            <h1>Body Measurements</h1>
          </div>

          <div className="modal-body"></div>

          <div className="modal-footer">BUTTONS</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
