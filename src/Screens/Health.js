// import background from "../Images/contact-background.jpeg";

const Health = () => {
  return (
    <>
      <form>
        <h1>Client Health &amp; Injuries</h1>

        <h2>
          Do you have any of the following conditions or injuries? If yes,
          please provide further information.
        </h2>

        <div className="txtb">
          <label>Heart condition</label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>Comments</label>
          <input type="text" name="" />
        </div>
        <div className="txtb">
          <label>Chest pain at rest or whilst exercising</label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>Comments</label>
          <input type="text" name="" />
        </div>
        <div className="txtb">
          <label>Diabetes</label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>Comments</label>
          <input type="text" name="" />
        </div>
        <div className="txtb">
          <label>Epilepsy</label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>Comments</label>
          <input type="text" name="" />
        </div>
        <div className="txtb">
          <label>Muscle/joint condition or injury</label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>Comments</label>
          <input type="text" name="" />
        </div>
        <div className="txtb">
          <label>Neck/back condition or injury</label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>Comments</label>
          <input type="text" name="" />
        </div>
        <div className="txtb">
          <label>High/low blood pressure</label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>Comments</label>
          <input type="text" name="" />
        </div>
        <div className="txtb">
          <label>
            Dizziness/loss of consciousness at rest or whilst exercising
          </label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>Comments</label>
          <input type="text" name="" />
        </div>
        <div className="txtb">
          <label>Pregnancy/recently given birth</label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>Comments</label>
          <input type="text" name="" />
        </div>
        <div className="txtb">
          <label>Major operations</label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>Comments</label>
          <input type="text" name="" />
        </div>
        <div className="txtb">
          <label>
            Currently taking medication&#40;s&#41; which affects ability to
            exercise safely
          </label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>Comments</label>
          <input type="text" name="" />
        </div>
        <div className="txtb">
          <label>Temperature &gt; 38&#176;C</label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>Comments</label>
          <input type="text" name="" />
        </div>
        <div className="txtb">
          <label>Have you ever contracted COVID-19?</label>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
          <label>If yes, when?</label>
          <input type="text" name="" />
        </div>

        <div className="button-div">
          <a className="button" href="/goals">
            <div className="btn-text">Previous</div>
            <div className="btn-subtext">Client Goals</div>
          </a>

          <a className="button" href="/agreement">
            <div className="btn-text">Next</div>
            <div className="btn-subtext">Agreement</div>
          </a>
        </div>
      </form>
    </>
  );
};

export default Health;
