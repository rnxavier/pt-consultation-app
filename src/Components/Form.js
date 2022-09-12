import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Clients from "../Screens/Clients";
import ClientInfo from "../Screens/ClientInfo";
import Goals from "../Screens/Goals";
import Health from "../Screens/Health";
import Agreement from "../Screens/Agreement";
import Measurements from "../Screens/Measurements";
import { db } from "../Firebase";
import Navbar from "./Nav";

const Form = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Client Measurements",
  });

  const setPageZero = () => {
    setPage(0);
  };
  const setPageOne = () => {
    setPage(1);
  };
  const setPageTwo = () => {
    setPage(2);
  };
  const setPageThree = () => {
    setPage(3);
  };
  const setPageFour = () => {
    setPage(4);
  };

  const setPageFive = () => {
    setPage(5);
  };

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    contactNo: "",
    email: "",
    emergencyContact: "",
    emergencyNo: "",
    goals: "",
    bodyParts: "",
    resultsTime: "",
    knowledge: "",
    motivation: "",
    barriers: "",
    help: "",
    heartCon: "",
    heartConComments: "",
    chestCon: "",
    chestConComments: "",
    diabetes: "",
    diabetesComments: "",
    epilepsy: "",
    epilepsyComments: "",
    muscleCon: "",
    muscleComments: "",
    neckCon: "",
    neckComments: "",
    bloodPressure: "",
    bloodPressureComments: "",
    dizziness: "",
    dizzinessComments: "",
    pregnancy: "",
    pregnancyComments: "",
    majorOps: "",
    majorOpsComments: "",
    medication: "",
    medicationComments: "",
    temp: "",
    tempComments: "",
    covid: "",
    covidDate: "",
    height: "",
    weight: "",
    bodyFat: "",
    water: "",
    muscle: "",
    physique: "",
    metabolicRate: "",
    metabolicAge: "",
    boneMass: "",
    visceralFat: "",
  });

  console.log(page);

  const formTitles = [
    "Personal Information",
    "Goals & Motivation",
    "Health & Injuries",
    "Agreement",
    "Initial Measurements",
    "Clients",
  ];

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <ClientInfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <Goals formData={formData} setFormData={setFormData} />;
      case 2:
        return <Health formData={formData} setFormData={setFormData} />;
      case 3:
        return <Agreement />;
      case 4:
        return <Measurements formData={formData} setFormData={setFormData} />;
      case 5:
        return <Clients />;
      default:
        return <ClientInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const buttonDisplay = () => {
    switch (page) {
      case 0:
        return (
          <div className="button-div">
            <button className="button" onClick={handlePrint}>
              <div className="btn-text">Save as PDF</div>
            </button>

            <button
              className="button"
              onClick={() => {
                setPage((currentPage) => currentPage + 1);
              }}
            >
              <div className="btn-text">Next</div>
              <div className="btn-subtext">{formTitles[page + 1]}</div>
            </button>
          </div>
        );

      case 1:
      case 2:
      case 3:
        return (
          <div className="button-div agreement-btns">
            <button
              className="button"
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              <div className="btn-text">Previous</div>
              <div className="btn-subtext">{formTitles[page - 1]}</div>
            </button>

            <button className="button" onClick={handlePrint}>
              <div className="btn-text">Save as PDF</div>
            </button>

            <button
              className="button"
              onClick={() => {
                setPage((currentPage) => currentPage + 1);
              }}
            >
              <div className="btn-text">Next</div>
              <div className="btn-subtext">{formTitles[page + 1]}</div>
            </button>
          </div>
        );

      case 4:
        return (
          <div className="button-div">
            <button
              className="button"
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              <div className="btn-text">Previous</div>
              <div className="btn-subtext">{formTitles[page - 1]}</div>
            </button>

            <button className="button" onClick={handlePrint}>
              <div className="btn-text">Save as PDF</div>
            </button>

            <button className="button" type="submit" onClick={handleSubmit}>
              <div className="submit-btn-text">Submit</div>
            </button>
          </div>
        );

      default:
        return (
          <div className="button-div">
            <button className="button" onClick={handlePrint}>
              <div className="btn-text">Save as PDF</div>
            </button>

            <button
              className="button"
              onClick={() => {
                setPage((currentPage) => currentPage + 1);
              }}
            >
              <div className="btn-text">Next</div>
              <div className="btn-subtext">{formTitles[page + 1]}</div>
            </button>
          </div>
        );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.length === 0 ||
      formData.gender.length === 0 ||
      formData.dob.length === 0 ||
      formData.contactNo.length === 0 ||
      formData.email.length === 0 ||
      formData.emergencyContact.length === 0 ||
      formData.emergencyNo.length === 0 ||
      formData.bodyParts.length === 0 ||
      formData.resultsTime.length === 0 ||
      formData.knowledge.length === 0 ||
      formData.motivation.length === 0 ||
      formData.barriers.length === 0 ||
      formData.help.length === 0 ||
      formData.chestCon.length === 0 ||
      formData.diabetes.length === 0 ||
      formData.epilepsy.length === 0 ||
      formData.muscleCon.length === 0 ||
      formData.neckCon.length === 0 ||
      formData.bloodPressure.length === 0 ||
      formData.dizziness.length === 0 ||
      formData.pregnancy.length === 0 ||
      formData.majorOps.length === 0 ||
      formData.medication.length === 0 ||
      formData.temp.length === 0 ||
      formData.covid.length === 0 ||
      formData.weight.length === 0 ||
      formData.bodyFat.length === 0 ||
      formData.water.length === 0 ||
      formData.muscle.length === 0 ||
      formData.physique.length === 0 ||
      formData.metabolicRate.length === 0 ||
      formData.metabolicAge.length === 0 ||
      formData.boneMass.length === 0 ||
      formData.visceralFat.length === 0
    ) {
      alert("Please ensure the form is complete before submitting");
    } else {
      db.collection("clients").add({
        name: formData.name,
        gender: formData.gender,
        dob: formData.dob,
        contactNo: formData.contactNo,
        email: formData.email,
        emergencyContact: formData.emergencyContact,
        emergencyNo: formData.emergencyNo,
        goals: formData.goals,
        bodyParts: formData.bodyParts,
        resultsTime: formData.resultsTime,
        knowledge: formData.knowledge,
        motivation: formData.motivation,
        barriers: formData.barriers,
        help: formData.help,
        heartCon: formData.heartCon,
        chestCon: formData.chestCon,
        diabetes: formData.diabetes,
        epilepsy: formData.epilepsy,
        muscleCon: formData.muscleCon,
        neckCon: formData.neckCon,
        bloodPressure: formData.bloodPressure,
        dizziness: formData.dizziness,
        pregnancy: formData.pregnancy,
        majorOps: formData.majorOps,
        medication: formData.medication,
        temp: formData.temp,
        covid: formData.covid,
        covidDate: formData.covidDate,
        height: formData.height,
        weight: formData.weight,
        bodyFat: formData.bodyFat,
        water: formData.water,
        muscle: formData.muscle,
        physique: formData.physique,
        metabolicRate: formData.metabolicRate,
        metabolicAge: formData.metabolicAge,
        boneMass: formData.boneMass,
        visceralFat: formData.visceralFat,
      });
      alert("Client registered successfully ✅");
      setFormData({
        name: "",
        gender: "",
        dob: "",
        contactNo: "",
        email: "",
        emergencyContact: "",
        emergencyNo: "",
        goals: "",
        bodyParts: "",
        resultsTime: "",
        knowledge: "",
        motivation: "",
        barriers: "",
        help: "",
        heartCon: "",
        chestCon: "",
        diabetes: "",
        epilepsy: "",
        muscleCon: "",
        neckCon: "",
        bloodPressure: "",
        dizziness: "",
        pregnancy: "",
        majorOps: "",
        medication: "",
        temp: "",
        covid: "",
        covidDate: "",
        height: "",
        weight: "",
        bodyFat: "",
        water: "",
        muscle: "",
        physique: "",
        metabolicRate: "",
        metabolicAge: "",
        boneMass: "",
        visceralFat: "",
      });
    }
  };

  return (
    <div className="form">
      <Navbar
        setPageZero={setPageZero}
        setPageOne={setPageOne}
        setPageTwo={setPageTwo}
        setPageThree={setPageThree}
        setPageFour={setPageFour}
        setPageFive={setPageFive}
      />
      <div className="form-container">
        <div className="body" ref={componentRef}>
          {pageDisplay()}
        </div>
        <div className="footer">{buttonDisplay()}</div>
      </div>
    </div>
  );
};

export default Form;
