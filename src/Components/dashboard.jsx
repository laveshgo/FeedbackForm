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
import { ContactSupport, ThirtyFpsSelect } from "@mui/icons-material";

class Dashbaord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.params.userid,
      createdByUser: [],
      filledByUser: [],

      notFilledByUser: [],
    };
    this.fillResponse = this.fillResponse.bind(this);
    this.viewFormCreatedByUser = this.viewFormCreatedByUser.bind(this);
  }

  
  fillResponse(param) {
    // console.log(param);
  }

  componentDidMount() {
    this.refreshPage();

  }

  refreshPage() {

    DataService.dashboardCreatedByForms(this.state.user_id).then((response) => {
      console.log(response.data);
      this.setState({
        createdByUser: response.data.createdByUser,
        notFilledByUser: response.data.notFilledByUser,
        filledByUser: response.data.filledByUser,
      });
      console.log(this.state);
    });
  }

  viewFormCreatedByUser(form_id) {
    // make an api request for view report of single form with the help of form_id
    // and navigate it to another page
    console.log(form_id);
  }

  viewPendingForm(form_id) {
    // make an api request for filling response with the help of form_id
    // and navigate it to another page
    console.log(form_id);
  }

  // viewResponse(response_id){
  //   // make an api request for viewing response with the help of form_id
  //     // and navigate it to another page
  //     console.log(form_id);
  // }

  render() {
    return (
      <>
        <Header />

        <Grid container style={{ paddingTop: "20px", alignItems: "center" }}>
          <Grid item xs={6} style={{ paddingLeft: "50px" }}>
            <h1>Hello User </h1>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: "50px" }}>
            <Button variant="primary" size="lg">
              <Link className="link" to={"/create-form?user_id=" + this.state.user_id}>
                Create a Form
              </Link>
            </Button>
          </Grid>
        </Grid>
        <div>
          <div className="float-child">
            <h2>Forms Created by You {this.props.params.user_id}</h2>
            <hr className="hr-css" />

            <Table striped hover>
              <thead>
                <tr>
                  <th>Form Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.createdByUser.map((formByYou) => (
                  <tr key={formByYou.id}>
                    <td>{formByYou.name}</td>
                    <td>
                      <Button
                        variant="primary"
                        href={"/viewreport?form_id=" + formByYou.id}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <div className="float-child">
            <h2>Forms for You</h2>
            <hr className="hr-css" />

            <Table striped hover>
              <thead>
                <tr>
                  <th>Filled Form Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.filledByUser.map((formByYou) => (
                  <tr key={formByYou.id}>
                    <td>{formByYou.name}</td>
                    <td>
                      <Button
                        variant="primary"
                        href={"/your-responses?response_id=" + formByYou.id}
                      >
                        View Response
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Table striped hover>
              <thead>
                <tr>
                  <th>Pending Form Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.notFilledByUser.map((formByYou) => (
                  <tr key={formByYou.id}>
                    <td>{formByYou.name}</td>
                    <td>
                      <Button
                        variant="primary"
                        href={
                          "/fill-response?user_id=" +
                          this.state.user_id +
                          "&form_id=" +
                          formByYou.id
                        }
                      >
                        Fill Response
                      </Button>
                    </td>
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
