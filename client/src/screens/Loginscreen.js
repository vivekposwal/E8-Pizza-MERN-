import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import pic from "./pizzalogin.jpg";
import "./loginScreen.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginState;
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };
  return (
    <div className="ls">
      <Container style={{ marginTop: "50px" }}>
        <Form
          style={{ margin: "auto", width: "40%" }}
          className="shadow-lg p-3 mb-5 bg-white rounded   "
        >
          <h3 style={{ textAlign: "center" }}>LOGIN</h3>
          {loading && <Loading />}
          {error && <Error error="Invalid credentials" />}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className="mb-3" variant="primary" onClick={loginHandler}>
            Login
          </Button>
          <br />
          <a style={{ color: "black" }} href="/register">
            Click here to register
          </a>
        </Form>
      </Container>
    </div>
  );
};
export default Login;
