import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [selectedClient, setSelectedClient] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    return (
      <div className="modal-container">
        <div className="modal-title">
          <div className="close-btn">
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              x
            </button>
          </div>
          <h2>Body Measurements: {selectedClient.name}</h2>
        </div>

        <div className="modal-body">
          <p>Height: {selectedClient.height}</p>
          <p>Weight: {selectedClient.weight}</p>
          <p>Body Fat: {selectedClient.bodyFat}</p>
          <p>Water: {selectedClient.water}</p>
          <p>Muscle: {selectedClient.muscle}</p>
          <p>Physique: {selectedClient.physique}</p>
          <p>Metabolic Rate: {selectedClient.metabolicRate}</p>
          <p>Metabolic Age: {selectedClient.metabolicAge}</p>
          <p>Bone Mass: {selectedClient.boneMass}</p>
          <p>Visceral Fat: {selectedClient.visceralFat}</p>
        </div>

        <div className="button-div">
          <button className="button">
            <div className="btn-text">Send to email</div>
          </button>

          <button className="button">
            <div className="btn-text">Update</div>
          </button>
        </div>
      </div>
    );
  };

  // When clicking on a client name, set id
  // In displayMeasurements function, display client measurements with a particular id

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

  const getClientById = async () => {
    const docRef = doc(db, "clients", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setSelectedClient(docSnap.data());
      setLoading(false);
      console.log(selectedClient);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <>
      <h1>Clients</h1>

      {clients.map(({ id, data }) => (
        <div key={id}>
          <a
            className="client-name"
            onClick={() => {
              setId(id);
              getClientById();
              setShowModal(true);
            }}
          >
            {data.name}
          </a>
        </div>
      ))}
      {showModal && <Modal />}
    </>
  );
};

export default Clients;
