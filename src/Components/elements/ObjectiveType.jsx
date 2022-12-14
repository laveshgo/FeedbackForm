import { Form } from "react-bootstrap";

const ObjectiveType = ({ ques, answer, Answers, id, handleChange }) => {
  return (
    <>
      <Form.Group style={{ margin: "20px auto" }}>
        <Form.Label>
          {" "}
          <span style={{ fontWeight: "bold" }}>Question: </span> {ques}
        </Form.Label>{" "}
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => handleChange(e.target.value, id)}
        >
          <option>Open this select menu</option>
          {answer.map((opt, index) => {
            return (
              <option key={index} value={opt}>
                {opt}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
    </>
  );
};

export default ObjectiveType;
