import SignatureCanvas from "react-signature-canvas";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Agreement = () => {
  const user = firebase.auth().currentUser;

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  let canvasWidth = null;
  let canvasHeight = null;

  if (window.innerWidth > 1210) {
    canvasWidth = 500;
    canvasHeight = 200;
  } else if (window.innerWidth <= 1210) {
    canvasWidth = 250;
    canvasHeight = 80;
  }

  return (
    <>
      <div className="agreement-div">
        <h1>Agreement: Client Declaration</h1>

        <h2>I understand that</h2>

        <ol>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
        </ol>

        <div className="health-check-div">
          If you answered Yes to more than one of the statements on the previous
          page, please contact a health professional before commencing your
          Personal Training programme.
        </div>

        <h2>I agree to the above statements:</h2>

        <div className="signature-pads">
          <div>
            <div className="txtb">
              <label>Client Name</label>
              <input type="text" />
            </div>
            <div className="signature-pad first-canvas">
              <SignatureCanvas
                penColor="black"
                backgroundColor="white"
                canvasProps={{
                  width: canvasWidth,
                  height: canvasHeight,
                }}
              />
            </div>
            <p>Client Signature</p>
          </div>
          <div>
            <div className="txtb">
              <label>Trainer Name</label>
              <input type="text" value={user.displayName} />
            </div>
            <div className="signature-pad">
              <SignatureCanvas
                penColor="black"
                backgroundColor="white"
                canvasProps={{
                  width: canvasWidth,
                  height: canvasHeight,
                }}
              />
            </div>
            <p>Trainer Signature</p>
          </div>
        </div>

        <h2>Date signed: {date}</h2>
      </div>
    </>
  );
};

export default Agreement;
