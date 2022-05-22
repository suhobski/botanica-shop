/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Label, Input } from './form-input.styles';

const FormInput = ({ label, id, handleChange, ...otherProps }) => (
  <Label htmlFor={id}>
    {label}
    <Input id={id} onChange={handleChange} {...otherProps} />
  </Label>
);

export default FormInput;
