import { InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import * as React from "react";

// TODO: help

function TextFieldWrapper({
  name,
  label,
  control,
  inputProps,
  units,
  display,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          disabled={!display}
          fullWidth
          label={label}
          name={name}
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          {...inputProps}
          InputProps={{
            inputprops: inputProps,
            endAdornment: units && (
              <InputAdornment position="end">{units}</InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}

export default TextFieldWrapper;
