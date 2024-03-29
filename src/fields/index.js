import * as React from "react";
import { Grid } from "@mui/material";

import CheckboxWrapper from "./CheckboxWrapper";
import ToggleWrapper from "./ToggleWrapper";
import SelectWrapper from "./SelectWrapper";
import TextFieldWrapper from "./TextFieldWrapper";
import SwitchWrapper from "./SwitchWrapper";
import VideoInput from "./VideoInput";
import ImageInput from "./ImageInput";

export function mapFields(fields, control, parameters, parametersValues) {
  return fields.map((field, fieldIndexInSection) => {
    const getFieldWrapper = () => {
      let body;
      let options;
      if (typeof field.display === typeof []) {
        options = field.options[0];
        field.display.forEach((condition, index) => {
          const conditionBody = `return ${condition}`;
          const display = new Function(parameters, conditionBody);
          if (display(...parametersValues)) {
            body = conditionBody;
            options = field.options[index];
          }
        });
      } else {
        body = `return ${field.display}`;
        options = field.options;
      }
      const display = new Function(parameters, body)(...parametersValues);
      switch (field.type) {
        case "string":
          return (
            <TextFieldWrapper
              name={field.name || field.label}
              label={field.label || field.name}
              control={control}
              inputProps={{ ...field.inputProps, type: "string" }}
              units={field.units}
              display={display}
            />
          );
        case "number":
          return (
            <TextFieldWrapper
              name={field.name || field.label}
              label={field.label || field.name}
              control={control}
              inputProps={{ ...field.inputProps, type: "number" }}
              units={field.units}
              display={display}
            />
          );
        case "switch":
          return (
            <SwitchWrapper
              name={field.name || field.label}
              label={field.label || field.name}
              control={control}
              display={display}
            />
          );
        case "select":
          return (
            <SelectWrapper
              name={field.name || field.label}
              label={field.label || field.name}
              options={options}
              control={control}
              display={display}
            />
          );
        case "video":
          return (
            <VideoInput
              name={field.name || field.label}
              label={field.label || field.name}
              control={control}
              display={display}
            />
          );
        case "image":
          return (
            <ImageInput
              name={field.name || field.label}
              label={field.label || field.name}
              control={control}
              display={display}
            />
          );
        case "toggle":
          return (
            <ToggleWrapper
              name={field.name || field.label}
              label={field.label || field.name}
              control={control}
              options={field.options}
              display={display}
            />
          );
        case undefined:
          return mapFields(field.fields, control, parameters, parametersValues);
        default:
          return `Поле с именем "${field.name}" имеет неизвестный тип: "${field.type}"`;
      }
    };

    return (
      <Grid
        item
        sm={field.sm || 3}
        container={field.type === undefined}
        key={fieldIndexInSection}
      >
        {getFieldWrapper()}
      </Grid>
    );
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
