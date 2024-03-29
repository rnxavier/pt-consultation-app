// import background from "../Images/contact-background.jpeg";

const Measurements = ({ formData, setFormData }) => {
  return (
    <>
      <form>
        <h1>Initial Measurements</h1>

        <div className="txtb">
          <label>Height</label>
          <input
            type="number"
            name=""
            value={formData.height}
            onChange={(e) => {
              setFormData({ ...formData, height: e.target.value });
            }}
          />
        </div>

        <div className="txtb">
          <label>Weight</label>
          <input
            type="number"
            name=""
            value={formData.weight}
            onChange={(e) => {
              setFormData({ ...formData, weight: e.target.value });
            }}
          />
        </div>

        <div className="txtb">
          <label>Body Fat</label>
          <input
            type="number"
            name=""
            value={formData.bodyFat}
            onChange={(e) => {
              setFormData({ ...formData, bodyFat: e.target.value });
            }}
          />
        </div>

        <div className="txtb">
          <label>Water</label>
          <input
            type="number"
            name=""
            value={formData.water}
            onChange={(e) => {
              setFormData({ ...formData, water: e.target.value });
            }}
          />
        </div>

        <div className="txtb">
          <label>Muscle</label>
          <input
            type="number"
            name=""
            value={formData.muscle}
            onChange={(e) => {
              setFormData({ ...formData, muscle: e.target.value });
            }}
          />
        </div>

        <div className="txtb">
          <label>Physique</label>
          <input
            type="text"
            name=""
            value={formData.physique}
            onChange={(e) => {
              setFormData({ ...formData, physique: e.target.value });
            }}
          />
        </div>

        <div className="txtb">
          <label>Metabolic Rate</label>
          <input
            type="number"
            name=""
            value={formData.metabolicRate}
            onChange={(e) => {
              setFormData({ ...formData, metabolicRate: e.target.value });
            }}
          />
        </div>

        <div className="txtb">
          <label>Metabolic Age</label>
          <input
            type="number"
            name=""
            value={formData.metabolicAge}
            onChange={(e) => {
              setFormData({ ...formData, metabolicAge: e.target.value });
            }}
          />
        </div>

        <div className="txtb">
          <label>Bone Mass</label>
          <input
            type="number"
            name=""
            value={formData.boneMass}
            onChange={(e) => {
              setFormData({ ...formData, boneMass: e.target.value });
            }}
          />
        </div>

        <div className="txtb">
          <label>Visceral Fat</label>
          <input
            type="number"
            name=""
            value={formData.visceralFat}
            onChange={(e) => {
              setFormData({ ...formData, visceralFat: e.target.value });
            }}
          />
        </div>
      </form>
    </>
  );
};

export default Measurements;
