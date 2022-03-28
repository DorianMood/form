import * as React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

function CheckboxField(props) {
  return (
    <FormControlLabel control={<Checkbox />} label={props.label} {...props} />
  );
}

export default CheckboxField;
