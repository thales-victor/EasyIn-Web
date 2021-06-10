import React, { useEffect, useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, Typography, DialogTitle, Grid } from '@material-ui/core';
import CheckboxOnDialog from '../../../../../components/checkboxOnDialog';
import { GenerateRandomPassword } from '../../../../../services/api/randomPassword';
import './styles.scss';

function RandomPasswordDialog({ open, handleClose, setPassword }) {
  const [generated, setGenerated] = useState(false);
  const [passwordSize, setPasswordSize] = useState(8);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSpecial, setUseSpecial] = useState(true);
  const [randomPassword, setRandomPassword] = useState('');

  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open])

  function reset() {
    setGenerated(false);
    setPasswordSize(8);
    setUseLowerCase(true);
    setUseUpperCase(true);
    setUseNumbers(true);
    setUseSpecial(true);
    setRandomPassword('');
  }

  function handleChangePasswordSize(event) {
    let size = event.target.value;

    if (size < 4) {
      size = 4;
    } else if (size > 25) {
      size = 25;
    }

    setPasswordSize(size);
  }

  async function handleClickGenerate() {
    const result = await GenerateRandomPassword(passwordSize, useLowerCase, useUpperCase, useNumbers, useSpecial);
    if (result) {
      setGenerated(true);
      setRandomPassword(result.password);
    }
  }

  function handleClickUsePassword() {
    setPassword(randomPassword);
    handleClose();
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      className="randomPasswordDialog"
      scroll="body"
    >
      <DialogTitle className="title">Gerar senha aleatória</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body2" color="secondary">
          <strong>ATENÇÃO:</strong> Gerar uma senha aleatória não altera a senha na plataforma desejada, apenas auxilia na criação de uma nova senha segura.
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} className="mg-t-30">
            <TextField
              autoFocus
              required
              fullWidth
              variant="outlined"
              label="Tamanho (4~25 dígitos)"
              type="number"
              value={passwordSize}
              onChange={event => setPasswordSize(event.target.value)}
              onBlur={handleChangePasswordSize}
              InputProps={{
                inputProps: {
                  min: 4,
                  max: 25
                }
              }}
            />
          </Grid>
          <CheckboxOnDialog
            label="Letras minúsculas"
            name="useLowerCase"
            checked={useLowerCase}
            onChange={(event) => setUseLowerCase(event.target.checked)}
          />
          <CheckboxOnDialog
            label="Letras maiúsculas"
            name="useUpperCase"
            checked={useUpperCase}
            onChange={(event) => setUseUpperCase(event.target.checked)}
          />
          <CheckboxOnDialog
            label="Números"
            name="useNumbers"
            checked={useNumbers}
            onChange={(event) => setUseNumbers(event.target.checked)}
          />
          <CheckboxOnDialog
            label="Caracteres especiais"
            name="useSpecial"
            checked={useSpecial}
            onChange={(event) => setUseSpecial(event.target.checked)}
          />
          <Grid item xs={12} className="mg-t-30">
            <TextField
              fullWidth
              variant="outlined"
              id="randomPassword"
              label="Nova senha"
              disabled
              value={randomPassword}
            />
          </Grid>
        </Grid>
      </DialogContent >
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
          </Button>
        <Button onClick={handleClickGenerate} color="primary">
          Gerar
        </Button>
        <Button onClick={handleClickUsePassword} color="primary" disabled={!generated}>
          Usar
        </Button>
      </DialogActions>
    </Dialog >
  );
}

export default RandomPasswordDialog;