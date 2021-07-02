import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import './style.scss'
  
  export default function TextSelect( {plataform, label,handleChange}) {

    return (

          <TextField
          className="cor"
          id="outlined-select-currency"
          select
          label={label}
          value={plataform}
          onChange={handleChange}
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
        ></TextField>
        

   
    );
  }