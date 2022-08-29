import React from "react";
import Header from "./header";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Dashbaord = () => {
  return (
    <>
      <Header />

      <div className="hello">
      <h1 >Hello User</h1>
      <Button variant="primary" href="create-form">Create a Form</Button>
        </div>
      <div>
        <div className="float-child">
          <h2>Forms Created by You</h2>
          <hr className="hr-css" />

          <Table striped hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>
                  <Button variant="primary">View</Button>
                </td>
              </tr>{" "}
              <tr>
                <td>Mark</td>
                <td>
                  <Button variant="primary">View</Button>
                </td>
              </tr>{" "}
              <tr>
                <td>Mark</td>
                <td>
                  <Button variant="primary">View</Button>
                </td>
              </tr>
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
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>
                  <Button variant="primary">Fill Response</Button>
                </td>
              </tr>{" "}
              <tr>
                <td>Mark</td>
                <td>
                  <Button variant="primary">Fill Response</Button>
                </td>
              </tr>{" "}
              <tr>
                <td>Mark</td>
                <td>
                  <Button variant="primary">Fill Response</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Dashbaord;
