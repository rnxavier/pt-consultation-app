import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import Modal from "../Components/Modal";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const navigate = useNavigate("/clientDetails");
  //MODAL FUNCTIONS
  const handleClick = () => {
    setShowModal(false);
  };

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
          muscle: updatedMuscle,
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

  const onChangeHeight = (e) => {
    setUpdatedHeight(e.target.value);
  };
  const onChangeWeight = (e) => {
    setUpdatedWeight(e.target.value);
  };
  const onChangeBodyFat = (e) => {
    setUpdatedBodyFat(e.target.value);
  };
  const onChangeWater = (e) => {
    setUpdatedWater(e.target.value);
  };
  const onChangeMuscle = (e) => {
    setUpdatedMuscle(e.target.value);
  };
  const onChangePhysique = (e) => {
    setUpdatedPhysique(e.target.value);
  };
  const onChangeMetabolicRate = (e) => {
    setUpdatedMetabolicRate(e.target.value);
  };
  const onChangeMetabolicAge = (e) => {
    setUpdatedMetabolicAge(e.target.value);
  };
  const onChangeBoneMass = (e) => {
    setUpdatedBoneMass(e.target.value);
  };
  const onChangeVisceralFat = (e) => {
    setUpdatedVisceralFat(e.target.value);
  };

  const [clients, setClients] = useState([]);

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

      console.log(selectedClient);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  console.log(selectedClient.name);

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
          <button
            onClick={() => {
              navigate("/clientDetails");
            }}
          >
            Client Page
          </button>
        </div>
      ))}
      {showModal && (
        <Modal
          handleClick={handleClick}
          email={selectedClient.email}
          number={selectedClient.contactNo}
          name={selectedClient.name}
          height={selectedClient.height}
          weight={selectedClient.weight}
          bodyFat={selectedClient.bodyFat}
          water={selectedClient.water}
          muscle={selectedClient.muscle}
          physique={selectedClient.physique}
          metabolicRate={selectedClient.metabolicRate}
          metabolicAge={selectedClient.metabolicAge}
          boneMass={selectedClient.boneMass}
          visceralFat={selectedClient.visceralFat}
          updateHeight={updateHeight}
          updateWeight={updateWeight}
          updateBodyFat={updateBodyFat}
          updateWater={updateWater}
          updateMuscle={updateMuscle}
          updatePhysique={updatePhysique}
          updateMetabolicRate={updateMetabolicRate}
          updateMetabolicAge={updateMetabolicAge}
          updateBoneMass={updateBoneMass}
          updateVisceralFat={updateVisceralFat}
          updatedHeight={updatedHeight}
          updatedWeight={updatedWeight}
          updatedBodyFat={updatedBodyFat}
          updatedWater={updatedWater}
          updatedMuscle={updatedMuscle}
          updatedPhysique={updatedPhysique}
          updatedMetabolicRate={updatedMetabolicRate}
          updatedMetabolicAge={updatedMetabolicAge}
          updatedBoneMass={updatedBoneMass}
          updatedVisceralFat={updatedVisceralFat}
          onChangeHeight={onChangeHeight}
          onChangeWeight={onChangeWeight}
          onChangeBodyFat={onChangeBodyFat}
          onChangeWater={onChangeWater}
          onChangeMuscle={onChangeMuscle}
          onChangePhysique={onChangePhysique}
          onChangeMetabolicRate={onChangeMetabolicRate}
          onChangeMetabolicAge={onChangeMetabolicAge}
          onChangeBoneMass={onChangeBoneMass}
          onChangeVisceralFat={onChangeVisceralFat}
        />
      )}
    </div>
  );
};

export default Clients;
