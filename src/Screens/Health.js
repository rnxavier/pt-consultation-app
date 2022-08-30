// import background from "../Images/contact-background.jpeg";

const Health = ({ formData, setFormData }) => {
  const handleRadio = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleText = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  };
  return (
    <>
      {/* <Navbar /> */}
      <form>
        <h1>Client Health &amp; Injuries</h1>

        <h2>
          Do you have any of the following conditions or injuries? If yes,
          please provide further information.
        </h2>

        <div className="txtb">
          <label>Heart condition</label>
          <input
            type="radio"
            value="Yes"
            name="heartCon"
            checked={formData.heartCon}
            onChange={handleRadio}
          />
          Yes
          <input
            type="radio"
            value="No"
            name="heartCon"
            checked={formData.heartCon}
            onChange={handleRadio}
          />
          No
          <label>Comments</label>
          <input type="text" name="heartConComments" onChange={handleText} />
        </div>
        <div className="txtb">
          <label>Chest pain at rest or whilst exercising</label>
          <input
            type="radio"
            value="Yes"
            name="chestCon"
            checked={formData.chestCon}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="chestCon"
            checked={formData.chestCon}
          />{" "}
          No
          <label>Comments</label>
          <input type="text" name="chestConComments" onChange={handleText} />
        </div>
        <div className="txtb">
          <label>Diabetes</label>
          <input type="radio" value="Yes" name="diabetes" /> Yes
          <input type="radio" value="No" name="diabetes" /> No
          <label>Comments</label>
          <input type="text" name="diabetesComments" onChange={handleText} />
        </div>
        <div className="txtb">
          <label>Epilepsy</label>
          <input type="radio" value="Yes" name="epilepsy" /> Yes
          <input type="radio" value="No" name="epilepsy" /> No
          <label>Comments</label>
          <input type="text" name="epilepsyComments" onChange={handleText} />
        </div>
        <div className="txtb">
          <label>Muscle/joint condition or injury</label>
          <input type="radio" value="Yes" name="muscleCon" /> Yes
          <input type="radio" value="No" name="muscleCon" /> No
          <label>Comments</label>
          <input type="text" name="muscleComments" onChange={handleText} />
        </div>
        <div className="txtb">
          <label>Neck/back condition or injury</label>
          <input type="radio" value="Yes" name="neckCon" /> Yes
          <input type="radio" value="No" name="neckCon" /> No
          <label>Comments</label>
          <input type="text" name="neckComments" onChange={handleText} />
        </div>
        <div className="txtb">
          <label>High/low blood pressure</label>
          <input type="radio" value="Yes" name="bloodPressure" /> Yes
          <input type="radio" value="No" name="bloodPressure" /> No
          <label>Comments</label>
          <input
            type="text"
            name="bloodPressureComments"
            onChange={handleText}
          />
        </div>
        <div className="txtb">
          <label>
            Dizziness/loss of consciousness at rest or whilst exercising
          </label>
          <input type="radio" value="Yes" name="dizziness" /> Yes
          <input type="radio" value="No" name="dizziness" /> No
          <label>Comments</label>
          <input type="text" name="dizzinessComments" onChange={handleText} />
        </div>
        <div className="txtb">
          <label>Pregnancy/recently given birth</label>
          <input type="radio" value="Yes" name="pregnancy" /> Yes
          <input type="radio" value="No" name="pregnancy" /> No
          <label>Comments</label>
          <input type="text" name="pregnancyComments" onChange={handleText} />
        </div>
        <div className="txtb">
          <label>Major operations</label>
          <input type="radio" value="Yes" name="majorOps" /> Yes
          <input type="radio" value="No" name="majorOps" /> No
          <label>Comments</label>
          <input type="text" name="majorOpsComments" onChange={handleText} />
        </div>
        <div className="txtb">
          <label>
            Currently taking medication&#40;s&#41; which affects ability to
            exercise safely
          </label>
          <input type="radio" value="Yes" name="medication" /> Yes
          <input type="radio" value="No" name="medication" /> No
          <label>Comments</label>
          <input type="text" name="medicationComments" onChange={handleText} />
        </div>
        <div className="txtb">
          <label>Temperature &gt; 38&#176;C</label>
          <input type="radio" value="Yes" name="temp" /> Yes
          <input type="radio" value="No" name="temp" /> No
          <label>Comments</label>
          <input type="text" name="tempComments" onChange={handleText} />
        </div>
        <div className="txtb">
          <label>Have you ever contracted COVID-19?</label>
          <input type="radio" value="Yes" name="covid" /> Yes
          <input type="radio" value="No" name="covid" /> No
          <label>If yes, when?</label>
          <input
            type="text"
            name="covidDate"
            value={formData.covidDate}
            onChange={handleText}
          />
        </div>

        {/* <div className="button-div">
          <a className="button" href="/goals">
            <div className="btn-text">Previous</div>
            <div className="btn-subtext">Client Goals</div>
          </a>

          <a className="button" href="/agreement">
            <div className="btn-text">Next</div>
            <div className="btn-subtext">Agreement</div>
          </a>
        </div> */}
      </form>
    </>
  );
};

export default Health;
