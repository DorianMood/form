import * as React from "react";
import { FormControl, InputLabel } from "@mui/material";

function Field(props) {
  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      {props.children}
    </FormControl>
  );
}

export default Field;
