import { Switch, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

export default function SwitchWrapper({ control, name, label }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Switch onChange={field.onChange} checked={field.value} />}
          label={label}
        />
      )}
    />
  );
}
