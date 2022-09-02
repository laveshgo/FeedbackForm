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

function CreateForm() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState("text");
  const items = data;

  const addElement = () => {
    const initVal = formEl[0]?.value;

    const data = {
      id: uuid(),
      value: null,
      type: formData,
      optionss: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
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

  // const addOption = (id, newOption) => {
  //   let newArr = data.map((el) => {
  //     if (el.id === id) {
  //       const objVal = "options" in el ? el?.options : [];
  //       return { ...el, options: [...objVal, newOption] };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setData(newArr);
  // };

  const handleOptionValues = (elId, optionId, optionVal) => {
    let newArr = data.map((el) => {
      if (el.id === elId) {
        el?.optionss &&
          el?.optionss.map(function (opt) {
            return opt.id === optionId ? (opt.value = optionVal) : "";
          });
        return el;
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  // const deleteOption = (elId, optionId) => {
  //   let newArr = data.map((el) => {
  //     if (el.id === elId) {
  //       let newOptions =
  //         el?.options && el?.options.filter((opt) => opt.id !== optionId);
  //       return { ...el, options: newOptions };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setData(newArr);
  // };

  const handleOnChangeSort = ({ items }) => {
    setData(items);
  };

  const renderElements = ({ item }) => {
    switch (item.type) {
      case "text":
        return (
          <TextFieldInput
            item={item}
            handleValue={handleValue}
            deleteEl={deleteEl}
            handleElType={handleElType}
          />
        );
      case "radio":
        return (
          <RadioInput
            item={item}
            handleValue={handleValue}
            deleteEl={deleteEl}
            handleElType={handleElType}
            // addOption={addOption}
            handleOptionValues={handleOptionValues}
            // deleteOption={deleteOption}
          />
        );
      default:
        return <></>;
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    console.log(data);
  }

  return (
    <div id="form-create">
      <Header />
      <div className="h1-div">
        <h1>Create Form</h1>
      </div>
      {/* <div className="form-details"> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 ">
          <Form.Label>Your Name</Form.Label>
          <Form.Control required placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Form Name</Form.Label>
          <Form.Control required placeholder="Enter the name of the form " />
        </Form.Group>

        <Form.Group>
          <Grid container spacing={1} direction="row" justifyContent="center">
            <Grid item md={6}>
              <Nestable
                items={items}
                renderItem={renderElements}
                maxDepth={1}
                onChange={handleOnChangeSort}
              />
            </Grid>

            <Grid item md={1}>
              <Tooltip title="Add Element" aria-label="add-element">
                <IconButton
                  aria-label="add-element"
                  onClick={addElement}
                  sx={{ position: "sticky", top: 30 }}
                >
                  <AddCircleOutlineOutlined color="secondary" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Form.Group>
        <Button disabled={data.length < 1} variant="primary" type="submit">
          Proceed
        </Button>
      </Form>{" "}
      {/* </div> */}
    </div>
  );
}

export default CreateForm;
