import * as React from 'react'
import { Switch, FormControlLabel } from "@mui/material";
import { useController } from "react-hook-form";

export default function SwitchWrapper({ control, name, label, display, defaultChecked }) {
  const { field } = useController({ control, name });

  return (
    <FormControlLabel
      control={
        <Switch
          onChange={(e) => field.onChange(e.target.checked)}
          checked={Boolean(field.value) || defaultChecked}
          disabled={!display}
        />
      }
      label={label}
    />
  );
}
