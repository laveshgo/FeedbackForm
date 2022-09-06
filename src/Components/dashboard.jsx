import React, { Component } from "react";
import Header from "./header";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, Navigate, Routes, Route, useNavigate } from "react-router-dom";
import "./dashboard.css";
import withRouter from "./withRouter.jsx";
import FillResponse from "./FillResponse";
import ViewResponses from "./ViewResponses.jsx";
import { Grid } from "@mui/material";
import DataService from "./api/DataService";

class Dashbaord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 4,
      formsCreatedByYou: [
        // { id: 1, description: "Form 1", status: "View" },
        // { id: 2, description: "Form 2", status: "View" },
        // { id: 3, description: "Form 3", status: "View" },
      ],
      formsForYou: [
        { id: 1, description: "Form 1", filled: true },
        { id: 2, description: "Form 2", filled: false },
        { id: 3, description: "Form 3", filled: true },
        { id: 4, description: "Form 4", filled: false },
      ],
    };
    this.fillResponse = this.fillResponse.bind(this);
  }

  // const navigate=useNavigate();

  fillResponse(param) {
    console.log(param);
    // this.navigate('/fill-response')

    // this.props.navigation.navigate('dashboard')

    // console.log("fill response clicked")
    // this.props.navigate("/fill-response");
  }

  componentDidMount(){
    DataService.dashboardCreatedByForms(this.user_id)
    .then()

  }

  // viewFormCreatedByYou(){
  //   DataService.dashboardCreatedByForms(this.state.user_id)
  //   .then(response => {

  //     console.log(response);
  //   })
  // }

  render() { 
    return (
      <>
        <Header />

        <Grid container style={{ paddingTop: "20px", alignItems: "center" }}>
          <Grid item xs={6} style={{ paddingLeft: "50px" }}>
            <h1>Hello User</h1>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: "50px" }}>
            <Button variant="primary" size="lg">
              <Link className="link" to={"/create-form?user_id=" + "5"}>
                Create a Form
              </Link>
            </Button>
          </Grid>
        </Grid>
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
                  <tr key={formByYou.id}>
                    <td>{formByYou.description}</td>
                    <td>
                      <Button
                        onClick={this.viewFormCreatedByYou}
                        variant="primary"
                        href={"./view-responses?form_id=" + formByYou.id}
                      >
                        {formByYou.status}
                      </Button>{" "}
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
                {this.state.formsForYou.map((formForYou, index) => {
                  return formForYou.filled ? (
                    <tr key={formForYou.id}>
                      <td>{formForYou.description}</td>
                      <td>
                        <Button
                          key={index}
                          variant="success"
                          onClick={() => this.fillResponse(formForYou)}
                          href={
                            "/your-responses?user_id=" +
                            formForYou.id +
                            "&form_id=" +
                            formForYou.id
                          }
                        >
                          View Response
                        </Button>{" "}
                      </td>
                    </tr>
                  ) : (
                    <tr key={formForYou.id}>
                      <td>{formForYou.description}</td>
                      <td>
                        <Button
                          key={index}
                          variant="primary"
                          onClick={() => this.fillResponse(formForYou)}
                          href={
                            "/fill-response?user_id=" +
                            formForYou.id +
                            "&form_id=" +
                            formForYou.id
                          }
                        >
                          Fill Response
                        </Button>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Dashbaord);
