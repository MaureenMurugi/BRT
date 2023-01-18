import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Img from "../Components/img/undraw_Bus_stop_re_h8ej.png";
import { WbIncandescentTwoTone } from "@mui/icons-material";

const Login = () => {
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
    fetch("http://127.0.0.1:3000/auth/admin", {
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
      return null
    })
    .then((data) => {
      if (data) {
        window.localStorage.setItem("id", data.id);
        window.localStorage.setItem("is_admin", true)
        navigate("/adminSide");
      }
    })
  };

  return (
    <div>
      {/* <div className="img">
        <img className="img-tag" src={Img} alt={Img} />
      </div> */}
      <div>
        <h3 className="Textaa">Login As n Admin</h3>
      </div>

      <div className="Parent1">

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Phone number</label>
            <input
              type="number"
              name="number"
              className="form-control"
              placeholder="Enter phone number"
              required
              autoFocus="yes"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              // onChange={handleChange}
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

          </div>
          <input  type="submit" className="btn btn-success" value={"Log in"} />

        </form>
      </div>
    </div>
  );
};

export default Login;
