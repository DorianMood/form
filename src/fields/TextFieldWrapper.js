import { InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import * as React from "react";

// TODO: finish units, step, min, max, help, fullWidth, multiline

function TextFieldWrapper({ name, label, control, inputProps, units }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          fullWidth
          label={label}
          name={name}
          value={field.value}
          onChange={field.onChange}
          {...inputProps}
          InputProps={{
            endAdornment: units && <InputAdornment>{units}</InputAdornment>,
          }}
        />
      )}
    />
  );
}

export default TextFieldWrapper;
