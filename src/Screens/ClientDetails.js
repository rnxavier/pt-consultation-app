import React, { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../Context/ClientContext";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { serviceID, publicID, templateID } from "../secret";

// use context to get client id ✅
// load client data into form ✅
// use emailjs to email form

const ClientDetails = () => {
  const navigate = useNavigate();
  const form = useRef();
  const { id } = useContext(ClientContext);
  const [selectedClient, setSelectedClient] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleLoadForm = async () => {
    const docRef = doc(db, "clients", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setSelectedClient(docSnap.data());

      console.log(selectedClient);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    setShowForm(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="form">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          handleLoadForm();
        }}
      >
        load form
      </button>
      {showForm && (
        <form ref={form} onSubmit={sendEmail} className="client-details-form">
          <div>
            <label>Name</label>
            <input name="name" value={selectedClient.name} readOnly />
          </div>
          <div>
            <label>Gender</label>
            <input name="gender" value={selectedClient.gender} readOnly />
          </div>
          <div>
            <label>DOB</label>
            <input name="dob" value={selectedClient.dob} readOnly />
          </div>
          <div>
            <label>Contact Number</label>
            <input name="contactNo" value={selectedClient.contactNo} readOnly />
          </div>
          <div>
            <label>Emergency Contact</label>
            <input
              name="emergencyContact"
              value={selectedClient.emergencyContact}
              readOnly
            />
          </div>
          <div>
            <label>Emergency Contact Number</label>
            <input
              name="emergencyNo"
              value={selectedClient.emergencyNo}
              readOnly
            />
          </div>
          <div>
            <label>Goals</label>
            <input name="goals" value={selectedClient.goals} readOnly />
          </div>
          <div>
            <label>Body Parts Focus</label>
            <input name="bodyParts" value={selectedClient.bodyParts} readOnly />
          </div>
          <div>
            <label>Expect to see results after</label>
            <input
              name="resultsTIME"
              value={selectedClient.resultsTime}
              readOnly
            />
          </div>
          <div>
            <label>Current Knowledge Level</label>
            <input name="knowledge" value={selectedClient.knowledge} readOnly />
          </div>
          <div>
            <label>Motivations</label>
            <input
              name="motivations"
              value={selectedClient.motivation}
              readOnly
            />
          </div>
          <div>
            <label>Barriers</label>
            <input name="barriers" value={selectedClient.barriers} readOnly />
          </div>
          <div>
            <label>How we can help</label>
            <input name="help" value={selectedClient.help} readOnly />
          </div>
          <div>
            {selectedClient.heartCon === "Yes" ? (
              <div>
                <label>Heart Conditions</label>
                <input
                  name="heartCon"
                  value={selectedClient.heartCon}
                  readOnly
                />
                <input
                  name="heartConComments"
                  value={selectedClient.heartConComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>Heart Conditions</label>
                <input name="heartCon" value="No heart condition" />
              </div>
            )}
          </div>
          <div>
            {selectedClient.chestCon === "Yes" ? (
              <div>
                <label>Chest Conditions</label>
                <input
                  name="chestCon"
                  value={selectedClient.chestCon}
                  readOnly
                />
                <input
                  name="chestConComments"
                  value={selectedClient.chestConComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>Chest Conditions</label>
                <input name="chestCon" value="No chest condition" />
              </div>
            )}
          </div>
          <div>
            {selectedClient.diabetes === "Yes" ? (
              <div>
                <label>Diabetes</label>
                <input
                  name="diabetes"
                  value={selectedClient.diabetes}
                  readOnly
                />
                <input
                  name="diabetesComments"
                  value={selectedClient.diabetesComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>Diabetes</label>
                <input name="diabetes" value="No diabetes" />
              </div>
            )}
          </div>
          <div>
            {selectedClient.epilepsy === "Yes" ? (
              <div>
                <label>Epilepsy</label>
                <input
                  name="epilepsy"
                  value={selectedClient.epilepsy}
                  readOnly
                />
                <input
                  name="epilepsyComments"
                  value={selectedClient.epilepsyComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>Epilepsy</label>
                <input name="epilepsy" value="No epilepsy" />
              </div>
            )}
          </div>
          <div>
            {selectedClient.muscleCon === "Yes" ? (
              <div>
                <label>Muscle Conditions</label>
                <input
                  name="muscleCon"
                  value={selectedClient.muscleCon}
                  readOnly
                />
                <input
                  name="muscleConComments"
                  value={selectedClient.muscleConComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>Muscle Conditions</label>
                <input name="muscleCon" value="No muscle condition" />
              </div>
            )}
          </div>
          <div>
            {selectedClient.neckCon === "Yes" ? (
              <div>
                <label>Neck Conditions</label>
                <input name="neckCon" value={selectedClient.neckCon} readOnly />
                <input
                  name="neckConComments"
                  value={selectedClient.neckConComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>Neck Conditions</label>
                <input name="neckCon" value="No neck condition" />
              </div>
            )}
          </div>
          <div>
            {selectedClient.bloodPressure === "Yes" ? (
              <div>
                <label>High/Low Blood Pressure</label>
                <input
                  name="bloodPressure"
                  value={selectedClient.bloodPressure}
                  readOnly
                />
                <input
                  name="bloodPressureComments"
                  value={selectedClient.bloodPressureComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>High/Low Blood Pressure</label>
                <input
                  name="bloodPressure"
                  value="No high/low blood pressure"
                />
              </div>
            )}
          </div>
          <div>
            {selectedClient.dizziness === "Yes" ? (
              <div>
                <label>Dizziness</label>
                <input
                  name="dizziness"
                  value={selectedClient.dizziness}
                  readOnly
                />
                <input
                  name="dizzinessComments"
                  value={selectedClient.dizzinessComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>Dizziness</label>
                <input name="dizziness" value="No dizziness" />
              </div>
            )}
          </div>
          <div>
            {selectedClient.pregnancy === "Yes" ? (
              <div>
                <label>Pregnancy</label>
                <input
                  name="pregnancy"
                  value={selectedClient.pregnancy}
                  readOnly
                />
                <input
                  name="pregnancyComments"
                  value={selectedClient.pregnancyComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>Pregnancy</label>
                <input name="pregnancy" value="No pregnancy" />
              </div>
            )}
          </div>
          <div>
            {selectedClient.majorOps === "Yes" ? (
              <div>
                <label>Major Operations</label>
                <input
                  name="majorOps"
                  value={selectedClient.majorOps}
                  readOnly
                />
                <input
                  name="majorOpsComments"
                  value={selectedClient.majorOpsComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>Major Operations</label>
                <input name="majorOps" value="No major operations" />
              </div>
            )}
          </div>
          <div>
            {selectedClient.medication === "Yes" ? (
              <div>
                <label>Medication</label>
                <input
                  name="medication"
                  value={selectedClient.medication}
                  readOnly
                />
                <input
                  name="medicationComments"
                  value={selectedClient.medicationComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>Medication</label>
                <input name="medication" value="No medication" />
              </div>
            )}
          </div>
          <div>
            {selectedClient.temp === "Yes" ? (
              <div>
                <label>Temperature</label>
                <input name="temp" value={selectedClient.temp} readOnly />
                <input
                  name="temp"
                  value={selectedClient.tempComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>Temperature</label>
                <input name="temp" value="No temperature" />
              </div>
            )}
          </div>
          <div>
            {selectedClient.covid === "Yes" ? (
              <div>
                <label>COVID</label>
                <input name="covid" value={selectedClient.covid} readOnly />
                <input
                  name="covidComments"
                  value={selectedClient.covidComments}
                  readOnly
                />
              </div>
            ) : (
              <div>
                <label>COVID</label>
                <input name="covid" value="No COVID" />
              </div>
            )}
          </div>

          <button type="submit" value="Send">
            Send email
          </button>
        </form>
      )}
    </div>
  );
};

export default ClientDetails;
