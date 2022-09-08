import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header from "./header";
import useQuery from "./useQuery";

function ViewResponses() {
  const query = useQuery();
  const form_id = query.get("form_id") || "";
  const user_id = query.get("user_id") || "";

  const url1 = "/viewreport?form_id=" + form_id;

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

  if (error) return `Error: ${error.message}`;

  if (!data) return null;

  return (
    <div>
      <div id="form-create">
        <Header user_id={user_id} />
        <div className="h1-div">
          <h1>View Form Results</h1>
        </div>

        <Table striped hover bordered style={{ width: "50%", margin: "auto" }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Numbers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Users</td>
              <td>{data.allUser}</td>
            </tr>
            <tr>
              <td>Filled By</td>
              <td>{data.respondedUser}</td>
            </tr>
            <tr>
              <td>Remaining Users</td>
              <td>{data.allUser - data.respondedUser}</td>
            </tr>
          </tbody>
        </Table>

        <div className="accordion-style">
          {data.sendResponse.map((el, index) => {
            return (
              <Accordion key={index} style={{ marginBottom: "20px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ width: "75%", flexShrink: 0 }}>
                    <span style={{ fontWeight: "bold" }}>Submitted By: </span>
                    {el.name}{" "}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    Expand to see Response
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {el.questionAnswers.map((e, index) => {
                    return (
                      <Grid key={index} item md={8}>
                        <Paper
                          elevation={1}
                          style={{
                            marginBottom: "10px",
                          }}
                        >
                          <Box sx={{ p: 3 }}>
                            <Grid container spacing={1}>
                              <Grid item>
                                <p>
                                  {" "}
                                  <span style={{ fontWeight: "bold" }}>
                                    Question:{" "}
                                  </span>
                                  {e.question}
                                </p>
                                <Box sx={{ display: "flex" }}>
                                  <p>
                                    {" "}
                                    <span style={{ fontWeight: "bold" }}>
                                      Answer:{" "}
                                    </span>
                                    {e.answer}
                                  </p>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Paper>
                      </Grid>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ViewResponses;
