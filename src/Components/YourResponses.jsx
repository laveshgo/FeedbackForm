import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import Header from "./header";
import useQuery from "./useQuery";

function YourResponses() {
  const query = useQuery();
  const user_id = query.get("user_id") || "";
  const form_id = query.get("form_id") || "";

  let Questions = [
    {
      id: "d61033d-e548-2bde-633-74f0b42a2ae",
      value: "Question 1",
      type: "text",
    },
    {
      id: "7167b4a-f703-1024-3a22-a2dbcb7db53b",
      value: "Question 2",
      type: "radio",
      options: [
        {
          id: "1",
          value: "Option 1",
        },
        {
          id: "2",
          value: "Option 2",
        },
        {
          id: "3",
          value: "Option 3",
        },
        {
          id: "4",
          value: "Option 4",
        },
      ],
    },
  ];
  let Answers = [
    {
      id: "d61033d-e548-2bde-633-74f0b42a2ae",
      answer: "This is a answer",
    },
    {
      id: "7167b4a-f703-1024-3a22-a2dbcb7db53b",
      answer: "3",
    },
  ];

  function LookAnswer(id) {
    let ans = Answers.find((ans) => {
      return ans.id === id;
    });
    return ans.answer;
  }

  return (
    <>
      {console.log("userID = " + user_id + " formID = " + form_id)}
      <div id="form-create">
        <Header />
        <div className="h1-div">
          <h1>Your Responses</h1>
        </div>

        <Grid container spacing={1} direction="row" justifyContent="center">
          {Questions.map((que) => {
            if (que.type === "text")
              return (
                <Grid item md={8} key={que.id}>
                  <Paper elevation={1}>
                    <Box sx={{ p: 3 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={9}>
                          <p>{que.value}</p>
                          <Box sx={{ display: "flex" }}>
                            <p>{LookAnswer(que.id)}</p>
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
                          <p>{que.value}</p>
                          <Box sx={{ display: "flex" }}>
                            <ul>
                              {que.options.map((item) => {
                                let ans = LookAnswer(que.id);
                                if (item.id === ans)
                                  return (
                                    <p key={item.id}>
                                      <RadioButtonChecked /> {item.value}
                                    </p>
                                  );
                                else
                                  return (
                                    <p key={item.id}>
                                      <RadioButtonUnchecked /> {item.value}
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
