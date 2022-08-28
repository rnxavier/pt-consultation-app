import { useState } from "react";

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

  const formTitles = ["Client Information", "Client Measurements"];

  return (
    <div className="form">
      <div>PROGRESS BAR</div>
      <div className="form-container">
        <div className="header">
          <h1>{formTitles[page]}</h1>
        </div>
        <div className="body"></div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Form;
