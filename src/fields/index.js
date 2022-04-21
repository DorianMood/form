import { Grid } from "@mui/material";

import CheckboxWrapper from "./CheckboxWrapper";
import ToggleWrapper from "./ToggleWrapper";
import SelectWrapper from "./SelectWrapper";
import TextFieldWrapper from "./TextFieldWrapper";
import SwitchWrapper from "./SwitchWrapper";
import VideoInput from "./VideoInput";
import ImageInput from "./ImageInput";

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
              inputProps={{ ...field.inputProps, type: "string" }}
              units={field.units}
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
              inputProps={{ ...field.inputProps, type: "number" }}
              units={field.units}
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
      case "select":
        return (
          <Grid item sm={field.sm || 3}>
            <SelectWrapper
              name={field.name || field.label}
              label={field.label || field.name}
              options={field.options}
              control={control}
            />
          </Grid>
        );
      case "video":
        return (
          <Grid item sm={field.sm || 3}>
            <VideoInput
              name={field.name || field.label}
              label={field.label || field.name}
              control={control}
            />
          </Grid>
        );
      case "image":
        return (
          <Grid item sm={field.sm || 3}>
            <ImageInput
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
  ImageInput,
  VideoInput,
};
