const Goals = ({ formData, setFormData }) => {
  const handleRadio = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <>
      <form>
        <h1>Goals &amp; Motivation</h1>

        <div className="txtb">
          <label>What are your main goals for this exercise program?</label>
          <input
            type="text"
            name=""
            value={formData.goals}
            onChange={(e) => {
              setFormData({ ...formData, goals: e.target.value });
            }}
            required
          />
        </div>

        <div className="txtb">
          <label>Which body parts would you like to focus on?</label>
          <input
            type="text"
            name=""
            value={formData.bodyParts}
            onChange={(e) => {
              setFormData({ ...formData, bodyParts: e.target.value });
            }}
            required
          />
        </div>

        <div className="txtb">
          <label>
            How long after beginning your training regime do you expect to see
            results?
          </label>
          <input
            type="radio"
            value="Option 1"
            name="resultsTime"
            onChange={handleRadio}
            checked={formData.resultsTime === "Option 1"}
          />{" "}
          4 weeks
          <input
            type="radio"
            value="Option 2"
            name="resultsTime"
            onChange={handleRadio}
            checked={formData.resultsTime === "Option 2"}
          />{" "}
          6 weeks
          <input
            type="radio"
            value="Option 3"
            name="resultsTime"
            onChange={handleRadio}
            checked={formData.resultsTime === "Option 3"}
          />{" "}
          3 months
          <input
            type="radio"
            value="Option 4"
            name="resultsTime"
            onChange={handleRadio}
            checked={formData.resultsTime === "Option 4"}
          />{" "}
          12 months
          <input
            type="radio"
            value="Option 5"
            name="resultsTime"
            onChange={handleRadio}
            checked={formData.resultsTime === "Option 5"}
          />{" "}
          18 months
        </div>

        <div className="txtb">
          <label>
            On a scale of 1-10, how would you describe your current knowledge of
            exercise and fitness?
          </label>
          <input
            type="radio"
            value="1"
            name="knowledge"
            onChange={handleRadio}
            checked={formData.knowledge === "1"}
          />{" "}
          1
          <input
            type="radio"
            value="2"
            name="knowledge"
            onChange={handleRadio}
            checked={formData.knowledge === "2"}
          />{" "}
          2
          <input
            type="radio"
            value="3"
            name="knowledge"
            onChange={handleRadio}
            checked={formData.knowledge === "3"}
          />{" "}
          3
          <input
            type="radio"
            name="knowledge"
            onChange={handleRadio}
            checked={formData.knowledge === "4"}
          />{" "}
          4
          <input
            type="radio"
            value="5"
            name="knowledge"
            onChange={handleRadio}
            checked={formData.knowledge === "5"}
          />{" "}
          5
          <input
            type="radio"
            value="6"
            name="knowledge"
            onChange={handleRadio}
            checked={formData.knowledge === "6"}
          />{" "}
          6
          <input
            type="radio"
            value="7"
            name="knowledge"
            onChange={handleRadio}
            checked={formData.knowledge === "7"}
          />{" "}
          7
          <input
            type="radio"
            value="8"
            name="knowledge"
            onChange={handleRadio}
            checked={formData.knowledge === "8"}
          />{" "}
          8
          <input
            type="radio"
            value="9"
            name="knowledge"
            onChange={handleRadio}
            checked={formData.knowledge === "9"}
          />{" "}
          9
          <input
            type="radio"
            value="10"
            name="knowledge"
            onChange={handleRadio}
            checked={formData.knowledge === "10"}
          />{" "}
          10
        </div>

        <div className="txtb">
          <label>What will motivate you to achieve your goals?</label>
          <input
            type="text"
            name=""
            value={formData.motivation}
            onChange={(e) => {
              setFormData({ ...formData, motivation: e.target.value });
            }}
            required
          />
        </div>

        <div className="txtb">
          <label>
            What are your expected barriers towards your exercise program?
          </label>
          <input
            type="text"
            name=""
            value={formData.barriers}
            onChange={(e) => {
              setFormData({ ...formData, barriers: e.target.value });
            }}
            required
          />
        </div>

        <div className="txtb">
          <label>How can we help you?</label>
          <input
            type="text"
            name=""
            value={formData.help}
            onChange={(e) => {
              setFormData({ ...formData, help: e.target.value });
            }}
            required
          />
        </div>
      </form>
    </>
  );
};

export default Goals;
