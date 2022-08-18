import * as React from "react";
import { useForm } from "react-hook-form";
import { LinearProgress, Grid, Box } from "@mui/material";

import "./App.css";
import Form from "./Form";
import FieldSet from "./FieldSet";

import { mapFields } from "./fields";
import BX24 from "bx24-api";

function App({ config }) {
  const [form, setForm] = React.useState();
  const [user, setUser] = React.useState();
  const [auth, setAuth] = React.useState();

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
    // Get data from bitrix 24 API after the component have been mounted

    BX24.callMethod('user.get').then(result => {
      const userData = result.data();
      setUser(userData);
      console.log('BITRIX USER : ', userData);
    });

    BX24.getAuth().then(result => {
      const auth = result.data();
      setAuth(auth);
      //console.log('BITRIX AUTH DATA : ', userData);
    })
  }, [])

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
