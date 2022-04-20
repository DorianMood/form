import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import * as React from "react";

// TODO: finish units, step, min, max, help

function TextFieldWrapper({ name, label, control }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          label={label}
          name={name}
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
}

export default TextFieldWrapper;
