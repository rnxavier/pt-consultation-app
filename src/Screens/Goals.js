// import background from "../Images/contact-background.jpeg";
import Navbar from "../Components/Navbar";

const Goals = ({ formData, setFormData }) => {
  return (
    <>
      <Navbar />
      <form>
        <h1>Client Goals</h1>

        <div className="txtb">
          <label>What are your main goals for this exercise program?</label>
          <input type="radio" value="Option 1" /> Option 1
          <input type="radio" value="Option 2" /> Option 2
          <input type="radio" value="Option 3" /> Option 3
          <input type="radio" value="Option 4" /> Option 4
          <input type="radio" value="Option 5" /> Option 5
        </div>

        <div className="txtb">
          <label>Which body parts would you like to focus on?</label>
          <input type="radio" value="Option 1" /> Option 1
          <input type="radio" value="Option 2" /> Option 2
          <input type="radio" value="Option 3" /> Option 3
          <input type="radio" value="Option 4" /> Option 4
          <input type="radio" value="Option 5" /> Option 5
        </div>

        <div className="txtb">
          <label>
            How long after beginning your training regime do you expect to see
            results?
          </label>
          <input type="radio" value="Option 1" /> Option 1
          <input type="radio" value="Option 2" /> Option 2
          <input type="radio" value="Option 3" /> Option 3
          <input type="radio" value="Option 4" /> Option 4
          <input type="radio" value="Option 5" /> Option 5
        </div>

        <div className="txtb">
          <label>
            On a scale of 1-10, how would you describe your current knowledge of
            exercise and fitness?
          </label>
          <input type="radio" value="Option 1" /> 1
          <input type="radio" value="Option 2" /> 2
          <input type="radio" value="Option 3" /> 3
          <input type="radio" value="Option 4" /> 4
          <input type="radio" value="Option 5" /> 5
          <input type="radio" value="Option 6" /> 6
          <input type="radio" value="Option 7" /> 7
          <input type="radio" value="Option 8" /> 8
          <input type="radio" value="Option 9" /> 9
          <input type="radio" value="Option 10" /> 10
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
          <input type="text" name="" required />
        </div>

        {/* <div className="button-div">
          <a className="button" href="/">
            <div className="btn-text">Previous</div>
            <div className="btn-subtext">Client Information</div>
          </a>

          <a className="button" href="/health">
            <div className="btn-text">Next</div>
            <div className="btn-subtext">Client Health</div>
          </a>
        </div> */}
      </form>
    </>
  );
};

export default Goals;
