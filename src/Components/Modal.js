// import jsPDF from "jspdf";

const Modal = (props) => {
  return (
    <div id="clientsModal">
      <div className="close-btn">
        <button onClick={props.handleClick}>X</button>
      </div>

      <div className="modal-container">
        <div className="modal-title">
          <h2>{props.name}</h2>
        </div>
        <div className="client-info-div">
          <p>📧 {props.email}</p>
          <p>📱 {props.number}</p>
        </div>

        <div className="modal-body">
          <div className="modal-title">
            <h2>Measurements</h2>
          </div>
          <div className="modal-grid centre-txt">
            <h2>Value</h2>
            <h2>Current</h2>
            <h2>New</h2>
            <h2>Update</h2>

            <p>Height</p>
            <p>{props.height}</p>
            <div className="txtb new-measurement-txtb">
              <input
                placeholder="Height"
                type="text"
                name=""
                value={props.updatedHeight}
                onChange={props.onChangeHeight}
              />
            </div>

            <button className="update-btn" onClick={props.updateHeight}>
              +
            </button>

            <p>Weight</p>
            <p>{props.weight}</p>
            <div className="txtb new-measurement-txtb">
              <input
                placeholder="Weight"
                type="text"
                name=""
                value={props.updatedWeight}
                onChange={props.onChangeWeight}
              />
            </div>
            <button className="update-btn" onClick={props.updateWeight}>
              +
            </button>

            <p>Body Fat</p>
            <p>{props.bodyFat}</p>
            <div className="txtb new-measurement-txtb">
              <input
                placeholder="Body Fat"
                type="text"
                name=""
                value={props.updatedBodyFat}
                onChange={props.onChangeBodyFat}
              />
            </div>
            <button className="update-btn" onClick={props.updateBodyFat}>
              +
            </button>

            <p>Water</p>
            <p>{props.water}</p>
            <div className="txtb new-measurement-txtb">
              <input
                placeholder="Water"
                type="text"
                name=""
                value={props.updatedWater}
                onChange={props.onChangeWater}
              />
            </div>
            <button className="update-btn" onClick={props.updateWater}>
              +
            </button>

            <p>Muscle</p>
            <p>{props.muscle}</p>
            <div className="txtb new-measurement-txtb">
              <input
                placeholder="Muscle"
                type="text"
                name=""
                value={props.updatedMuscle}
                onChange={props.onChangeMuscle}
              />
            </div>
            <button className="update-btn" onClick={props.updateMuscle}>
              +
            </button>

            <p>Physique</p>
            <p>{props.physique}</p>
            <div className="txtb new-measurement-txtb">
              <input
                placeholder="Physique"
                type="text"
                name=""
                value={props.updatedPhysique}
                onChange={props.onChangePhysique}
              />
            </div>
            <button className="update-btn" onClick={props.updatePhysique}>
              +
            </button>

            <p>Metabolic Rate</p>
            <p>{props.metabolicRate}</p>
            <div className="txtb new-measurement-txtb">
              <input
                placeholder="Metabolic Rate"
                type="text"
                name=""
                value={props.updatedMetabolicRate}
                onChange={props.onChangeMetabolicRate}
              />
            </div>
            <button className="update-btn" onClick={props.updateMetabolicRate}>
              +
            </button>

            <p>Metabolic Age</p>
            <p>{props.metabolicAge}</p>
            <div className="txtb new-measurement-txtb">
              <input
                placeholder="Metabolic Age"
                type="text"
                name=""
                value={props.updatedMetabolicAge}
                onChange={props.onChangeMetabolicAge}
              />
            </div>
            <button className="update-btn" onClick={props.updateMetabolicAge}>
              +
            </button>

            <p>Bone Mass</p>
            <p>{props.boneMass}</p>
            <div className="txtb new-measurement-txtb">
              <input
                placeholder="Bone Mass"
                type="text"
                name=""
                value={props.updatedBoneMass}
                onChange={props.onChangeBoneMass}
              />
            </div>
            <button className="update-btn" onClick={props.updateBoneMass}>
              +
            </button>

            <p>Visceral Fat</p>
            <p>{props.visceralFat}</p>
            <div className="txtb new-measurement-txtb">
              <input
                placeholder="Visceral Fat"
                type="text"
                name=""
                value={props.updatedVisceralFat}
                onChange={props.onChangeVisceralFat}
              />
            </div>
            <button className="update-btn" onClick={props.updateVisceralFat}>
              +
            </button>
          </div>
          {/* <div className="single-btn-div screenshot-btn-div">
            <button className="button screenshot-btn" onClick={modalScreenshot}>
              Screenshot Measurements
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
