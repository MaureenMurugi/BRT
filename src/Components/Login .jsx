import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Img from "../Components/img/undraw_Bus_stop_re_h8ej.png";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({phonenumber:"" , password:""});

  function validatePhonenumber(phonenumber) {
    //test for 10 digits or 12 digits starting with 254
    const re = /^(\+254|0)[7][0-9]{8}$/;
    return re.test(phonenumber);
  }

  function validatePassword(password) {
    //test for 8-20 characters
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    return re.test(password);
  }

  function handleChange(event) {
    event.preventDefault();
    const loginData = {
      phonenumber: event.target.phonenumber.value,
      password: event.target.password.value,
    };

    if (!validatePhonenumber(loginData.phonenumber)) {
      setError({ ...error, phonenumber: "Invalid phone number" });
      return;
    } else if (!validatePassword(loginData.password)) {
      setError({ ...error, password: "Invalid password" });
      return;
    }

    //post to the api
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setError({ error: "Something went wrong" });
        }
      })
      .then((data) => {
        if (data) {
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
        }
      });
  }

  return (
    <div>
      <div className="img">
        <img className="img-tag" src={Img} alt={Img} />
      </div>
      <div>
        <h3 className="Textaa">Login</h3>
      </div>
      <div className="auth-errors-wrapper">
        <div className="auth-errors" style={error.phonenumber === "" || error.password === "" ? {"display":"none"} : {"display":"block"}}>
          <p>{error.phonenumber}</p>
          <p>{error.password}</p>
        </div>
      </div>

      <div className="Parent1">
        {/* <form onSubmit={handleLogin}> */}
        <form className="form" onSubmit={handleChange}>
          <div className="form-group">
            <label>Phone number</label>
            <input
              type="number"
              // onChange={handleChange}
              name="phonenumber"
              className="form-control"
              placeholder="Enter phone number"
              required
              autoFocus="yes"
            />
            {/* <small className="SmallText">Enter your phone number</small> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              // onChange={handleChange}
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
            <div className="col-auto">
              <span id="passwordHelpInline" className="SmallText">
                Must be 8-20 characters long
              </span>
            </div>
            <br />
            <br />
            <p>
              Don't have an account?
              <Link className="singuptxt" to="/signup">
                Sign up here
              </Link>
            </p>
          </div>
          <button type="submit" className="btn btn-success">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
