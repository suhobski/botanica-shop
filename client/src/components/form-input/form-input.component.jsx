import React from "react";
import { Label, Input } from "./form-input.styles";

function FormInput({ label, id, handleChange, ...otherProps }) {
  return (
    <Label htmlFor={id}>
      {label}
      <Input id={id} onChange={handleChange} {...otherProps} />
    </Label>
  );
}

export default FormInput;
