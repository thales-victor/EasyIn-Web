import React from 'react';
import TextField from '@material-ui/core/TextField';
import './style.scss'
  
  export default function TextFields( {children, label}) {

    return (

          <TextField
            className="cor"
            id="outlined-required"
            label={label}
            variant="outlined"
          />
        

   
    );
  }