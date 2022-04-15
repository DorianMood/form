import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import * as React from "react";

function DropDown(props) {
  const [value, setValue] = React.useState(props.options[0]);

  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select
        value={value}
        onChange={(event) => setValue(event.target.value)}
        label={props.label}
      >
        {props.options.map((item, index) => (
          <MenuItem value={item} key={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DropDown;
