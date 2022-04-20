import * as React from "react";
import { Controller } from "react-hook-form";
import {
  ToggleButtonGroup,
  ToggleButton,
  FormGroup,
  FormLabel,
} from "@mui/material";

function ToggleWrapper(props) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <>
          <FormLabel>{props.label}</FormLabel>
          <FormGroup>
            <ToggleButtonGroup
              value={field.value}
              exclusive
              onChange={field.onChange}
            >
              {props.options.map((item, index) => (
                <ToggleButton value={item} aria-label={item} key={index}>
                  {item}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </FormGroup>
        </>
      )}
    />
  );
}

export default ToggleWrapper;
