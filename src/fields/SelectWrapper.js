import * as React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

function SelectWrapper({ control, label, name, options, display }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth disabled={!display}>
          <InputLabel>{label}</InputLabel>
          <Select
            defaultValue={options[0]}
            onChange={(e) => field.onChange(e.target.value)}
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
