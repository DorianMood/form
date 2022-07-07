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

  const {
    control,
    handleSubmit,
    watch
  } = useForm();

  React.useEffect(() => {
    setForm(config);
  }, [config]);

  React.useEffect(() => {
    BX24.callMethod('user.get').then(result => {
      setUser(result.data())
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
    // TODO здесь будет отправка данных на сервер.
    alert(
      "Данные формы выведены в консоль. Для того чтобы открыть консоль нажмите F12."
    );
    console.log("%cДанные формы:", "color: green; font-size: 24px;");
    console.log(data);
  };

  const parametersValues = watch(form.parameters);

  return (
    <Box padding={2}>
      <span>{user}</span>
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
