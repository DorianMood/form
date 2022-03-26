import * as React from "react";
import FieldSet from "./FieldSet";

function Form(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <form>
        <FieldSet name="general" legend="Основные" />
      </form>
    </>
  );
}

export default Form;
