import { TextField } from "@mui/material";
import { Form } from "react-bootstrap";

const SubjectiveType = ({ ques, Answers, id, handleChange }) => {
  return (
    <>
      <Form.Group style={{ margin: "20px auto" }}>
        <Form.Label>
          {" "}
          <span style={{ fontWeight: "bold" }}>Question: </span> {ques}
        </Form.Label>
        <TextField
          value={Answers[id] ? Answers[id].responseText : ""}
          label="Enter Answer"
          required
          variant="filled"
          onChange={(e) => handleChange(e.target.value, id)}
          fullWidth
          multiline
          inputProps={{ maxLength: 1000 }}
          sx={{ mb: 2, backgroundColor: "white" }}
        />
      </Form.Group>
    </>
  );
};

export default SubjectiveType;
