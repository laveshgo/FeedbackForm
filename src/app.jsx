import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginComponent from "./Components/Login.jsx";

import Dashbaord from "./Components/dashboard";
import CreateForm from "./Components/createform";

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
          </Routes>
        </>
      </Router>
    );
  }
}
export default App;
