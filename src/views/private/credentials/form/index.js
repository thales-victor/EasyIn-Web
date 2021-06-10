import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Form, Input } from '@rocketseat/unform';
import Button from '../../../../components/elements/Button';
import Select from '../../../../components/elements/Select';
import { CreateCredential, GetCredentialById, UpdateCredential } from '../../../../services/api/credential';
import { GetAllPlatforms } from '../../../../services/api/platform';
import { ChangeInputType, SetInputValueByName } from '../../../../utils/SetInputValue';
import toast from '../../../../components/alert';
import { Grid } from '@material-ui/core';
import RandomPasswordDialog from './randomPasswordDialog';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

import './styles.scss';

function CredentialsFormPage() {
  const history = useHistory();
  const filter = createFilterOptions();
  const { id } = useParams();

  const createMsg = "Criar ";
  const newPlatformId = 999;

  const [isNew, setIsNew] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [platforms, setPlatforms] = useState([]);
  const [platformId, setPlatformId] = useState();
  const [openRandomPasswordDialog, setOpenRandomPasswordDialog] = useState(false);


  useEffect(() => {
    getCredential();
    getPlatforms();
  }, [])

  async function getCredential() {
    if (id == 0) {
      return;
    }
    setIsNew(false);

    const result = await GetCredentialById(id);
    if (result) {
      setInputValues(result);
    }
  }

  function setInputValues(data) {
    setPlatformId(data.platform.id);
    SetInputValueByName('username', data.username);
    SetInputValueByName('password', data.password);
  }

  async function getPlatforms() {
    const result = await GetAllPlatforms();
    if (result) {
      setPlatforms(result);
    }
  }

  function handleSubmit(data) {
    if (isNew) {
      create(data);
    } else {
      update(data);
    }
  }

  async function create(data) {
    const result = await CreateCredential(platformId, data.username, data.password, data.confirmPassword);
    if (result) {
      toast.success('Credencial criada');
      setIsNew(false);
      history.push('/credentials/' + result.id);
    }
  }

  async function update(data) {
    const result = await UpdateCredential(id, data.username, data.password);
    if (result) {
      toast.success('Credencial atualizada');
      setInputValues(result);
    }
  }

  function handleClickShowPassword() {
    ChangeInputType('password', showPassword ? 'text' : 'password');
    ChangeInputType('confirmPassword', showPassword ? 'text' : 'password');
    setShowPassword(!showPassword);
  }


  function handleChangePlatform(event, value) {
    if (value.name.includes(createMsg)) {
      const newPlatform = {
        id: newPlatformId,
        name: value.id
      }
      setPlatforms([...platforms, newPlatform]);
      setTimeout(() => {
        setPlatformId(newPlatform.id);
      }, 1000);
    } else {
      setPlatformId(value.id);
    }
  }

  function handleFilterOptions(options, params) {
    console.log([options, params]);
    const filtered = filter(options, params);
    if (params.inputValue !== '') {
      filtered.push({
        id: params.inputValue,
        name: `${createMsg} '${params.inputValue}'`,
      });
    }

    return filtered;
  }

  function handleOpenRandomPasswordDialog() {
    setOpenRandomPasswordDialog(true);
  }

  function handleCloseRandomPasswordDialog() {
    setOpenRandomPasswordDialog(false);
  }


  function setRandomPassword(data) {
    SetInputValueByName('password', data);
  }

  return (

    <section>
      <div className="card" >
        <h2 className="titulo">{isNew ? 'Criar' : 'Editar'} senha</h2>
        <div className="form">
          <div>
            <Form onSubmit={handleSubmit}>
              <Autocomplete
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                className="platforms"
                value={platformId}
                onChange={handleChangePlatform}
                filterOptions={handleFilterOptions}
                options={platforms.sort((a, b) => a.allowIntegratedLogin === b.allowIntegratedLogin ? 0 : a.allowIntegratedLogin ? -1 : 1)}
                groupBy={(option) => option.allowIntegratedLogin ? 'Login automatizado' : 'Sem login automatizado'}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} fullWidth label="Plataformas" variant="outlined" disabled={!isNew} />}
              />
              <Select name="platform" value={platformId} onChange={handleChangePlatform} disabled={!isNew}>
                {
                  platforms.map((platform) => {
                    return <option key={platform.id} value={platform.id}>{platform.name}</option>
                  })
                }
              </Select>
              <br />
              <br />
              <Input name="username" type="text" placeholder="Usuário ou email" autoComplete="email" />
              <br />
              <br />
              <Input name="password" type="password" placeholder="Senha" autoComplete="new-password" />
              <br />
              <br />
              {
                isNew && (
                  <>
                    <Input name="confirmPassword" type="password" placeholder="Confirmar senha" />
                    <br />
                    <br />
                  </>
                )
              }
              <Grid container xs={12} spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Button type="button" onClick={handleOpenRandomPasswordDialog}>
                    Gerar senha aleatória
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button type="button" onClick={handleClickShowPassword}>
                    {showPassword ? 'Mostrar' : 'Esconder'} senha
                  </Button>
                </Grid>
              </Grid>

              <div className="mt-32">
                <Button tag="a" color="dark" className="botao" href="/credentials">
                  Voltar
                </Button>
                <Button type="submit" className="button button-primary">
                  {isNew ? 'Criar' : 'Atualizar'}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <RandomPasswordDialog open={openRandomPasswordDialog} handleClose={handleCloseRandomPasswordDialog} setPassword={setRandomPassword} />
    </section>
  );
}

export default CredentialsFormPage;