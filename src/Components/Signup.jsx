import React from "react";
import Img from "../Components/img/undraw_Bus_stop_re_h8ej.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       password: "",
  //       confirmPassword: "",
  //     };
  //   }
  //   // ...
  // }

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    number: [],
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = (e) => {
    // const { error } = this.state;
    if (isSignedIn === true) {
      return navigate("/landing");
    } else {
      // if (
      //   formData.name === "" ||
      //   formData.number === "" ||
      //   formData.password === "" ||
      //   formData.confirmpassword === ""
      // ) {
      //   alert("All input fields are required");
      // }
      const { password, confirmPassword } = this.state;
      if (password !== confirmPassword) {
        alert("Passwords do not match");
      } else {
      }
    }
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    if (
      e.target.password.value.length < 8 ||
      e.target.password.value.length > 20
    ) {
      setError("Password must be at least 8 - 20 characters");
      return;
    }
    setIsSignedIn(true);
  };

    // const handleChange = (e) => {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value,
    //   });
    // };

  function handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

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

  function signUp(username, phonenumber, password, confirmpassword) {
    
    fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        phonenumber: phonenumber,
        password: password,
        confirmpassword: confirmpassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          return `${username} "you have successfully signed up"`;
        } else {
          console.log("Error creating user:", data.error);
        }
      });
  }

  return (
    <div>
      <div className="img">
        <img className="img-tag" src={Img} alt={Img} />
      </div>
      <div className="singuptxt11">
        <p className="singuptxt1">
          <h2 className="singuptxt1">Welcome to our Bus Transit System</h2>
        </p>
      </div>
      <div>
        <h3 className="Textaa">Sign Up</h3>
      </div>
      <div className="Parent1">
        <form className="form">
          <div class="form-group">
            <label>Full name</label>
            <input
              // value={formData.name}
              type="name"
              name="name"
              class="form-control"
              onChange={handleChange}
              placeholder="Enter name"
              required
              autoFocus="yes"
            />
            {/* {this.state.error.email && <p>{this.state.error.name}</p>} */}
            {/* <small className="SmallText">Enter your full name</small> */}
          </div>
          <div class="form-group">
            <label>Phone number</label>
            <input
              name="number"
              // value={formData.phonenumber}
              type="number"
              class="form-control"
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
            {/* <small className="SmallText">Enter your phone number</small> */}
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              // value={formData.password}
              onChange={handleChange}
              id="exampleInputPassword1"
              placeholder="Password"
              name="Password"
              required
            />
            {/* {this.state.error.password && <p>{this.state.error.password}</p>} */}
            <div class="col-auto">
              <span id="passwordHelpInline" class="SmallText">
                Must be 8-20 characters long
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              // value={formData.confirmpassword}
              onChange={handleChange}
              id="exampleInputPassword1"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
            />
            <div class="col-auto">
              <span id="passwordHelpInline" class="SmallText">
                Re-enter the password
              </span>
            </div>
          </div>
          <button onClick={handleSubmit} type="submit" class="btn btn-success">
            Sign Up
          </button>
          {error && (
            <p onClick={handleSubmit} className="error-message">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
