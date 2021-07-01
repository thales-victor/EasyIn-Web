import React from 'react';
import TextField from '@material-ui/core/TextField';
import './style.scss'

export default function TextFields({ children, label }) {

  return (
    <TextField
      classes={{ root: "cor" }}
      id="outlined-required"
      label={label}
      variant="outlined"
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