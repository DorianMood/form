import * as React from "react";

function FieldSet(props) {
  return (
    <fieldset name={props.name}>
      <legend>{props.legend}</legend>
      {props.children}
    </fieldset>
  );
}

export default FieldSet;
