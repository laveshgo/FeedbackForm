import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";
import Logo from "../Images/Logo.png";
import withRouter from "./withRouter.jsx";
import "./Login.css";
import AuthenticationService from "./AuthenticationService.js";
import DataService from "./api/DataService";
import usePagination from "@mui/material/usePagination/usePagination";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pass: "",
      user_id: -1,
      email: "",
      allUsers:[],
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {

    // Niche wale DataService.allUsers wale api se response 
    // aya which is al users ka database.
    // maine us response k saare email id ka alag array bnaya
    // and ids ka alag and map krke equate ki condition se
    // "ind" variable mei index store krlia id ka
    // fir jo login wale input mei email id enter hui hai uspe
// condition lagayi and agar vo dono equal hain toh success method 
// call krdia with a parameter. Ab vo paramater hume dashboard
// mei jake dashboard k state k variable mei store krlena hai
// jahan maine hard code krke 4 set kia hua hai
// Baaki sab sahi chalra hai

    

    DataService.allUsers()
    .then((response)=>{
      console.log(response.data);
      // this.setState({allUsers:response.data})
      // console.log(this.state.allUsers);

    const one=response.data.map(item =>item.email)
    const two =response.data.map(item=> item.id)
    var ind;
    one.forEach((value,i)=>{
    if (value === this.state.id){
    ind=i;
  // this.setState({user_id:response.data[i].id})
        }
    })
    // console.log(ind);
    // console.log(one[ind]);
    // console.log(two[ind]);

    if (this.state.id === one[ind]) {
      // console.log(one[ind]);
      AuthenticationService.registerSuccessfulLogin(this.state.id,this.state.pass)

      this.success(two[ind])

    }
    else {
      console.log("failed");
      this.setState({ hasLoginFailed: true, showSuccessMessage: false });
    }
    // this.setState({user_id:two[ind]})
    // this.setState({user_id: response.data[ind]})
    // console.log(this.state.user_id);
    // this.setState({user_id:response.data[ind].id})
    // console.log(this.state.user_id);
    })


    // if (this.state.id === "srishtitoora@gmail.com" && this.state.pass === "xyz") {
    //   console.log(this.state);
    //   AuthenticationService.registerSuccessfulLogin(this.state.id,this.state.pass)
    //   this.props.navigate("/dashboard");

    //   this.setState({ showSuccessMessage: true, hasLoginFailed: false });
    // } else {
    //   this.setState({ hasLoginFailed: true, showSuccessMessage: false });
    //   console.log(this.state);
    // }

  }

  success(user_id){
this.props.navigate(`/dashboard/${user_id}`);

// this.setState({user_id:p})
// console.log(this.state.user_id);
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
