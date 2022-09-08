import { TextField } from "@mui/material";
import { Form } from "react-bootstrap";

const SubjectiveType = ({ ques, Answers, id, handleChange }) => {
  return (
    <>
      <Form.Group>
        <Form.Label>{ques}</Form.Label>
        <TextField
          value={Answers[id] ? Answers[id].responseText : ""}
          label="Enter Answer"
          onChange={(e) => handleChange(e.target.value, id)}
          fullWidth
          inputProps={{ maxLength: 240 }}
          sx={{ mb: 2 }}
        />
      </Form.Group>
    </>
  );
};

export default SubjectiveType;
