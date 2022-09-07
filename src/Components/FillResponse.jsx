import React, { useState, useEffect } from "react";
import Header from "./header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import useQuery from "./useQuery";
import axios from "axios";
import { TextField } from "@mui/material";

function FillResponse() {
  const query = useQuery();
  const form_id = query.get("form_id") || "";
  const user_id = query.get("user_id") || "";

  const url1 = "/fillresponse?form_id=" + form_id;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url1)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url1]);

  // const data = {
  //   name: "Remote Life Survey",
  //   questions: [
  //     {
  //       id: 59,
  //       text: "What is your name?",
  //       questionType: "SUBJECTIVE",
  //       answers: [],
  //       createdAt: "2022-09-05",
  //     },
  //     {
  //       id: 60,
  //       text: "What is your Supervisor's Name?",
  //       questionType: "SUBJECTIVE",
  //       answers: [],
  //       createdAt: "2022-09-05",
  //     },
  //     {
  //       id: 61,
  //       text: "Do you prefer working at the office instead??",
  //       questionType: "OBJECTIVE",
  //       answers: ["Not at all", "Slightly", "Moderately", "Extremely"],
  //       createdAt: "2022-09-05",
  //     },
  //     {
  //       id: 62,
  //       text: "Do you recommend remote working to your friends?",
  //       questionType: "OBJECTIVE",
  //       answers: ["Not at all", "Slightly", "Moderately", "Extremely"],
  //       createdAt: "2022-09-05",
  //     },
  //     {
  //       id: 63,
  //       text: "Do you think remote working has affected you positively?",
  //       questionType: "OBJECTIVE",
  //       answers: ["Not at all", "Slightly", "Moderately", "Extremely"],
  //       createdAt: "2022-09-05",
  //     },
  //     {
  //       id: 64,
  //       text: "How long do you work remotely?",
  //       questionType: "OBJECTIVE",
  //       answers: [
  //         "Less than 1 month",
  //         "1-6 months",
  //         "1 year",
  //         "More than 1 year",
  //       ],
  //       createdAt: "2022-09-05",
  //     },
  //   ],
  // };
  const [Answers, setAnswers] = useState([]);

  const handleSubjectiveChange = (qid, e) => {
    let newArr = Answers.map((el) => {
      if (el.id === qid) {
        return { ...el, value: e.target.value };
      } else {
        return el;
      }
    });
    setAnswers(newArr);
  };
  const addElement = (qid) => {
    Answers.push({ id: qid, value: "" });
  };

  function SubjectiveType(props) {
    addElement(props.id);
    return (
      <Form.Group>
        <Form.Label>{props.value}</Form.Label>

        <TextField
          value={Answers[props.index].value}
          label="Enter Question"
          onChange={(e) => handleSubjectiveChange(props.id, e)}
          fullWidth
          sx={{ mb: 2 }}
        />
      </Form.Group>
    );
  }
  function ObjectiveType(props) {
    addElement(props.id);
    return (
      <Form.Group>
        <Form.Label className="questionData">{props.value}</Form.Label>

        {props.options.map((opt) => {
          return (
            <Form.Label className="form-control">
              <Form.Check inline label={opt} name="group1" type="radio" />
            </Form.Label>
          );
        })}
      </Form.Group>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  if (error) return `Error: ${error.message}`;

  if (!data) return null;
  return (
    <div>
      <div id="form-create">
        <Header />
        <div className="h1-div">
          <h1>Fill Form</h1>
        </div>
        <div className="form-details">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <h3>{data.name}</h3>
            </Form.Group>
            {data.questions.map((que, index) => {
              if (que.quetionType === "SUBJECTIVE")
                return (
                  <SubjectiveType index={index} value={que.text} id={que.id} />
                );
              else
                return (
                  <ObjectiveType
                    value={que.text}
                    key={que.id}
                    id={que.id}
                    options={que.answers}
                  />
                );
            })}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default FillResponse;
