import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Form, Input } from '@rocketseat/unform';
import Button from '../../../../components/elements/Button';
import Select from '../../../../components/elements/Select';
import { CreateCredential, GetCredentialById, UpdateCredential } from '../../../../services/api/credential';
import { GetAllPlatforms } from '../../../../services/api/platform';
import { ChangeInputType, SetInputValueByName } from '../../../../utils/SetInputValue';
import toast from '../../../../components/alert';
import { Grid, MenuItem } from '@material-ui/core';
import RandomPasswordDialog from './randomPasswordDialog';
import SimpleCard from '../../../../components/card';
import Container from '../../../../components/layout/container';
import TextFields from '../../../../components/textField';
import TextSelect from '../../../../components/textSelect';

// import { Container } from './styles';

function CredentialsFormPage() {
  const history = useHistory();
  const { id } = useParams();

  const [isNew, setIsNew] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [platforms, setPlatforms] = useState([]);
  const [platformId, setPlatformId] = useState(0);
  const [openRandomPasswordDialog, setOpenRandomPasswordDialog] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
    setUsername(data.username);
    setPassword(data.password);
  }

  async function getPlatforms() {

    const choosePlatform = { id: 0, name: "Escolha a plataforma" }
    const result = await GetAllPlatforms();
    if (result) {
      setPlatforms([choosePlatform, ...result]);
    }
  }

  function handleSubmit(data) {
    if (isNew) {
      create(data);
    } else {
      update(data);
    }
  }

  async function create() {
    const result = await CreateCredential(platformId, username, password, confirmPassword);
    if (result) {
      toast.success('Credencial criada');
      setIsNew(false);
      history.push('/credentials/' + result.id);
    }
  }

  async function update() {
    const result = await UpdateCredential(id, username, password);
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


  function handleChangePlatform(event) {
    console.log(event.target.value)
    setPlatformId(event.target.value)
  }

  function handleOpenRandomPasswordDialog(){
    setOpenRandomPasswordDialog(true);
  }

  function handleCloseRandomPasswordDialog(){
    setOpenRandomPasswordDialog(false);
  }


  function setRandomPassword(data) {
    SetInputValueByName('password', data);
  }

  return (

    <Container>
      <SimpleCard title="Criar/Editar senha" >
        <br></br>
            <Form onSubmit={handleSubmit}>
              <TextSelect label="Plataforma" value={platformId} onChange={handleChangePlatform} disabled={!isNew}>
                {
                  platforms.map((platform) => {
                    return <MenuItem key={platform.id} value={platform.id}>{platform.name}</MenuItem>
                  })
                }
              </TextSelect  >
              <br />
              <br />
              <TextFields name="username" type="text" value={username} setValue={setUsername} label="Usuário ou email" autoComplete="email" />
              <br />
              <br />
              <TextFields name="password" type="password" value={password} setValue={setPassword} label="Senha" autoComplete="new-password" />
              <br />
              <br />
              {
                isNew && (
                  <>
                    <TextFields name="confirmPassword" value={confirmPassword} setValue={setConfirmPassword} type="password" label="Confirmar senha" />
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
                <Button tag="a" color="dark" className="botao wdt-200" href="/credentials">
                  Voltar
                </Button>
                <Button type="submit" className="button wdt-200 button-primary">
                  {isNew ? 'Criar' : 'Salvar'}
                </Button>
              </div>
            </Form>
      </SimpleCard>
      <RandomPasswordDialog open={openRandomPasswordDialog} handleClose={handleCloseRandomPasswordDialog} setPassword={setRandomPassword} />
      </Container>
  );
}

export default CredentialsFormPage;