import React, { useState } from "react";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import Img from "../Components/img/undraw_Bus_stop_re_h8ej.png";

const Places = () => {
  const location = useLocation();
  const { from, to, bus } = location.state;
  const [confirmPayment, setConfirmPayment] = useState("");

  function handleSubmit(e) {
    if (confirmPayment) {
      return;
    } else if (!confirmPayment) {
      alert("Please confirm your payment");
    }
  }

  return (
    <div>
      <div className="img">
        <img className="img-tag" src={Img} alt={Img} />
      </div>
      <div className="Card11">
        <div className="Card1">
            <p className="Text">
              <span >From: {from.value}</span>
            </p>
          <p className="Text">To: {to.value}</p>
          <p className="Text">Bus: {bus.value}</p>
        </div>
        <div></div>
      </div>
      <div className="buttn">
        <button onClick={handleSubmit} class="btn btn-outline-success">
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Places;
