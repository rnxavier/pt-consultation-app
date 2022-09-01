import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Clients = ({ formData, setFormData }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [selectedClient, setSelectedClient] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: "Client Measurements",
    });
    return (
      <>
        <div className="close-btn">
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal-container" ref={componentRef}>
          <div className="modal-title">
            <h2>Body Measurements: {selectedClient.name}</h2>
          </div>

          <div className="modal-body">
            <div className="modal-grid">
              <p>MEASUREMENT</p>
              <p>CURRENT VALUE</p>
              <p>NEW VALUE</p>

              <p>Height</p>
              <p>Height: {selectedClient.height}</p>
              <div className="txtb new-measurement-txtb">
                <input placeholder="Height" type="text" name="" />
              </div>

              <p>Weight</p>
              <p>Weight: {selectedClient.weight}</p>
              <div className="txtb new-measurement-txtb">
                <input placeholder="Weight" type="text" name="" />
              </div>

              <p>Body Fat</p>
              <p>Body Fat: {selectedClient.bodyFat}</p>
              <div className="txtb new-measurement-txtb">
                <input placeholder="Body Fat" type="text" name="" />
              </div>

              <p>Water</p>
              <p>Water: {selectedClient.water}</p>
              <div className="txtb new-measurement-txtb">
                <input placeholder="Water" type="text" name="" />
              </div>

              <p>Muscle</p>
              <p>Muscle: {selectedClient.muscle}</p>
              <div className="txtb new-measurement-txtb">
                <input placeholder="Muscle" type="text" name="" />
              </div>

              <p>Physique</p>
              <p>Physique: {selectedClient.physique}</p>
              <div className="txtb new-measurement-txtb">
                <input placeholder="Physique" type="text" name="" />
              </div>

              <p>Metabolic Rate</p>
              <p>Metabolic Rate: {selectedClient.metabolicRate}</p>
              <div className="txtb new-measurement-txtb">
                <input placeholder="Metabolic Rate" type="text" name="" />
              </div>

              <p>Metabolic Age</p>
              <p>Metabolic Age: {selectedClient.metabolicAge}</p>
              <div className="txtb new-measurement-txtb">
                <input placeholder="Metabolic Age" type="text" name="" />
              </div>

              <p>Bone Mass</p>
              <p>Bone Mass: {selectedClient.boneMass}</p>
              <div className="txtb new-measurement-txtb">
                <input placeholder="Bone Mass" type="text" name="" />
              </div>

              <p>Visceral Fat</p>
              <p>Visceral Fat: {selectedClient.visceralFat}</p>
              <div className="txtb new-measurement-txtb">
                <input placeholder="Visceral Fat" type="text" name="" />
              </div>
            </div>
          </div>
        </div>
        <div className="button-div">
          <button className="button" onClick={handlePrint}>
            <div className="btn-text">Save as PDF</div>
          </button>

          <button className="button">
            <div className="btn-text">Update</div>
          </button>
        </div>
      </>
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
    <div className="clients-div">
      <h1>Clients</h1>

      {clients.map(({ id, data }) => (
        <div key={id}>
          <button
            className="clients-div-btn"
            onClick={() => {
              setId(id);
              getClientById();
              setShowModal(true);
            }}
          >
            {data.name}
          </button>
        </div>
      ))}
      {showModal && <Modal />}
    </div>
  );
};

export default Clients;
