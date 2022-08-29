import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Dashbaord from "./Components/dashboard";
import Login from "./Components/Login";
import CreateForm from "./Components/createform";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashbaord />} />
        <Route exact path="/create-form" element={<CreateForm />} />
        <Route exact path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
