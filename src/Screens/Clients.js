import { db } from "../Firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  // const fetchClients = async () => {
  //   const querySnapshot = await getDocs(collection(db, "clients"));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     setClients(doc.data());
  //     setLoading(false);
  //     // console.log(doc.id, " => ", doc.data());
  //   });
  // };

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

  return (
    <>
      <h1>Clients</h1>
      {clients?.map(({ id, data }) => (
        <div key={id}>
          <a>{data.name}</a>
        </div>
      ))}
    </>
  );
};

export default Clients;
