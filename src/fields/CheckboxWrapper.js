import * as React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { Controller } from "react-hook-form";

function CheckboxWrapper({ control, label, name }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox onChange={field.onChange} checked={field.value} />}
          label={label}
        />
      )}
    />
  );
}

export default CheckboxWrapper;
