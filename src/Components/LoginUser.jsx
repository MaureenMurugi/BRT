import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Img from "../Components/img/undraw_Bus_stop_re_h8ej.png";
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
    fetch("http://127.0.0.1:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phonenumber: e.target.number.value,
        password_digest: e.target.password.value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setIsLoggedIn(true);
          return response.json();
        }
        setError("Error logging in");
        return null;
      })
      .then((data) => {
        if (data) {
          console.log(data);
          window.localStorage.setItem("id", data.id);
          navigate("/");
        }})


    if (isLoggedIn === true) {
      return navigate("/");
    }
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* <div className="img">
        <img className="img-tag" src={Img} alt={Img} />
      </div> */}
      <div>
        <h3 className="Textaa1">Login </h3>
      </div>

      <div className="Parent1">
        <form className="form" onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Phone number</label>

            <input
              type="number"
              name="number"
              class="form-control"
              placeholder="Enter phone number"
              required
            />
            <br />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>

            <input
              type="password"
              // onChange={handleChange}
              name="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
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
