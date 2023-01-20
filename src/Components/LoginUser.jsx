import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { API_URL } from "../Constants";

const LoginUser = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/auth/login`, {
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
        alert("Invalid phone number or password");
        return null;
      })
      .then((data) => {
        if (data) {
          console.log(data);
          window.localStorage.setItem("id", data.id);
          if (location.state?.from) {
            navigate("/", { state: { from: location.state.from, to: location.state.to, bus_id: location.state.bus_id } });
          } else {
            navigate("/");
          }
        }
      })


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
