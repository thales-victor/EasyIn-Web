import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import './style.scss'
  
  export default function TextSelect( {plataform, label,onChange, children}) {

    function handleChange(event){
      onchange(event.target.value);
    }

    return (

          <TextField
          className="cor"
          id="outlined-select-currency"
          select
          label={label}
          value={plataform}
          onChange={onChange}
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
        >
          {children}
        </TextField>
        

   
    );
  }