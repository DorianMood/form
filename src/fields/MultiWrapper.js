import * as React from 'react';
import { Controller, useController } from "react-hook-form";
import { FormControlLabel } from '@mui/material';
import { mapFields } from '.';

export default function MultiWrapper({ name, label, fields, control, display, parameters, parametersValues }) {

  const { field } = useController({ control, name, display });
  const controls = mapFields(fields, control, parameters, parametersValues);

  return (<>{controls}</>);
}