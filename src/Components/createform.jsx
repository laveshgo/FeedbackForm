import Header from "./header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function CreateForm() {
  return (
    <div id="form-create">
      <Header />

      <div className="h1-div">
        <h1>Create Form</h1>
      </div>
      <div className="form-details">
        <Form>
          <Form.Group className="mb-3 " >
            <Form.Label>Your Name</Form.Label>
            <Form.Control placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Form Name</Form.Label>
            <Form.Control placeholder="Enter the name of the form " />
          </Form.Group>

          <Button variant="primary" type="submit">
            Proceed
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateForm;
