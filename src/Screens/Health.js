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
      <form>
        <h1>Health &amp; Injuries</h1>

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
            onChange={handleRadio}
            checked={formData.heartCon === "Yes"}
          />
          Yes
          <input
            type="radio"
            value="No"
            name="heartCon"
            onChange={handleRadio}
            checked={formData.heartCon === "No"}
          />
          No
          <div className="comments">
            <label>Comments</label>
            <input type="text" name="heartConComments" onChange={handleText} />
          </div>
        </div>

        <div className="txtb">
          <label>Chest pain at rest or whilst exercising</label>
          <input
            type="radio"
            value="Yes"
            name="chestCon"
            onChange={handleRadio}
            checked={formData.chestCon === "Yes"}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="chestCon"
            onChange={handleRadio}
            checked={formData.chestCon === "No"}
          />{" "}
          No
          <div className="comments">
            <label>Comments</label>
            <input type="text" name="chestConComments" onChange={handleText} />
          </div>
        </div>

        <div className="txtb">
          <label>Diabetes</label>
          <input
            type="radio"
            value="Yes"
            name="diabetes"
            onChange={handleRadio}
            checked={formData.diabetes === "Yes"}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="diabetes"
            onChange={handleRadio}
            checked={formData.diabetes === "No"}
          />{" "}
          No
          <div className="comments">
            <label>Comments</label>
            <input type="text" name="diabetesComments" onChange={handleText} />
          </div>
        </div>

        <div className="txtb">
          <label>Epilepsy</label>
          <input
            type="radio"
            value="Yes"
            name="epilepsy"
            onChange={handleRadio}
            checked={formData.epilepsy === "Yes"}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="epilepsy"
            onChange={handleRadio}
            checked={formData.epilepsy === "No"}
          />{" "}
          No
          <div className="comments">
            <label>Comments</label>
            <input type="text" name="epilepsyComments" onChange={handleText} />
          </div>
        </div>

        <div className="txtb">
          <label>Muscle/joint condition or injury</label>
          <input
            type="radio"
            value="Yes"
            name="muscleCon"
            onChange={handleRadio}
            checked={formData.muscleCon === "Yes"}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="muscleCon"
            onChange={handleRadio}
            checked={formData.muscleCon === "No"}
          />{" "}
          No
          <div className="comments">
            <label>Comments</label>
            <input type="text" name="muscleComments" onChange={handleText} />
          </div>
        </div>

        <div className="txtb">
          <label>Neck/back condition or injury</label>
          <input
            type="radio"
            value="Yes"
            name="neckCon"
            onChange={handleRadio}
            checked={formData.neckCon === "Yes"}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="neckCon"
            onChange={handleRadio}
            checked={formData.neckCon === "No"}
          />{" "}
          No
          <div className="comments">
            <label>Comments</label>
            <input type="text" name="neckComments" onChange={handleText} />
          </div>
        </div>

        <div className="txtb">
          <label>High/low blood pressure</label>
          <input
            type="radio"
            value="Yes"
            name="bloodPressure"
            onChange={handleRadio}
            checked={formData.bloodPressure === "Yes"}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="bloodPressure"
            onChange={handleRadio}
            checked={formData.bloodPressure === "No"}
          />{" "}
          No
          <div className="comments">
            <label>Comments</label>
            <input
              type="text"
              name="bloodPressureComments"
              onChange={handleText}
            />
          </div>
        </div>

        <div className="txtb">
          <label>
            Dizziness/loss of consciousness at rest or whilst exercising
          </label>
          <input
            type="radio"
            value="Yes"
            name="dizziness"
            onChange={handleRadio}
            checked={formData.dizziness === "Yes"}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="dizziness"
            onChange={handleRadio}
            checked={formData.dizziness === "No"}
          />{" "}
          No
          <div className="comments">
            <label>Comments</label>
            <input type="text" name="dizzinessComments" onChange={handleText} />
          </div>
        </div>

        <div className="txtb">
          <label>Pregnancy/recently given birth</label>
          <input
            type="radio"
            value="Yes"
            name="pregnancy"
            onChange={handleRadio}
            checked={formData.pregnancy === "Yes"}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="pregnancy"
            onChange={handleRadio}
            checked={formData.pregnancy === "No"}
          />{" "}
          No
          <div className="comments">
            <label>Comments</label>
            <input type="text" name="pregnancyComments" onChange={handleText} />
          </div>
        </div>

        <div className="txtb">
          <label>Major operations</label>
          <input
            type="radio"
            value="Yes"
            name="majorOps"
            onChange={handleRadio}
            checked={formData.majorOps === "Yes"}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="majorOps"
            onChange={handleRadio}
            checked={formData.majorOps === "No"}
          />{" "}
          No
          <div className="comments">
            <label>Comments</label>
            <input type="text" name="majorOpsComments" onChange={handleText} />
          </div>
        </div>

        <div className="txtb">
          <label>
            Currently taking medication&#40;s&#41; which affects ability to
            exercise safely
          </label>
          <input
            type="radio"
            value="Yes"
            name="medication"
            onChange={handleRadio}
            checked={formData.medication === "Yes"}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="medication"
            onChange={handleRadio}
            checked={formData.medication === "No"}
          />{" "}
          No
          <div className="comments">
            <label>Comments</label>
            <input
              type="text"
              name="medicationComments"
              onChange={handleText}
            />
          </div>
        </div>
        <div className="txtb">
          <label>Temperature &gt; 38&#176;C</label>
          <input
            type="radio"
            value="Yes"
            name="temp"
            onChange={handleRadio}
            checked={formData.temp === "Yes"}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="temp"
            onChange={handleRadio}
            checked={formData.temp === "No"}
          />{" "}
          No
          <div className="comments">
            <label>Comments</label>
            <input type="text" name="tempComments" onChange={handleText} />
          </div>
        </div>
        <div className="txtb">
          <label>Have you ever contracted COVID-19?</label>
          <input
            type="radio"
            value="Yes"
            name="covid"
            onChange={handleRadio}
            checked={formData.covid === "Yes"}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            name="covid"
            onChange={handleRadio}
            checked={formData.covid === "No"}
          />{" "}
          No
          <div className="comments">
            <label>If yes, when?</label>
            <input
              type="text"
              name="covidDate"
              value={formData.covidDate}
              onChange={handleText}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Health;
