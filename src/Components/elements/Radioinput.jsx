import { DeleteOutlineOutlined } from "@mui/icons-material";
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

const RadioInput = ({
  item,
  handleValue,
  deleteEl,
  handleElType,
  handleOptionValues,
}) => {
  return (
    <>
      <Paper elevation={1}>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <TextField
                value={item.value}
                variant="outlined"
                onChange={(e) => handleValue(item.id, e)}
                fullWidth
                required={item.required}
                placeholder="Textfield Label"
                sx={{ mb: 2 }}
              />
              {item.optionss &&
                item.optionss.length > 0 &&
                item.optionss.map((opt, key) => (
                  <Box sx={{ display: "flex" }}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder={`Radio Option ${key + 1}`}
                      defaultValue={opt?.value}
                      key={opt?.id}
                      sx={{ mb: 1 }}
                      onBlur={(e) =>
                        handleOptionValues(item?.id, opt?.id, e.target.value)
                      }
                    />
                  </Box>
                ))}
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
    </>
  );
};

export default RadioInput;
