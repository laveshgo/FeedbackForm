import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../Images/Logo.png";

const Login = () => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  console.log(id + pass);
  return (
    <>
      <div id="background"></div>
      <div className="float-container">
        <div className="float-child login-h1">
          <h1 className="login-h1-text">FEEDBACK FORM</h1>
        </div>
        <div className="float-child">
          <img alt="" src={Logo} width="40%"  className="logo-login"/>{" "}
          <Form className="login-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" href="./dashboard">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
