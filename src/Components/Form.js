import { useState } from "react";
import styled from "styled-components";
import Clients from "../Screens/Clients";
import ClientInfo from "../Screens/ClientInfo";
import Goals from "../Screens/Goals";
import Health from "../Screens/Health";
import Agreement from "../Screens/Agreement";
import Measurements from "../Screens/Measurements";
import { db } from "../Firebase";

const Form = () => {
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
    "Client Information",
    "Client Goals",
    "Client Health",
    "Agreement",
    "Client Measurements",
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
            <button
              className="button"
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              <div className="btn-text">Previous</div>
              <div className="btn-subtext">{formTitles[page - 1]}</div>
            </button>

            <button className="button" type="submit" onClick={handleSubmit}>
              <div className="submit-btn-text">Submit</div>
            </button>
          </div>
        );
    }
  };

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <div>
          <Nav>
            <Logo href="">
              Biz<span>Training</span>
            </Logo>
            <Hamburger
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <span />
              <span />
              <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
              <MenuLink
                href=""
                onClick={() => {
                  setPage(5);
                }}
              >
                Clients
              </MenuLink>
              <MenuLink
                href=""
                onClick={() => {
                  setPage(0);
                }}
              >
                Information
              </MenuLink>
              <MenuLink
                href=""
                onClick={() => {
                  setPage(1);
                }}
              >
                Goals
              </MenuLink>
              <MenuLink
                href=""
                onClick={() => {
                  setPage(2);
                }}
              >
                Health
              </MenuLink>
              <MenuLink
                href=""
                onClick={() => {
                  setPage(3);
                }}
              >
                Agreement
              </MenuLink>
              <MenuLink
                href=""
                onClick={() => {
                  setPage(4);
                }}
              >
                Measurements
              </MenuLink>
            </Menu>
          </Nav>
        </div>
      </>
    );
  };

  const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  `;

  const Logo = styled.a`
    padding: 1rem 0;
    color: #66d3fa;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;

    span {
      font-weight: 300;
      font-size: 1.3rem;
    }
  `;

  const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
      overflow: hidden;
      flex-direction: column;
      width: 100%;
      max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
      transition: max-height 0.3s ease-in;
    }
  `;

  const MenuLink = styled.button`
    padding: 0.4rem 1rem 0rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #66d3fa;
    transition: all 0.3s ease-in;
    border: none;
    background-color: #fff;

    &:hover {
      color: #3c99dc;
    }
  `;

  const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
      height: 2px;
      width: 25px;
      background-color: #66d3fa;
      margin-bottom: 4px;
      border-radius: 5px;
    }

    @media (max-width: 768px) {
      display: flex;
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("clients")
      .add({
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
      })
      .then(() => {
        alert("Client registered successfully ✅");
      })
      .catch((error) => {
        alert(error.message);
      });

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
  };

  return (
    <div className="form">
      <Navbar />
      <div className="form-container">
        <div className="body">{pageDisplay()}</div>
        <div className="footer">{buttonDisplay()}</div>
      </div>
    </div>
  );
};

export default Form;
