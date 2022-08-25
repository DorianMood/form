import * as React from "react";
import { useForm } from "react-hook-form";
import { LinearProgress, Grid, Box } from "@mui/material";

import "./App.css";
import Form from "./Form";
import FieldSet from "./FieldSet";

import { mapFields } from "./fields";

function App({ config }) {
  const [form, setForm] = React.useState();

  const {
    control,
    handleSubmit,
    watch
  } = useForm();

  React.useEffect(() => {
    // Load the form from config
    setForm(config);
  }, [config]);

  React.useEffect(() => {
    if (form !== undefined) {
      console.log(form.parameters)
      const subscription = watch((value, { name, type }) => {
        if (form.parameters.includes(name)) {
          console.log(value, name, type);
        }
      })
      return () => subscription.unsubscribe();
    }
  }, [watch, form]);

  if (form === undefined) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress sx={{ height: 10 }} />
      </Box>
    );
  }

  const onSubmit = async (data) => {
    form.onSubmit(data);
  };

  // TODO : using of watch causes rerenders
  const parametersValues = watch(form.parameters);

  return (
    <Box padding={2}>
      <Form name={form.name} onSubmit={handleSubmit(onSubmit)}>
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
