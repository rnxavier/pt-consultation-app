import { db } from "../Firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [id, setId] = useState("");

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
    console.log({ clients });
  }, []);

  const displayMeasurements = () => {
    return clients?.map(({ id, data }) => (
      <div key={id}>
        <p>{data.name}</p>
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
        <p>Body Fat: {data.bodyFat}</p>
        <p>Water: {data.water}</p>
        <p>Muscle: {data.muscle}</p>
        <p>Metabolic Rate: {data.metabolicRate}</p>
        <p>Metabolic Age: {data.metabolicAge}</p>
        <p>Bone Mass: {data.boneMass}</p>
        <p>Visceral Fat: {data.visceralFat}</p>
      </div>
    ));
  };

  return (
    <>
      <h1>Clients</h1>
      {clients?.map(({ id, data }) => (
        <div key={id}>
          <a
            className="client-name"
            onClick={() => {
              setShowMeasurements(!showMeasurements);
            }}
          >
            {data.name}
          </a>
        </div>
      ))}
      {showMeasurements ? (
        <div>
          <h2>Body Measurements</h2>
          {displayMeasurements()}
        </div>
      ) : null}
    </>
  );
};

export default Clients;
