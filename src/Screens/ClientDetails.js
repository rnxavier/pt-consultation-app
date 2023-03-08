import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../Context/ClientContext";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";

// use context to get client id
// load client data into form
// use emailjs to email form

const ClientDetails = () => {
  const navigate = useNavigate();
  const { id } = useContext(ClientContext);
  const [selectedClient, setSelectedClient] = useState([]);

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
          getClientById();
        }}
      >
        load form
      </button>
      <form>
        <p>Name: {selectedClient.name}</p>
        <p>Gender: {selectedClient.gender}</p>
        <p>D.O.B.: {selectedClient.dob}</p>
        <p>Contact Number: {selectedClient.contactNo}</p>
        <p>Email Address: {selectedClient.email}</p>
        <p>Emergency Contact: {selectedClient.emergencyContact}</p>
        <p>Emergency Contact Number: {selectedClient.emergencyNo}</p>
        <p>Main Goals: {selectedClient.goals}</p>
        <p>Body Parts Focus: {selectedClient.bodyParts}</p>
        <p>Expect to see results after: {selectedClient.resultsTime}</p>
        <p>Current Knowledge Level: {selectedClient.knowledge}</p>
        <p>Motivations: {selectedClient.motivation}</p>
        <p>Barriers: {selectedClient.barriers}</p>
        <p>How we can help: {selectedClient.help}</p>
        {selectedClient.heartCon === "Yes" ? (
          <div>
            <p>Heart Conditions? {selectedClient.heartCon}</p>
            <p>{selectedClient.heartConComments}</p>
          </div>
        ) : (
          <p>No heart conditions</p>
        )}
        {selectedClient.chestCon === "Yes" ? (
          <div>
            <p>Chest pain while exercising? {selectedClient.chestCon}</p>
            <p>{selectedClient.chestConComments}</p>
          </div>
        ) : (
          <p>No chest conditions</p>
        )}
        {selectedClient.diabetes === "Yes" ? (
          <div>
            <p>Diabetes? {selectedClient.diabetes}</p>
            <p>{selectedClient.diabetesComments}</p>
          </div>
        ) : (
          <p>No diabetes</p>
        )}
        {selectedClient.epilepsy === "Yes" ? (
          <div>
            <p>Epilepsy? {selectedClient.epilepsy}</p>
            <p>{selectedClient.epilepsyComments}</p>
          </div>
        ) : (
          <p>No epilepsy</p>
        )}
        {selectedClient.muscleCon === "Yes" ? (
          <div>
            <p>Muscle/joint conditions/injuries{selectedClient.muscleCon}</p>
            <p>{selectedClient.muscleConComments}</p>
          </div>
        ) : (
          <p>No muscle conditions</p>
        )}
        {selectedClient.neckCon === "Yes" ? (
          <div>
            <p>Neck/back conditions/injuries{selectedClient.neckCon}</p>
            <p>{selectedClient.neckConComments}</p>
          </div>
        ) : (
          <p>No neck conditions</p>
        )}
        {selectedClient.bloodPressure === "Yes" ? (
          <div>
            <p>High/low blood pressure? {selectedClient.bloodPressure}</p>
            <p>{selectedClient.bloodPressureComments}</p>
          </div>
        ) : (
          <p>No high/low blood pressure</p>
        )}
        {selectedClient.dizziness === "Yes" ? (
          <div>
            <p>Dizziness/loss of consciousness?{selectedClient.dizziness}</p>
            <p>{selectedClient.dizzinessComments}</p>
          </div>
        ) : (
          <p>No dizziness</p>
        )}
        {selectedClient.pregnancy === "Yes" ? (
          <div>
            <p>Pregnant/recently given birth?{selectedClient.pregnancy}</p>
            <p>{selectedClient.pregnancyComments}</p>
          </div>
        ) : (
          <p>Not pregnant or recently given birth</p>
        )}
        {selectedClient.majorOps === "Yes" ? (
          <div>
            <p>Major operations?{selectedClient.majorOps}</p>
            <p>{selectedClient.majorOpsComments}</p>
          </div>
        ) : (
          <p>No major operations</p>
        )}
        {selectedClient.medication === "Yes" ? (
          <div>
            <p>Medication{selectedClient.medicationCon}</p>
            <p>{selectedClient.medicationComments}</p>
          </div>
        ) : (
          <p>No medication</p>
        )}
        {selectedClient.temp === "Yes" ? (
          <div>
            <p>Temperature &gt 38°C?{selectedClient.temp}</p>
            <p>{selectedClient.tempComments}</p>
          </div>
        ) : (
          <p>No temperature</p>
        )}
        {selectedClient.covid === "Yes" ? (
          <div>
            <p>Contracted COVID?{selectedClient.covid}</p>
            <p>{selectedClient.covidComments}</p>
          </div>
        ) : (
          <p>No COVID</p>
        )}
      </form>
    </div>
  );
};

export default ClientDetails;
