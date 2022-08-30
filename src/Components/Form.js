import { useState } from "react";
import ClientInfo from "../Screens/ClientInfo";
import Goals from "../Screens/Goals";
import Health from "../Screens/Health";
import Agreement from "../Screens/Agreement";
import Measurements from "../Screens/Measurements";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    contactNo: "",
    email: "",
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
    "Client Information",
    "Client Goals",
    "Client Health",
    "Agreement",
    "Client Measurements",
  ];

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <ClientInfo />;
      case 1:
        return <Goals />;
      case 2:
        return <Health />;
      case 3:
        return <Agreement />;
      case 4:
        return <Measurements />;
    }
  };

  const buttonDisplay = () => {
    switch (page) {
      case 0:
        return (
          <div className="single-button-div">
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
            <button className="button">
              <div className="btn-text">Previous</div>
              <div className="btn-subtext">{formTitles[page - 1]}</div>
            </button>

            <button className="button">
              <div className="submit-btn-text">Submit</div>
            </button>
          </div>
        );
    }
  };

  return (
    <div className="form">
      <div>PROGRESS BAR</div>
      <div className="form-container">
        <div className="body">{pageDisplay()}</div>
        <div className="footer">{buttonDisplay()}</div>
      </div>
    </div>
  );
};

export default Form;
