import React from "react";
import { Link } from "react-router-dom";

import Img from "../Components/img/undraw_Bus_stop_re_h8ej.png";


const Login = () => {
  return (
    <div>
      <div className="img">
        <img className="img-tag" src={Img} alt={Img} />
      </div>
      <div>
        <h3 className="Textaa">Login</h3>
      </div>
      <div className="Parent1">
        <form>
          <div class="form-group">
            <label>Phone number</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter phone number"
            />
            <small className="SmallText">Enter your phone number</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <small className="SmallText">Enter your password</small>
            <p>
              Don't have an account?{" "}
              <Link className="singuptxt" to="/signup">
                Sign up here
              </Link>
            </p>
          </div>
          <button type="submit" class="btn btn-success">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
