import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import * as React from "react";

function SelectWrapper({ control, label, name, options }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select
            defaultValue={options[0]}
            value={field.value}
            onChange={field.onChange}
            label={label}
          >
            {options.map((item, index) => (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}

export default SelectWrapper;
