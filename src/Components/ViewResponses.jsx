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
import Header from "./header";
import useQuery from "./useQuery";

function ViewResponses() {
  const query = useQuery();
  const form_id = query.get("form_id") || "";
  // const url1 = "https://6312412eb466aa9b0387361b.mockapi.io/report";

  const url1 = "/viewreport?form_id="+form_id;

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
        <Header />
        <div className="h1-div">
          <h1>View Form Results</h1>
        </div>

        <div className="accordion-style">
          {data.sendResponse.map((el) => {
            return (
              <Accordion style={{ marginBottom: "20px" }}>
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
                  {el.questionAnswers.map((e) => {
                    return (
                      <Grid item md={8}>
                        <Paper
                          elevation={1}
                          style={{
                            // border: "2px solid #ef2a26",
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
