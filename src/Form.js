import * as React from "react";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import FieldSet from "./FieldSet";

function Form(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <form>
        {props.children}
        <Box sx={{ textAlign: "center", p: 2 }}>
          <LoadingButton
            loading={false}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            onClick={() => {
              props.onSubmit();
            }}
            size="large"
            variant="contained"
          >
            Отправить
          </LoadingButton>
        </Box>
      </form>
    </>
  );
}

export default Form;
