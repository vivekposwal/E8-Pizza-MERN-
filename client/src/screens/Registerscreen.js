import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userActions";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Success from "../components/Success";
import Loading from "../components/Loading";
import "./loginScreen.css";
const Registerscreen = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;
  const dispatch = useDispatch();

  function register() {
    if (password !== cpassword) {
      alert("passwords not matched");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }
  return (
    <div className="ls">
      <div
        className="row  shadow-lg p-3 mb-7 bg-white rounded"
        style={{ margin: "auto", width: "40%" }}
      >
        <div>
          {loading && <Loading />}
          {success && <Success success="User Registered Successfully" />}
          {error && <Error error="something went wrong" />}
          <h1 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h1>
          <div>
            <input
              required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => setcpassword(e.target.value)}
            />
            <button onClick={register} className="btn mt-3 mb-3 ">
              REGISTER
            </button>
            <br />
            <a style={{ color: "black" }} href="/login">
              Click here to login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerscreen;
