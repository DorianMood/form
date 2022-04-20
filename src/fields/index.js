import { Grid } from "@mui/material";

import CheckboxWrapper from "./CheckboxWrapper";
import ToggleWrapper from "./ToggleWrapper";
import SelectWrapper from "./SelectWrapper";
import TextFieldWrapper from "./TextFieldWrapper";
import SwitchWrapper from "./SwitchWrapper";

export function mapFields(fields, control) {
  return fields.map((field, fieldIndexInSection) => {
    switch (field.type) {
      case "string":
        return (
          <Grid item sm={field.sm || 3}>
            <TextFieldWrapper
              name={field.name || field.label}
              label={field.label || field.name}
              control={control}
            />
          </Grid>
        );
      case "number":
        return (
          <Grid item sm={field.sm || 3}>
            <TextFieldWrapper
              name={field.name || field.label}
              label={field.label || field.name}
              control={control}
            />
          </Grid>
        );
      case "switch":
        return (
          <Grid item sm={field.sm || 3}>
            <SwitchWrapper
              name={field.name || field.label}
              label={field.label || field.name}
              control={control}
            />
          </Grid>
        );
    }
  });
}

export {
  CheckboxWrapper,
  ToggleWrapper,
  TextFieldWrapper,
  SelectWrapper,
  SwitchWrapper,
};
