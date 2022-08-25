import * as React from 'react';
import { useController } from "react-hook-form";
import { Grid, Typography } from '@mui/material';
import { mapFields } from '.';

export default function MultiWrapper({ name, label, fields, control, display, parameters, parametersValues }) {

  const { field } = useController({ control, name, display });
  const controls = mapFields(fields, control, parameters, parametersValues);

  return (
    <>
      <Typography variant="subtitle1">{label}</Typography>
      <Grid container={true}>
        {controls}
      </Grid>
    </>
  );
}