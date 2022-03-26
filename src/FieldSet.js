import * as React from "react";

function FieldSet(props) {
  return (
    <fieldset name={props.name}>
      <legend>{props.legend}</legend>
    </fieldset>
  );
}

export default FieldSet;
