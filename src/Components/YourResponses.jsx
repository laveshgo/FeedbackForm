import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./header";
import useQuery from "./useQuery";
import axios from "axios";

function YourResponses() {
  const query = useQuery();
  const user_id = query.get("user_id") || "";
  const form_id = query.get("form_id") || "";

  // const url1 =
  //   "/viewresponse?response_id=65";

  // const [Questions, setQuestions] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(url1)
  //     .then((response) => {
  //       setQuestions(response.data);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });

  // }, [url1]);

  // if (error) return `Error: ${error.message}`;

  // if (!Questions ) return null;

  let Questions = [
    {
      question_id: 59,
      answer: "Motam Shiva Teja",
      options: [],
      questionType: "SUBJECTIVE",
      questionText: "What is your name?",
    },
    {
      question_id: 60,
      answer: "Dhanush",
      options: [],
      questionType: "SUBJECTIVE",
      questionText: "What is your Supervisor's Name?",
    },
    {
      question_id: 61,
      answer: "Slightly",
      options: ["Not at all", "Slightly", "Moderately", "Extremely"],
      questionType: "OBJECTIVE",
      questionText: "Do you prefer working at the office instead??",
    },
    {
      question_id: 62,
      answer: "Not at all",
      options: ["Not at all", "Slightly", "Moderately", "Extremely"],
      questionType: "OBJECTIVE",
      questionText: "Do you recommend remote working to your friends?",
    },
    {
      question_id: 63,
      answer: "Moderately",
      options: ["Not at all", "Slightly", "Moderately", "Extremely"],
      questionType: "OBJECTIVE",
      questionText: "Do you think remote working has affected you positively?",
    },
    {
      question_id: 64,
      answer: "1 year",
      options: [
        "Less than 1 month",
        "1-6 months",
        "1 year",
        "More than 1 year",
      ],
      questionType: "OBJECTIVE",
      questionText: "How long do you work remotely?",
    },
  ];

  return (
    <>
      {console.log("userID = " + user_id + " formID = " + form_id)}
      {console.log(Questions)}
      <div id="form-create">
        <Header />
        <div className="h1-div">
          <h1>Your Responses</h1>
        </div>

        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          style={{ paddingBottom: "100px" }}
        >
          {Questions.map((que) => {
            if (que.questionType === "SUBJECTIVE")
              return (
                <Grid item md={8} key={que.id}>
                  <Paper elevation={1}>
                    <Box sx={{ p: 3 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={9}>
                          <p>
                            <span style={{ fontWeight: "bold" }}>
                              Question:{" "}
                            </span>
                            {que.questionText}
                          </p>
                          <Box sx={{ display: "flex" }}>
                            <p>
                              <span style={{ fontWeight: "bold" }}>
                                Answer:{" "}
                              </span>
                              {que.answer}
                            </p>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </Grid>
              );
            else
              return (
                <Grid item md={8} key={que.id}>
                  <Paper elevation={1}>
                    <Box sx={{ p: 3 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={9}>
                          <p>
                            <span style={{ fontWeight: "bold" }}>
                              Question:{" "}
                            </span>
                            {que.questionText}
                          </p>
                          <Box sx={{ display: "flex" }}>
                            <span style={{ fontWeight: "bold" }}>Answer: </span>

                            <ul>
                              {que.options.map((item) => {
                                if (item === que.answer)
                                  return (
                                    <p key={item.id}>
                                      <RadioButtonChecked /> {item}
                                    </p>
                                  );
                                else
                                  return (
                                    <p key={item.id}>
                                      <RadioButtonUnchecked /> {item}
                                    </p>
                                  );
                              })}
                            </ul>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </Grid>
              );
          })}
        </Grid>
      </div>
    </>
  );
}
export default YourResponses;
