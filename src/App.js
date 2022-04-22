import * as React from "react";
import { useForm } from "react-hook-form";
import { Container, Grid } from "@mui/material";

import "./App.css";
import Form from "./Form";
import FieldSet from "./FieldSet";

import form from "./fields.config.json";
import { mapFields } from "./fields";

function App() {
  const { control, handleSubmit, watch } = useForm();

  const parametersValues = watch(form.parameters);

  return (
    <Container>
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
    </Container>
  );
}

export default App;
