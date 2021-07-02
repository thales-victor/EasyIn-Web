import React from 'react';
import TextField from '@material-ui/core/TextField';
import './style.scss'

export default function TextFields({ name, label, type, value, setValue }) {

  function handleChange (value) {
    setValue(value.target.value);
  }

  return (
    <TextField
      classes={{ root: "cor" }}
      name={name}
      id="outlined-required"
      label={label}
      variant="outlined"
      type={type}
      value={value}
      onChange={handleChange}
      InputLabelProps={{
        classes: {
          root: "text"
        }
      }}
      InputProps={{
        className: "input-root",
        classes: {
          input: "input",
          notchedOutline: "teste"
        }
      }}
    />
  );
}