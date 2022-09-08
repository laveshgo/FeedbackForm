import React, { useState, useEffect, useCallback } from "react";
import Header from "./header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import useQuery from "./useQuery";
import axios from "axios";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SubjectiveType from "./elements/SubjectiveType";
import ObjectiveType from "./elements/ObjectiveType";

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

  const [Answers, setAnswers] = useState({});

  const handleChange = useCallback(
    (value, id) => {
      setAnswers({
        ...Answers,
        [id]: { id: id, responseText : value },
      });
    },
    [Answers]
  );

  const navigate = useNavigate();

  const posturl = "/submitform?user_id=" + user_id + "&form_id=" + form_id;

  // const posturl ="https://6312412eb466aa9b0387361b.mockapi.io/report"
  
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(posturl, {
        questionAnswers: Object.values(Answers),
      })
      .then((res) => {
        console.log(res.data);
      });
    navigate("/dashboard/" + user_id);
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
                  <SubjectiveType
                    key={index}
                    ques={que.text}
                    Answers={Answers}
                    id={que.id}
                    handleChange={handleChange}
                  />
                );
              else
                return (
                  <ObjectiveType
                    key={index}
                    ques={que.text}
                    answer={que.answers}
                    Answers={Answers}
                    id={que.id}
                    handleChange={handleChange}
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
