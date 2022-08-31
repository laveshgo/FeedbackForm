import React, {Component} from 'react'
import Header from "./header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./createform.css";

class FillResponse extends Component {
render() {
return (
<div>
<div id="form-create">
        <Header />

        <div className="h1-div">
          <h1>Fill Form</h1>
        </div>
        <div className="form-details">
          <Form>

            <Form.Group className="mb-3">
              <Form.Label>Form Name</Form.Label>
                        {/* //Formname ayega yahan  */}
                    <Form.Label>QuestionQuestionQuestionQuestionQuestionQuestion</Form.Label>
                    <Form.Label>Options</Form.Label>


              <Form.Control
                name="form_name"
                required
                placeholder="Enter the option for the answer "
              />
            </Form.Group>

            <Button variant="primary">
              Submit
            </Button>
          </Form>
        </div>
      </div>
</div>

)
}
}
export  default FillResponse