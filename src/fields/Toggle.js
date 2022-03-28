import * as React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

import Field from "./Field.js";

function Toggle(props) {
  const [value, setValue] = React.useState(props.options[0]);

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={(event, newValue) => setValue(newValue)}
    >
      {props.options.map((item, index) => (
        <ToggleButton value={item} aria-label={item} key={index}>
          {item}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default Toggle;
