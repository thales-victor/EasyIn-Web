import React from 'react';
import { FormControlLabel, Checkbox, Grid } from '@material-ui/core';

// import { Container } from './styles';

function CheckboxOnDialog({checked, onChange, name, label}) {
  return (
    <Grid item xs={6}>
      <FormControlLabel
        classes={{ label: "checkbox-label" }}
        control={
          <Checkbox
            size="small"
            checked={checked}
            onChange={onChange}
            name={name}
            color="primary"
          />
        }
        label={label}
      />
    </Grid>
  );
}

export default CheckboxOnDialog;