import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";
import Logo from "../Images/Logo.png";
import withRouter from "./withRouter.jsx";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pass: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleUsernameChange=this.handleUsernameChange.bind(this)

    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    // console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // handleUsernameChange(event){
  //     this.setState({
  //         id:event.target.value
  //     })
  //     console.log(this.state)
  // }

  loginClicked() {
    if (this.state.id === "xyz@gmail.com" && this.state.pass === "xyz") {
      console.log(this.state);
      this.props.navigate("/dashboard");

      this.setState({ showSuccessMessage: true, hasLoginFailed: false });
    } else {
      this.setState({ hasLoginFailed: true, showSuccessMessage: false });
      console.log(this.state);
    }
  }

  render() {
    return (
      <>
        <div id="background"></div>
        <div className="float-container">
          <div className="float-child login-h1">
            <h1 className="login-h1-text">FEEDBACK FORM</h1>
          </div>
          <div className="float-child">
            <img alt="" src={Logo} width="40%" className="logo-login" />{" "}
            <ShowInvalidCredentials
              hasLoginFailed={this.state.hasLoginFailed}
            />
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                <Form>
                  <Form.Group id="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="id"
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="pass"
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Button className="w-100" onClick={this.loginClicked}>
                    Log In
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

function ShowInvalidCredentials(props) {
  if (props.hasLoginFailed)
    return <div className="alert alert-warning">Invalid Credentials</div>;
  else return null;
}

export default withRouter(Login);
