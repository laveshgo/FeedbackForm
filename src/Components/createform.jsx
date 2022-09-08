import React, { useState } from "react";
import Header from "./header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./createform.css";
import { Grid, IconButton, Tooltip } from "@mui/material";
import Nestable from "react-nestable";
import uuid from "react-uuid";
import TextFieldInput from "./elements/TextField";
import RadioInput from "./elements/Radioinput";
import { formEl } from "./constants";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import useQuery from "./useQuery";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const query = useQuery();
  const user_id = query.get("user_id") || "";

  const url = "/createform?id=" + user_id;

  const [formName, setFormName] = useState("");
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState("SUBJECTIVE");
  const items = data;
  const postData = [];
  const addElement = () => {
    const initVal = formEl[0]?.value;

    const data = {
      id: uuid(),
      value: "",
      type: formData,
      options: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    };
    setData((prevState) => [...prevState, data]);
    setFormData(initVal);
  };

  const handleValue = (id, e) => {
    let newArr = data.map((el) => {
      if (el.id === id) {
        return { ...el, value: e.target.value };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  const deleteEl = (id) => {
    setData((prevState) => prevState.filter((val) => val.id !== id));
  };

  const handleElType = (id, type) => {
    let newArr = data.map((el) => {
      if (el.id === id) {
        return { ...el, type: type };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  const handleOptionValues = (elId, optionId, optionVal) => {
    let newArr = data.map((el) => {
      if (el.id === elId) {
        el?.options &&
          el?.options.map(function (opt) {
            return opt.id === optionId ? (opt.value = optionVal) : "";
          });
        return el;
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  const handleOnChangeSort = ({ items }) => {
    setData(items);
  };

  const renderElements = ({ item }) => {
    switch (item.type) {
      case "SUBJECTIVE":
        return (
          <TextFieldInput
            item={item}
            handleValue={handleValue}
            deleteEl={deleteEl}
            handleElType={handleElType}
          />
        );
      case "OBJECTIVE":
        return (
          <RadioInput
            item={item}
            handleValue={handleValue}
            deleteEl={deleteEl}
            handleElType={handleElType}
            handleOptionValues={handleOptionValues}
          />
        );
      default:
        return <></>;
    }
  };
  const navigate = useNavigate();

  const passData = () => {
    data.map((d) => {
      return postData.push({
        text: d.value,
        question_type: d.type,
        answers: [
          d.options[0].value,
          d.options[1].value,
          d.options[2].value,
          d.options[3].value,
        ],
      });
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    passData();

    axios
      .post(url, {
        name: formName,
        questions: postData,
      })
      .then((res) => {
        console.log(res.data);
      });

    navigate("/dashboard/="+user_id);
  }

  return (
    <div id="form-create">
      <Header />
      <div className="h1-div">
        <h1>Create Form</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <div className="form-details">
          <Form.Group className="mb-3 ">
            <Form.Label>Form Name</Form.Label>
            <Form.Control
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              required
              placeholder="Enter name"
            />
          </Form.Group>

          {data.length < 1 ? (
            <Button onClick={addElement}>Add Questions</Button>
          ) : (
            <></>
          )}
        </div>
        <Form.Group required>
          <Grid container spacing={1} direction="row" justifyContent="center">
            <Grid item md={6}>
              <Nestable
                items={items}
                renderItem={renderElements}
                maxDepth={1}
                onChange={handleOnChangeSort}
              />
            </Grid>

            <Grid item>
              <Tooltip title="Add Element" aria-label="add-element">
                {data.length > 0 ? (
                  <IconButton
                    aria-label="add-element"
                    onClick={addElement}
                    sx={{ position: "sticky", top: 30 }}
                  >
                    <AddCircleOutlineOutlined color="secondary" />
                  </IconButton>
                ) : (
                  <></>
                )}
              </Tooltip>
            </Grid>
          </Grid>
        </Form.Group>
        <div className="form-details">
          <Button disabled={data.length < 1} variant="primary" type="submit">
            Proceed
          </Button>
        </div>
      </Form>{" "}
    </div>
  );
}

export default CreateForm;
