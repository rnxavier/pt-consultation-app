import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
// import { handleUpdate } from "../updateFunction";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [selectedClient, setSelectedClient] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [updatedHeight, setUpdatedHeight] = useState("");
  const [updatedWeight, setUpdatedWeight] = useState("");
  const [updatedBodyFat, setUpdatedBodyFat] = useState("");
  const [updatedMuscle, setUpdatedMuscle] = useState("");
  const [updatedWater, setUpdatedWater] = useState("");
  const [updatedMetabolicAge, setUpdatedMetabolicAge] = useState("");
  const [updatedMetabolicRate, setUpdatedMetabolicRate] = useState("");
  const [updatedVisceralFat, setUpdatedVisceralFat] = useState("");
  const [updatedPhysique, setUpdatedPhysique] = useState("");
  const [updatedBoneMass, setUpdatedBoneMass] = useState("");

  const Modal = () => {
    const updateHeight = () => {
      db.collection("clients")
        .doc(id)
        .set(
          {
            height: updatedHeight,
          },
          {
            merge: true,
          }
        )
        .then(() => {
          alert("Client updated successfully 💪🏾");
        })
        .then(() => {
          setUpdatedHeight("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const updateWeight = () => {
      db.collection("clients")
        .doc(id)
        .set(
          {
            weight: updatedWeight,
          },
          {
            merge: true,
          }
        )
        .then(() => {
          alert("Client updated successfully 💪🏾");
        })
        .then(() => {
          setUpdatedWeight("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const updateBodyFat = () => {
      db.collection("clients")
        .doc(id)
        .set(
          {
            bodyFat: updatedBodyFat,
          },
          {
            merge: true,
          }
        )
        .then(() => {
          alert("Client updated successfully 💪🏾");
        })
        .then(() => {
          setUpdatedBodyFat("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const updateMuscle = () => {
      db.collection("clients")
        .doc(id)
        .set(
          {
            muscle: updateMuscle,
          },
          {
            merge: true,
          }
        )
        .then(() => {
          alert("Client updated successfully 💪🏾");
        })
        .then(() => {
          setUpdatedMuscle("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const updateVisceralFat = () => {
      db.collection("clients")
        .doc(id)
        .set(
          {
            visceralFat: updatedVisceralFat,
          },
          {
            merge: true,
          }
        )
        .then(() => {
          alert("Client updated successfully 💪🏾");
        })
        .then(() => {
          setUpdatedVisceralFat("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const updatePhysique = () => {
      db.collection("clients")
        .doc(id)
        .set(
          {
            physique: updatedPhysique,
          },
          {
            merge: true,
          }
        )
        .then(() => {
          alert("Client updated successfully 💪🏾");
        })
        .then(() => {
          setUpdatedPhysique("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const updateWater = () => {
      db.collection("clients")
        .doc(id)
        .set(
          {
            water: updatedWater,
          },
          {
            merge: true,
          }
        )
        .then(() => {
          alert("Client updated successfully 💪🏾");
        })
        .then(() => {
          setUpdatedWater("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const updateMetabolicAge = () => {
      db.collection("clients")
        .doc(id)
        .set(
          {
            metabolicAge: updatedMetabolicAge,
          },
          {
            merge: true,
          }
        )
        .then(() => {
          alert("Client updated successfully 💪🏾");
        })
        .then(() => {
          setUpdatedMetabolicAge("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const updateMetabolicRate = () => {
      db.collection("clients")
        .doc(id)
        .set(
          {
            metabolicRate: updatedMetabolicRate,
          },
          {
            merge: true,
          }
        )
        .then(() => {
          alert("Client updated successfully 💪🏾");
        })
        .then(() => {
          setUpdatedMetabolicRate("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const updateBoneMass = () => {
      db.collection("clients")
        .doc(id)
        .set(
          {
            boneMass: updatedBoneMass,
          },
          {
            merge: true,
          }
        )
        .then(() => {
          alert("Client updated successfully 💪🏾");
        })
        .then(() => {
          setUpdatedBoneMass("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

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
            <div className="modal-grid centre-txt">
              <h3>Measurement</h3>
              <h3>Current Value</h3>
              <h3>New Value</h3>
              <h3>Update</h3>

              <p>Height</p>
              <p>{selectedClient.height}</p>
              <div className="txtb new-measurement-txtb">
                <input
                  placeholder="Height"
                  type="text"
                  name=""
                  value={updatedHeight}
                  onChange={(e) => {
                    setUpdatedHeight(e.target.value);
                  }}
                />
              </div>

              <button className="update-btn" onClick={updateHeight}>
                +
              </button>

              <p>Weight</p>
              <p>{selectedClient.weight}</p>
              <div className="txtb new-measurement-txtb">
                <input
                  placeholder="Weight"
                  type="text"
                  name=""
                  value={updatedWeight}
                  onChange={(e) => {
                    setUpdatedWeight(e.target.value);
                  }}
                />
              </div>
              <button className="update-btn" onClick={updateWeight}>
                +
              </button>

              <p>Body Fat</p>
              <p>{selectedClient.bodyFat}</p>
              <div className="txtb new-measurement-txtb">
                <input
                  placeholder="Body Fat"
                  type="text"
                  name=""
                  value={updatedBodyFat}
                  onChange={(e) => {
                    setUpdatedBodyFat(e.target.value);
                  }}
                />
              </div>
              <button className="update-btn" onClick={updateBodyFat}>
                +
              </button>

              <p>Water</p>
              <p>{selectedClient.water}</p>
              <div className="txtb new-measurement-txtb">
                <input
                  placeholder="Water"
                  type="text"
                  name=""
                  value={updatedWater}
                  onChange={(e) => {
                    setUpdatedWater(e.target.value);
                  }}
                />
              </div>
              <button className="update-btn" onClick={updateWater}>
                +
              </button>

              <p>Muscle</p>
              <p>{selectedClient.muscle}</p>
              <div className="txtb new-measurement-txtb">
                <input
                  placeholder="Muscle"
                  type="text"
                  name=""
                  value={updatedMuscle}
                  onChange={(e) => {
                    setUpdatedMuscle(e.target.value);
                  }}
                />
              </div>
              <button className="update-btn" onClick={updateMuscle}>
                +
              </button>

              <p>Physique</p>
              <p>{selectedClient.physique}</p>
              <div className="txtb new-measurement-txtb">
                <input
                  placeholder="Physique"
                  type="text"
                  name=""
                  value={updatedPhysique}
                  onChange={(e) => {
                    setUpdatedPhysique(e.target.value);
                  }}
                />
              </div>
              <button className="update-btn" onClick={updatePhysique}>
                +
              </button>

              <p>Metabolic Rate</p>
              <p>{selectedClient.metabolicRate}</p>
              <div className="txtb new-measurement-txtb">
                <input
                  placeholder="Metabolic Rate"
                  type="text"
                  name=""
                  value={updateMetabolicRate}
                  onChange={(e) => {
                    setUpdatedMetabolicRate(e.target.value);
                  }}
                />
              </div>
              <button className="update-btn" onClick={updateMetabolicRate}>
                +
              </button>

              <p>Metabolic Age</p>
              <p>{selectedClient.metabolicAge}</p>
              <div className="txtb new-measurement-txtb">
                <input
                  placeholder="Metabolic Age"
                  type="text"
                  name=""
                  value={updateMetabolicAge}
                  onChange={(e) => {
                    setUpdatedMetabolicAge(e.target.value);
                  }}
                />
              </div>
              <button className="update-btn" onClick={updateMetabolicAge}>
                +
              </button>

              <p>Bone Mass</p>
              <p>{selectedClient.boneMass}</p>
              <div className="txtb new-measurement-txtb">
                <input
                  placeholder="Bone Mass"
                  type="text"
                  name=""
                  value={updateBoneMass}
                  onChange={(e) => {
                    setUpdatedBoneMass(e.target.value);
                  }}
                />
              </div>
              <button className="update-btn" onClick={updateBoneMass}>
                +
              </button>

              <p>Visceral Fat</p>
              <p>{selectedClient.visceralFat}</p>
              <div className="txtb new-measurement-txtb">
                <input
                  placeholder="Visceral Fat"
                  type="text"
                  name=""
                  value={updateVisceralFat}
                  onChange={(e) => {
                    setUpdatedVisceralFat(e.target.value);
                  }}
                />
              </div>
              <button className="update-btn" onClick={updateVisceralFat}>
                +
              </button>
            </div>
          </div>
        </div>

        <div className="single-btn-div">
          <button className="button" onClick={handlePrint}>
            <div className="btn-text">Save as PDF</div>
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
      <h2>Clients</h2>

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
