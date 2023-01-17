import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Img from "../Components/img/undraw_Bus_stop_re_h8ej.png";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isBackDisabled, setIsBackDisabled] = useState(false);
  const [selectedOptionFrom, setSelectedOptionFrom] = useState("");
  const [selectedOptionTo, setSelectedOptionTo] = useState("");
  const [selectedOptionBus, setSelectedOptionBus] = useState("");

  const [data, setData] = useState([]);
  const [toData, setToData] = useState([]);

  const [buses, setBuses] = useState([]);

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


  function handleNextButton() {
        if (!selectedOptionFrom || !selectedOptionTo || !selectedOptionBus) {
          alert("Please select a value for From, To, and Bus.");
          return;
        }
     navigate("/places", {
       state: {
         from: selectedOptionFrom,
         to: selectedOptionTo,
         bus: selectedOptionBus,
         username: "John Doe",
       },
     });
  }


  function From({ handleNext, handleBack }) {
    useEffect(() => {
      if (data.length > 0) {
        if (toData.length > 0) {
          return;
        }
        const to = data.filter(
          (item) => item.station_name !== selectedOptionFrom
        );
        setToData([...to]);
      }
      fetch("http://127.0.0.1:3000/stations")
        .then((response) => response.json())
        .then((data) => setData([...data]));
    }, []);
    const options = [];
    data.map((item) =>
      options.push({
        value: item.station_name,
        label: item.station_name + item.fare,
        price: item.fare,
      })
    );
    console.log(options);
    const optionsTo = [];
    toData.map((item) =>
      optionsTo.push({
        value: item.station_name,
        label: item.station_name + item.fare,
        price: item.fare,
      })
    );
    return (
      <div>
        <div></div>
        <Select
          value={selectedOptionFrom}
          defaultValue={selectedOptionFrom}
          onChange={setSelectedOptionFrom}
          className="Drop"
          options={options}
          placeholder="From"
        >
        </Select>
        <small className="SmallText">Select pick up point</small>
        <Select
          value={selectedOptionTo}
          onChange={setSelectedOptionTo}
          className="Drop"
          options={optionsTo}
          placeholder="To"
        >
        </Select>
        <small className="SmallText">Select destination</small>
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


  function BusSelection({ handleNext, }) {
    useEffect(() => {
      if (selectedOptionFrom === "" || selectedOptionTo === "") {
        return handleBack();
      }
      if (buses.length > 0) {
        return;
      }
      fetch(
        "http://127.0.0.1:3000/buses?from=" +
          selectedOptionFrom.value +
          "&to=" +
          selectedOptionTo.value
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setBuses([...data])
          } else {
            
          }
        });
    }, []);
    const options = [];
    buses.map((item) =>
      options.push({
        value: item.bus_name + item.time,
        label: item.bus_name + item.time ,
      })
    );
    console.log(options);
    return (
      <div>
        <Select
          onChange={setSelectedOptionBus}
          value={selectedOptionBus}
          className="Drop"
          data={data}
          options={options}
          placeholder="Select a bus"
        ></Select>
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
            onClick={handleNextButton}
            disabled={isNextDisabled}
            class="btn btn-light "
          >
            Pay
          </button>
        </div>
      </div>
    );
  }
  function PaymentMethod({ handleNext, handleBack }) {
    return (
      <div>
        <Select className="Drop" data={data} placeholder="Confirm payment" >
          Pay Via Mpesa
        </Select>
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
            onClick={handleNextButton}
            disabled={isNextDisabled}
            class="btn btn-light "
          >
            Pay
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
