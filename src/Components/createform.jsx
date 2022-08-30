import React, { Component } from "react";
import Header from "./header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./createform.css";

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      form_name: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  ProceedClicked() {
    console.log("I am Clicked");
  }

  render() {
    return (
      <div id="form-create">
        <Header />

        <div className="h1-div">
          <h1>Create Form</h1>
        </div>

        <div className="form-details">
          <Form>
            <Form.Group className="mb-3 ">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                name="name"
                onChange={this.handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Form Name</Form.Label>
              <Form.Control
                name="form_name"
                onChange={this.handleChange}
                required
                placeholder="Enter the name of the form "
              />
            </Form.Group>

            <Button variant="primary" onClick={this.ProceedClicked}>
              Proceed
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default CreateForm;
