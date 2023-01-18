import { useNavigate } from "react-router-dom";

import { API_URL } from "../Constants";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/auth/admin`, {
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
