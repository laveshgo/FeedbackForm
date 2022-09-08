import React, { Component } from "react";
import Header from "./header";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./dashboard.css";
import withRouter from "./withRouter.jsx";
import { Grid } from "@mui/material";
import DataService from "./api/DataService";

class Dashbaord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.params.userid,
      createdByUser: [],
      filledByUser: [],
      notFilledByUser: [],
    };
  }

  componentDidMount() {
    this.refreshPage();
  }

  refreshPage() {
    DataService.dashboardCreatedByForms(this.state.user_id).then((response) => {
      this.setState({
        createdByUser: response.data.createdByUser,
        notFilledByUser: response.data.notFilledByUser,
        filledByUser: response.data.filledByUser,
      });
    });
  }

  render() {
    return (
      <>
        <Header user_id={this.state.user_id} />

        <Grid container style={{ paddingTop: "20px", alignItems: "center" }}>
          <Grid item xs={6} style={{ paddingLeft: "20px" }}>
            <h1>Hello User </h1>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: "20px" }}>
            <Button variant="primary" size="lg">
              <Link
                className="link"
                to={"/create-form?user_id=" + this.state.user_id}
              >
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
                  <th style={{ width: "70%" }}>Form Name</th>
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
                        href={
                          "/viewreport?form_id=" +
                          formByYou.id +
                          "&user_id=" +
                          this.state.user_id
                        }
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
                  <th style={{ width: "70%" }}>Filled Form Name</th>
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
                        href={
                          "/your-responses?response_id=" +
                          formByYou.id +
                          "&user_id=" +
                          this.state.user_id
                        }
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
                  <th style={{ width: "70%" }}>Pending Form Name</th>
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
