import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <h3 className="Textaa">Login</h3>
      </div>
      <form>
        <div class="form-group">
          <label >Email address</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
          />
          <small className="SmallText">
            Enter your phone number
          </small>
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
        </div>
        <button type="submit" class="btn btn-light">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
