import { TextField } from "@mui/material";
import * as React from "react";

function Text(props) {
  const [value, setValue] = React.useState(props.default | "");

  return (
    <TextField
      label={props.label}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export default Text;
