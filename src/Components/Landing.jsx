import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Img from "../Components/img/undraw_Bus_stop_re_h8ej.png";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
 
  const [currentStep, setCurrentStep] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isBackDisabled, setIsBackDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
   const [data, setData] = useState([]);

  function handleNext() {
    if (currentStep === 3) {
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

    useEffect(() => {  
      fetch("http://127.0.0.1:3000/stations")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

    return (
      <div>
        <div></div>
        <Select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="Drop"
          options={data}
          placeholder="From:"
        >
          {data.map((item) => (
            <option key={item.id} value={item.name}>
              <h4>{item.name} {item.fare}</h4>
            </option>
          ))}
        </Select>
        <small className="SmallText">Where are you coming from</small>
        <div className="buttn">
          <button
            onClick={handleBack}
            disabled={isBackDisabled}
            class="btn btn-light "
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            class="btn btn-light "
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  // function WhereTo({ handleNext, handleBack }) {
  //   return (
  //     <div>
  //       <Select className="Drop" options={data} placeholder="To:" />
  //       <small className="SmallText">Where are you going to</small>
  //       <div className="buttn">
  //         <button
  //           onClick={handleBack}
  //           disabled={isBackDisabled}
  //           class="btn btn-light "
  //         >
  //           Back
  //         </button>
  //         <button
  //           onClick={handleNext}
  //           disabled={isNextDisabled}
  //           class="btn btn-light "
  //         >
  //           Next
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  function BusSelection({ handleNext, handleBack }) {
    
    useEffect(() => {
      fetch("http://127.0.0.1:3000/buses")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

    
    return (
      <div>
        <Select
          onChange={(e) => setSelectedOption(e.target.value)}
          className="Drop"
          data={data}
          placeholder="Select a bus"
        >
          {data.map((item) => (
            <option key={item.id} value={item.name}>
              <h4>{item.name}</h4> <h4>{item.seater}</h4>
              <h4>{item.passengers}</h4> <h4>{item.status}</h4>
              <h4>{item.from}</h4> <h4>{item.to}</h4>
              <h4>{item.time}</h4>
            </option>
          ))}
        </Select>
        <small className="SmallText">
          Select a bus from the available ones
        </small>
        <div className="buttn">
          <button
            onClick={handleBack}
            disabled={isBackDisabled}
            class="btn btn-light "
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            class="btn btn-light "
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  function PaymentMethod({ handleNext, handleBack }) {
    return (
      <div>
        <Select
          // onChange={handleChange}
          // value={selectedOption}
          className="Drop"
          data={data}
          placeholder="Confirm payment"
        />
        <small className="SmallText">Select a payment method</small>
        <div className="buttn">
          <button
            onClick={handleBack}
            disabled={isBackDisabled}
            class="btn btn-light "
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            class="btn btn-light "
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="img">
        <img className="img-tag" src={Img} alt={Img} />
      </div>
      <div>
        {currentStep === 1 && (
          <From handleNext={handleNext} handleBack={handleBack} />
        )}
        {/* {currentStep === 2 && (
          <WhereTo handleNext={handleNext} handleBack={handleBack} />
        )} */}
        {currentStep === 2 && (
          <BusSelection handleNext={handleNext} handleBack={handleBack} />
        )}
        {currentStep === 3 && (
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
            <br />
            <small className="text">**Safe Travels!**</small>
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
        <ul className="ul">
          <Link to="/places">
            <li>Routes</li>
          </Link>
          <Link to="/aboutus">
            <li>About us</li>
          </Link>
        </ul>
        <small className="text11">Copyright ©Brt</small>
      </footer>
    </div>
  );
};

export default Landing;
