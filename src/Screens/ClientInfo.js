// import background from "../Images/contact-background.jpeg";
import Navbar from "../Components/Navbar";

const ClientInfo = ({ formData, setFormData }) => {
  return (
    <>
      {/* <Navbar /> */}
      <form>
        <h1>Client Information</h1>
        <div className="txtb">
          <label>Full Name</label>
          <input
            type="text"
            name=""
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            required
          />
        </div>

        <div className="txtb">
          <label>Gender</label>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>

        <div className="txtb">
          <label>D.O.B.</label>
          <input
            type="text"
            name=""
            value={formData.dob}
            onChange={(e) => {
              setFormData({ ...formData, dob: e.target.value });
            }}
            required
          />
        </div>

        <div className="txtb">
          <label>Contact Number</label>
          <input
            type="text"
            name=""
            value={formData.contactNo}
            onChange={(e) => {
              setFormData({ ...formData, contactNo: e.target.value });
            }}
            required
          />
        </div>

        <div className="txtb">
          <label>Email Address</label>
          <input
            type="text"
            name=""
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            required
          />
        </div>

        <div className="txtb">
          <label>Emergency Contact</label>
          <input
            type="text"
            name=""
            value={formData.emergencyContact}
            onChange={(e) => {
              setFormData({ ...formData, emergencyContact: e.target.value });
            }}
            required
          />
        </div>

        <div className="txtb">
          <label>Emergency Contact Number</label>
          <input
            type="text"
            name=""
            value={formData.emergencyNo}
            onChange={(e) => {
              setFormData({ ...formData, emergencyNo: e.target.value });
            }}
            required
          />
        </div>

        {/* <div className="single-button-div">
          <a className="button" href="/goals">
            <div className="btn-text">Next</div>
            <div className="btn-subtext">Client Goals</div>
          </a>
        </div> */}
      </form>
    </>
  );
};

export default ClientInfo;
