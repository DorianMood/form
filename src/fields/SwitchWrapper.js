import { Switch, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

export default function SwitchWrapper({ control, name, label, display }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Switch
              onChange={(e) => field.onChange(e.target.checked)}
              checked={Boolean(field.value)}
              disabled={!display}
            />
          }
          label={label}
        />
      )}
    />
  );
}
