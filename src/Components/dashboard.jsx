import React, { Component } from "react";
import Header from "./header";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {  Link, Navigate , Routes,Route,useNavigate} from "react-router-dom";
import "./dashboard.css";
import withRouter from "./withRouter.jsx";
import FillResponse from "./FillResponse";
import ViewResponses from './ViewResponses.jsx'


class Dashbaord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formsCreatedByYou: [
        { id: 1, description: "Form 1", status: "View" },
        { id: 2, description: "Form 2", status: "View" },
        { id: 3, description: "Form 3", status: "View" },
      ],
      formsForYou: [
        { id: 1, description: "Form 1", status: "Fill Response" },
        { id: 2, description: "Form 2", status: "Fill Response" },
        { id: 3, description: "Form 3", status: "Fill Response" },
        { id: 4, description: "Form 3", status: "Fill Response" }
      ],
    };
    this.fillResponse=this.fillResponse.bind(this)
  }

  // const navigate=useNavigate();

  fillResponse(param){
    console.log(param)
    // this.navigate('/fill-response')

    // this.props.navigation.navigate('dashboard')

    // console.log("fill response clicked")
    // this.props.navigate("/fill-response");
  }

  render() {
    return (
      <>
        <Header />

        <div>
          <h1>Hello User</h1>
          <Button variant="primary">
            <Link className="link" to="/create-form">
              Create a Form
            </Link>
          </Button>
        </div>
        <div>
          <div className="float-child">
            <h2>Forms Created by You</h2>
            <hr className="hr-css" />

            <Table striped hover>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.formsCreatedByYou.map((formByYou) => (
                  <tr>
                    <td>{formByYou.description}</td>
                    <td>
                      <Button variant="primary" href='./view-responses'>{formByYou.status}</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="float-child">
            <h2>Forms for You</h2>
            <hr className="hr-css" />

            <Table striped>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.formsForYou.map((formForYou,index) => (
                  <tr>
                    <td>{formForYou.description}</td>
                    <td>
                      <Button key={index} variant="primary" onClick={()=>this.fillResponse(formForYou)} href="/fill-response" >{formForYou.status}</Button>
                    </td>
                    {/* <td>
                      <ul>
                        <li key={key}>{formForYou.id}</li>
                      </ul>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Dashbaord);
