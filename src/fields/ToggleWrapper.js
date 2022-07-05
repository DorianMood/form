import * as React from "react";
import { useController } from "react-hook-form";
import {
  ToggleButtonGroup,
  ToggleButton,
  FormGroup,
  FormLabel,
} from "@mui/material";

function ToggleWrapper({ control, label, name, options, display }) {
  const { field } = useController({ control, name });
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <FormGroup>
        <ToggleButtonGroup
          value={field.value}
          exclusive
          onChange={field.onChange}
          disabled={!display}
          display
        >
          {options.map((item, index) => (
            <ToggleButton value={item} aria-label={item} key={index}>
              {item}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </FormGroup>
    </>
  );
}

export default ToggleWrapper;
