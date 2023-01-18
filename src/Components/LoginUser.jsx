import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import Img from "../Components/img/undraw_Bus_stop_re_h8ej.png";
const LoginUser = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber || !password) {
      setError({
        phoneNumber: !phoneNumber ? "Phone number is required" : "",
        password: !password ? "Password is required" : "",
      });
      return;
    }
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setIsLoggedIn(true);
          return response.json();
        }
        throw new Error("Phone number or password is invalid");
      })
      .then(console.log)
      .catch(console.log);

    if (isLoggedIn === true) {
      return navigate("/landing");
    }
    setIsLoggedIn(true);
  };

  return (
    <div>
      <div className="img">
        <img className="" />
      </div>
      <div>
        <h3 className="Textaa1">Login </h3>
      </div>

      <div className="Parent1">
        <form className="form">
          <div class="form-group">
            <label>Phone number</label>

            <input
              type="number"
              class="form-control"
              placeholder="Enter phone number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              autoFocus="yes"
            />
            <br />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>

            <input
              type="password"
              // onChange={handleChange}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div class="col-auto">
              <span id="passwordHelpInline" class="SmallText">
                Must be 8-20 characters long
              </span>
            </div>
          </div>
          <button type="submit" class="btn btn-success">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
