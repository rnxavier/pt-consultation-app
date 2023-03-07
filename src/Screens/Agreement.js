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
            Bizzietrainer operates on a pre-pay basis in advance and all
            sessions must be paid before sessions commence. Bookings may not be
            confirmed until payment has been received by trainer.
          </li>
          <li>
            Once my Trainer and I have agreed upon the most appropriate training
            package for me,{" "}
            <strong>
              payment must be made before the sessions are conducted
            </strong>
            . I understand that failure to make payment will result in my
            sessions being forfeit.
          </li>
          <li>
            All pre-paid block packages have a completion date. Outstanding
            sessions will not be carried over the completion date. The agreed
            completion date for each package is 12weeks. One will have 12weeks
            from the beginning of the package to use all sessions unless trainer
            travels or isn’t available within the 12weeks. When this happens,
            remaining sessions will be counted excluding the time the trainer
            was away.
          </li>
          <li>
            I must contact my Trainer directly to change pre-booked sessions.{" "}
            <strong>
              If I need to re-arrange a session, I must give more than 24hours
              notice. Cancellations made with less than 24hours notice will
              incur full charge. Trainer can move your booking if required with
              less than 5hours notice to meet the demands of other clients or to
              respond to an emergency.
            </strong>
          </li>
          <li>
            Cancellations for pre-paid packages which have already started will
            incur{" "}
            <span>
              <strong>85%</strong>
            </span>{" "}
            charge for outstanding sessions to cover time spent researching and
            developing my package.
          </li>
          <li>
            Sessions will last 60 minutes unless otherwise stated in the package
            you bought, and will start and finish on time.{" "}
            <strong>
              I understand that my Trainer will not be able to provide a full 60
              minute session if I am late for the session
            </strong>
            .
          </li>
          <li>
            The results of any training programme are dependent of my effort and
            co-operation in and outside of the sessions. No particular result is
            guaranteed by the Trainer.
          </li>
          <li>
            There are inherent risks in participating in a programme of
            strenuous exercise. If I sustain or claim to sustain an injury while
            participating in a Training package, I acknowledge that the Trainer
            is not responsible.
          </li>
          <li>
            My answers to the questions on the Physical Activity Readiness
            Questionnaire are true and complete to the best of my knowledge. I
            understand and agree that it is my responsibility to inform my
            Trainer of any changes to my health now and ongoing.
          </li>
          <li>
            In the unlikely event of my Trainer being unable to continue my
            training,{" "}
            <strong>
              my Trainer will provide a full refund for the remaining sessions
              in the package purchased
            </strong>
            . This refund will be subject to proof of purchase being provided
            and agreement signed.
          </li>
          <li>
            Refunds will not be granted if in an Epidemic/Pandemic, Time of War
            or if Gym closes for a period of time for whatever reason beyond
            Bizzietrainer’s control. ALL PREPAID SESSIONS ARE ACTIVE FOR ONLY
            3MONTHS & IN THE CASE OF A LOCKDOWN ALL SESSIONS WILL PAUSE UNTIL
            GYMS ARE ALLOWED TO REOPEN.
          </li>
          <li>
            Bizzietrainer is NOT an employee of the APP or YOUR Personal
            Training. My Trainer is a self-employed freelance Trainer. I
            acknowledge that I am entering into an agreement/transaction with
            the Personal Trainer alone and not with YOUR Personal Training or
            any of its subsidiary companies. Any Claim I may have to recover any
            fee paid in advance will be solely against the Trainer to whom
            payment was made or GOCardless credit company who facilitated your
            payment.
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
