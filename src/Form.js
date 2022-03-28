import { Button } from "@mui/material";
import * as React from "react";
import FieldSet from "./FieldSet";

function Form(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <form>
        {props.children}
        <Button onClick={props.onSubmit} />
      </form>
    </>
  );
}

export default Form;
