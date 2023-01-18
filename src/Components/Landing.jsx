import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Img from "../Components/img/undraw_Bus_stop_re_h8ej.png";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "bootstrap/dist/css/bootstrap.min.css";
import { width } from "@mui/system";

const Landing = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isBackDisabled, setIsBackDisabled] = useState(false);
  const [selectedOptionFrom, setSelectedOptionFrom] = useState("");
  const [selectedOptionTo, setSelectedOptionTo] = useState("");
  const [selectedOptionBus, setSelectedOptionBus] = useState("");
  const [booked, setBooked] = useState({});
  const [hasBooked, setHasBooked] = useState(false);

  const [data, setData] = useState([]);
  const [toData, setToData] = useState([]);

  const [buses, setBuses] = useState([]);

  function handleNext() {
    if (currentStep === 3) {


      fetch("http://127.0.0.1:3000/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: booked.id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          fetch("http://127.0.0.1:3000/stkpush", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phoneNumber: data.phonenumber,
              amount: data.fare,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              alert("payment successful")
              setHasBooked(true);
            });
        });
      isNextDisabled(true);
      return;
    }
    if (currentStep === 2) {
      fetch("http://127.0.0.1:3000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: selectedOptionFrom.value,
          to: selectedOptionTo.value,
          bus_id: selectedOptionBus.value,
        }),
      })
        .then((response) => response.json())
        .then((data) => setBooked({ ...data }));
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
      fetch("http://127.0.0.1:3000/start")
        .then((response) => response.json())
        .then((data) => setData([...data]));
    }, []);
    const options = [];
    data.map((item) =>
      options.push({
        value: item.station_name,
        label: item.station_name,
      })
    );
    console.log(options);
    const optionsTo = [];
    toData.map((item) =>
      optionsTo.push({
        value: item.station_name,
        label: item.station_name,
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
        ></Select>
        <small className="SmallText">Select pick up point</small>
        <br />
        <br />
        <Select
          value={selectedOptionTo}
          onChange={setSelectedOptionTo}
          className="Drop"
          options={optionsTo}
          placeholder="To"
        ></Select>
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
  function BusSelection({ handleNext }) {
    useEffect(() => {
      if (selectedOptionFrom === "" || selectedOptionTo === "") {
        return handleBack();
      }
      if (buses.length > 0) {
        return;
      }
      fetch(
        "http://127.0.0.1:3000/available?from=" +
        selectedOptionFrom.value +
        "&to=" +
        selectedOptionTo.value
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setBuses([...data]);
          } else {
          }
        });
    }, []);
    const options = [];
    buses.map((item) =>
      options.push({
        value: item.id,
        label:
          item.bus_name +
          " (" +
          (item.seater - item.passengers) +
          " seats left)",
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
            onClick={handleNext}
            disabled={isNextDisabled}
            class="btn btn-light "
          >
            Book
          </button>
        </div>
      </div>
    );
  }
  function PaymentMethod({ handleNext, handleBack }) {
    return (
      <div>
        <dic className="details">
          <div className="details-from">
            You booked a bus <b>{booked.bus_name}</b>
          </div>
          <div className="details-to">
            to <b>{selectedOptionTo.label}</b>
          </div>
          <div className="details-bus">
            Bus: <b>{selectedOptionBus.label}</b>
          </div>
          <div className="details-price">
            Price: <b>{booked.fare}</b>
          </div>
          <div className="">
            It is arriving at{" "}
            <b>{new Date(booked.time).toLocaleTimeString()}</b>
          </div>
        </dic>
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
            style={{ backgroundColor: "green", color: "white" }}
          >
            Pay Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="App-landing">
        <div className="Hero">
          <div className="img">
            <img className="img-tag" src={Img} alt={Img} />
          </div>

          <div style={{ width: "900px" }}>
            {hasBooked && (
              <div className="details-success">
                <div>Booking successful,wait for your bus</div>
              </div>
            )}
            {(currentStep === 1 && !hasBooked) && (
              <From handleNext={handleNext} handleBack={handleBack} />
            )}
            {(currentStep === 2 && !hasBooked) && (
              <BusSelection handleNext={handleNext} handleBack={handleBack} />
            )}
            {(currentStep === 3 && !hasBooked) && (
              <PaymentMethod handleNext={handleNext} handleBack={handleBack} />
            )}
          </div>
        </div>
        <br />
        <br />
        <div className="ParentDiv">
          <h2 className="TextA">The Booking Process</h2>
          <div className="Cards">
            <div className="Card">
              <h3 className="Head">Choose destinantion</h3>
              <br />

              <p className="Paragraph">
                Where do you want to go? And before that where are you right
                now? Then select next.
              </p>
            </div>
            <div className="Card">
              <h3 className="Head">Pick your bus</h3>
              <br />
              <p className="Paragraph">
                We have several buses available. Which serves you best? Pick
                one, then select next.
              </p>
            </div>
            <div className="Card">
              <h3 className="Head">Pay and board</h3>
              <br />
              <p className="Paragraph">
                Select book if you are satisfied with the info you see. Wait for
                a notification for arrival of your bus.
                <br />
                <br />
                <small className="text">**Safe Travels!**</small>
              </p>
            </div>
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
    </>
  );
};

export default Landing;
