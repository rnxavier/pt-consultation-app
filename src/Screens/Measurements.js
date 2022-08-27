// import background from "../Images/contact-background.jpeg";
import Navbar from "../Components/Navbar";

const Measurements = () => {
  return (
    <>
      <Navbar />
      <form>
        <h1>Client's First Measurements</h1>

        <div className="txtb">
          <label>Height</label>
          <input type="text" name="" />
        </div>

        <div className="txtb">
          <label>Weight</label>
          <input type="text" name="" />
        </div>

        <div className="txtb">
          <label>Body Fat</label>
          <input type="text" name="" />
        </div>

        <div className="txtb">
          <label>Water</label>
          <input type="text" name="" />
        </div>

        <div className="txtb">
          <label>Muscle</label>
          <input type="text" name="" />
        </div>

        <div className="txtb">
          <label>Physique</label>
          <input type="text" name="" />
        </div>

        <div className="txtb">
          <label>Metabolic Rate</label>
          <input type="text" name="" />
        </div>

        <div className="txtb">
          <label>Metabolic Age</label>
          <input type="text" name="" />
        </div>

        <div className="txtb">
          <label>Bone Mass</label>
          <input type="text" name="" />
        </div>

        <div className="txtb">
          <label>Visceral Fat</label>
          <input type="text" name="" />
        </div>

        <div className="button-div">
          <a className="button" href="/agreement">
            <div className="btn-text">Previous</div>
            <div className="btn-subtext">Agreement</div>
          </a>

          <a className="button" href="/agreement">
            <div className="submit-btn-text">Submit</div>
          </a>
        </div>
      </form>
    </>
  );
};

export default Measurements;
