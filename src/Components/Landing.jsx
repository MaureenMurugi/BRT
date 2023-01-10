import React from "react";
import Select from "react-select";
import { useState } from "react";

// import Img from "../Components/img/scarbor-siu-G9ibPhxqagE-unsplash.jpg";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "bootstrap/dist/css/bootstrap.min.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Landing = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isBackDisabled, setIsBackDisabled] = useState(false);

  function handleNext() {
    if (currentStep === 4) {
      isNextDisabled(true);
      return;
    }
    setCurrentStep(currentStep + 1);
    setIsNextDisabled(false);
  }

  function handleBack() {
    if (currentStep === 1) {
      isBackDisabled(true);
      return;
    }
    setCurrentStep(currentStep - 1);
    setIsBackDisabled(false);
  }

  function From({ handleNext, handleBack }) {
    return (
      <div>
        <Select className="Drop" options={options} placeholder="From:" />
        <small className="SmallText">Where are you coming from</small>
        <div>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            class="btn btn-light "
          >
            Next
          </button>
          <button
            onClick={handleBack}
            disabled={isBackDisabled}
            class="btn btn-light "
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  function WhereTo({ handleNext, handleBack }) {
    return (
      <div>
        <Select className="Drop" options={options} placeholder="To:" />
        <small className="SmallText">Where are you going to</small>
        <div>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            class="btn btn-light "
          >
            Next
          </button>
          <button
            onClick={handleBack}
            disabled={isBackDisabled}
            class="btn btn-light "
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  function BusSelection({ handleNext, handleBack }) {
    return (
      <div>
        <Select className="Drop" options={options} placeholder="Select bus" />
        <small className="SmallText">
          Select a bus from the available ones
        </small>
        <div>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            class="btn btn-light "
          >
            Next
          </button>
          <button
            onClick={handleBack}
            disabled={isBackDisabled}
            class="btn btn-light "
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  function PaymentMethod({ handleNext, handleBack }) {
    return (
      <div>
        <Select
          className="Drop"
          options={options}
          placeholder="Confirm payment"
        />
        <small className="SmallText">Select a payment method</small>
        <div>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            class="btn btn-light "
          >
            Next
          </button>
          <button
            onClick={handleBack}
            disabled={isBackDisabled}
            class="btn btn-light "
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* <div className="ImgA">
        <img className="Img" src={Img}alt="Bus" />
      </div> */}
      <div>
        {currentStep === 1 && (
          <From handleNext={handleNext} handleBack={handleBack} />
        )}
        {currentStep === 2 && (
          <WhereTo handleNext={handleNext} handleBack={handleBack} />
        )}
        {currentStep === 3 && (
          <BusSelection handleNext={handleNext} handleBack={handleBack} />
        )}
        {currentStep === 4 && (
          <PaymentMethod handleNext={handleNext} handleBack={handleBack} />
        )}
      </div>
      <br />
      <br />
      <div className="ParentDiv">
        <h2 className="TextA">The Booking Process</h2>
        <div className="Card">
          <h3 className="Head">Choose destinantion</h3>
          <br />

          <p className="Paragraph">
            Where do you want to go? And before that where are you right now?
            Then select next.
          </p>
        </div>
        <div className="Card">
          <h3 className="Head">Pick your bus</h3>
          <br />
          <p className="Paragraph">
            We have several buses available. Which serves you best? Pick one,
            then select next.
          </p>
        </div>
        <div className="Card">
          <h3 className="Head">Pay and board</h3>
          <br />
          <p className="Paragraph">
            Select book if you are satisfied with the info you see. Wait for a
            notification for arrival of your bus.
            <br />
            ** Travel safe and enjoy!**
          </p>
        </div>
      </div>
      <div className="Below">
        <p>
          <h2 className="Text">What we do</h2>
        </p>
        <ul>
          <li>Pick you at your door step</li>
          <li>Give you fair bus rates</li>
          <li>Take you where you want to go</li>
          <li>Take you there fast</li>
        </ul>
      </div>
      <footer className="Foot">
        <ul>
          <li>Routes</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </footer>
    </div>
  );
};

export default Landing;
