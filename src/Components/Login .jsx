import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Img from "../Components/img/undraw_Bus_stop_re_h8ej.png";

const Login = () => {


  const navigate = useNavigate();
  // const [error, setError] = use
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {

    const { error } = this.state;
    if (error.phonenumber || error.password) {
        alert("Please fill all the required fields");
    }
    // Perform login logic here
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return navigate('/landing')
  } else if (isLoggedIn === false) {
    // return console.error("Phone number or password is invalid");
  }
  

   function handleChange(event) {
     const { name, value } = event.target;
     this.setState({ [name]: value });

     if (!value) {
       this.setState((prevState) => ({
         ...prevState,
         error: {
           ...prevState.error,
           [name]: "This field is required",
         },
       }));
     } else {
       this.setState((prevState) => ({
         ...prevState,
         error: {
           ...prevState.error,
           [name]: "",
         },
       }));
     }
   }
  


  return (
    <div>
      <div className="img">
        <img className="img-tag" src={Img} alt={Img} />
      </div>
      <div>
        <h3 className="Textaa">Login</h3>
      </div>

      <div className="Parent1">
        {/* <form onSubmit={handleLogin}> */}
        <form className="form">
          <div class="form-group">
            <label>Phone number</label>
            <input
              type="number"
              onChange={handleChange}
              class="form-control"
              placeholder="Enter phone number"
              required
              autoFocus="yes"
            />
            {/* <small className="SmallText">Enter your phone number</small> */}
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              onChange={handleChange}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
            <div class="col-auto">
              <span id="passwordHelpInline" class="SmallText">
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
          <button onClick={handleSubmit} type="submit" class="btn btn-success">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
