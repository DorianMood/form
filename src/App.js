import * as React from "react";
import { useForm } from "react-hook-form";
import { Stack, LinearProgress, Grid, Box } from "@mui/material";

import "./App.css";
import Form from "./Form";
import FieldSet from "./FieldSet";

import { mapFields } from "./fields";

function App({ config }) {
  const [form, setForm] = React.useState();
  const { control, handleSubmit, watch } = useForm();

  React.useEffect(() => {
    setForm(config);
  }, []);

  if (form === undefined) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress sx={{ height: 10 }} />
      </Box>
    );
  }

  const parametersValues = watch(form.parameters);

  return (
    <Box padding={2}>
      <Form name={form.name} onSubmit={handleSubmit}>
        {form.sections.map((section, sectionIndex) => (
          <FieldSet
            name={section.name}
            legend={section.legend}
            key={sectionIndex}
          >
            <Grid container spacing={2}>
              {mapFields(
                section.fields,
                control,
                form.parameters,
                parametersValues
              )}
            </Grid>
          </FieldSet>
        ))}
      </Form>
    </Box>
  );
}

export default App;
