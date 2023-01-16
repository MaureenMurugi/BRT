

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignedIn === true) {
      return navigate("/landing");
    }

    fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.name.value,
        phonenumber: e.target.number.value,
        password: e.target.password.value,
        confirmpassword: e.target.confirmPassword.value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setError("Error creating user");
          return null;
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          setError(null);
        }
      });
    setIsSignedIn(true);
  };

  return (
    <div>
      <div className="singuptxt11">
      </div>
      <div>
        <h3 className="Textaa">Sign Up</h3>
      </div>
      <div className="Parent1">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full name</label>
            <input
              type="name"
              name="name"
              className="form-control"
              placeholder="Enter name"
              required
              autoFocus="yes"
            />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input
              name="number"
              type="number"
              className="form-control"
              placeholder="Enter phone number"
              required
            />

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              required
            />
            <div className="col-auto">
              <span id="passwordHelpInline" className="SmallText">
                Must be 8-20 characters long
              </span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
            />
            <div className="col-auto">
              <span id="passwordHelpInline" className="SmallText">
                Re-enter the password
              </span>
            </div>
          </div>
          <input type="submit" className="btn btn-success"></input>
        </form>
      </div>
    </div>
  );
};

export default Signup;
