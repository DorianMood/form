import * as React from "react";
import SubmitButton from "./components/SubmitButton";

function Form(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <form>
        {props.children}
        <SubmitButton onSubmit={props.onSubmit} />
      </form>
    </>
  );
}

export default Form;
