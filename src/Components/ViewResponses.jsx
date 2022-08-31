import React, {Component} from 'react'
import Header from "./header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./createform.css";

class ViewResponses extends Component {
render() {
return (
<div>
<div id="form-create">
        <Header />

        <div className="h1-div">
          <h1>View Form Results</h1>
        </div>
        <div className="form-details">
          <Form>

            <Form.Group className="mb-3">
              <label>Form Name</label>
                        {/* //Formname ayega yahan  */}
                    <label>QuestionQuestionQuestionQuestionQuestionQuestion</label>
                    <label>Options and the percentage people answered that option.</label>


              {/* <Form.Control
                name="form_name"
                required
                placeholder="Enter the option for the answer "
              /> */}
            </Form.Group>

            {/* <Button variant="primary">
              Submit
            </Button> */}
          </Form>
        </div>
      </div>
</div>

)
}
}
export  default ViewResponses