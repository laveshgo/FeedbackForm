import {
  AddCircleOutlineOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";

import { formEl } from "../constants";

const TextFieldInput = ({
  item,
  handleValue,
  deleteEl,
  handleElType,
  addElement,
  isLast,
}) => {
  return (
    <>
      <Grid container>
        <Grid item md={11}>
          <Paper elevation={1} style={{ marginBottom: "10px" }}>
            <Box sx={{ p: 3 }}>
              <Grid container spacing={1}>
                <Grid item xs={9}>
                  <TextField
                    value={item.value}
                    label="Enter Question"
                    onChange={(e) => handleValue(item.id, e)}
                    fullWidth
                    multiline
                    inputProps={{ maxLength: 240 }}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <FormControl fullWidth>
                    <InputLabel id="el-type-label">Type</InputLabel>
                    <Select
                      labelId="el-type-label"
                      id="el-type"
                      label="Type"
                      value={item.type}
                      onChange={(e) => handleElType(item.id, e.target.value)}
                    >
                      {formEl &&
                        formEl.map((el, key) => (
                          <MenuItem key={key} value={el.value}>
                            {el.label}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            <Divider light />
            <FormGroup row sx={{ alignItems: "center" }}>
              <Tooltip title="Delete Element" aria-label="delete-element">
                <IconButton
                  aria-label="delete-element"
                  onClick={() => deleteEl(item.id)}
                  sx={{ ml: 2 }}
                >
                  <DeleteOutlineOutlined color="secondary" />
                </IconButton>
              </Tooltip>
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item>
          <Tooltip title="Add Element" aria-label="add-element">
            {isLast ? (
              <IconButton aria-label="add-element" onClick={addElement}>
                <AddCircleOutlineOutlined color="secondary" />
              </IconButton>
            ) : (
              <></>
            )}
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default TextFieldInput;
