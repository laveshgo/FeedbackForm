import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginComponent from "./Components/Login.jsx";
import FillResponse from "./Components/FillResponse";
import Dashbaord from "./Components/dashboard";
import CreateForm from "./Components/createform";
import ViewResponses from "./Components/ViewResponses.jsx";
import YourResponses from "./Components/YourResponses.jsx";
import AuthenticationService from "./Components/AuthenticationService.js";
import AuthenticatedRoute from "./Components/AuthenticatedRoute.jsx";
import withParams from "./Components/withParams.jsx";

class App extends Component {

  render() {    const DashboardWithParams = withParams(Dashbaord);


    return (
      <Router>
        <>
          <Routes>
            <Route exact path="/login" element={<LoginComponent />} />
            <Route exact path="/dashboard/:userid" element={<AuthenticatedRoute><DashboardWithParams /></AuthenticatedRoute>} />
            <Route exact path="/create-form" element={<AuthenticatedRoute><CreateForm /></AuthenticatedRoute>} />
            <Route exact path="/fill-response" element={<AuthenticatedRoute><FillResponse /></AuthenticatedRoute>} />
            <Route exact path="/viewreport" element={<AuthenticatedRoute><ViewResponses /></AuthenticatedRoute>} />
            <Route exact path="/your-responses" element={<AuthenticatedRoute><YourResponses /></AuthenticatedRoute>} />
            <Route exact path="/" element={<Navigate replace to="/login" />} />
          </Routes>
        </>
      </Router>
    );
  }
}
export default App;
