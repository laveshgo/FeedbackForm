import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginComponent from "./Components/Login.jsx";
import FillResponse from './Components/FillResponse'
import Dashbaord from "./Components/dashboard";
import CreateForm from "./Components/createform";
import ViewResponses from './Components/ViewResponses.jsx'


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Routes>
            <Route exact path="/login" element={<LoginComponent />} />
            <Route exact path="/dashboard" element={<Dashbaord />} />
            <Route exact path="/create-form" element={<CreateForm />} />
            <Route exact path="/" element={<Navigate replace to="/login" />} />
            <Route exact path="/fill-response" element={<FillResponse/>} />
            <Route exact path="/view-responses" element={<ViewResponses/>} />


          </Routes>
        </>
      </Router>
    );
  }
}
export default App;
