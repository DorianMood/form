import * as React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useController } from "react-hook-form";

function SelectWrapper({ control, label, name, options, display }) {

  const { field } = useController({ control, name });

  React.useEffect(() => {
    // В случае изменения display
    // нужно поменять значение field на то же самое
    // чтобы вызвать ререндер зависимых полей
    field.onChange(field.value || options[0]);
  }, [display, field, options]);

  return (
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
  );
}

export default SelectWrapper;
