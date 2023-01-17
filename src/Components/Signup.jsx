import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Img from "../Components/img/undraw_Bus_stop_re_h8ej.png";

const Signup = () => {
  const navigate = useNavigate();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [ setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordLengthError, setPasswordLengthError] = useState("");

 const passwordRegex = new RegExp(/^.{8,20}$/);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignedIn === true) {
      return navigate("/landing");
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }
    if (!passwordRegex.test(password)) {
      setPasswordLengthError(
        alert('Weak password. Password must be between 8 and 20 characters long.')
      );
      return;
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
      <div className="img">
        <img className="img-tag" src={Img} alt={Img} />
      </div>
      <div className="singuptxt11"></div>
      <div>
        <h3 className="Textaa1">Sign Up</h3>
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
              onChange={(e) => setPassword(e.target.value)}
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
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            <br />
            <br />
            <p>
              Already have an account ?
              <Link className="singuptxt" to="/loginuser">
                Login here
              </Link>
            </p>
          </div>
          {passwordLengthError && <p>{passwordLengthError}</p>}
          <button type="submit" class="btn btn-success">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
